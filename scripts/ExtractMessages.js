var fs = require('fs')
var globSync = require('glob').sync
var mkdirpSync = require('mkdirp').sync

var locales = require('../config').i18n.locales

var filePattern = './public/assets/messages/**/*.json'
var outputDir = './public/locales/'

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
var defaultMessages = globSync(filePattern)
  .map((filename) => fs.readFileSync(filename, 'utf8'))
  .map((file) => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(function (d) {
      var id = d.id
      var defaultMessage = d.defaultMessage
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`)
      }
      collection[id] = defaultMessage
    })

    return collection
  }, {})
// Create a new directory that we want to write the aggregate messages to
mkdirpSync(outputDir)

// Write the messages to this directory
var messages = {}
Object.keys(locales).forEach(function (l) {
  messages[l] = defaultMessages
})
fs.writeFileSync(outputDir + 'data.json', JSON.stringify(messages, null, 2))
