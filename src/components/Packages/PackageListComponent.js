import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

import PackagesPreviewComponent from './PackagePreviewComponent';

const bikePkgs = [
  {
    id:0,
    price: 1895,
    messages: defineMessages({
      name: {
        id: 'booking.packages.matupplevelsen.name',
        defaultMessage: 'Matupplevelsen längs Göta kanal'
      },
      text: {
        id: 'booking.packages.matupplevelsen.text',
        defaultMessage: "This is a nice package!"
      },
      short_text: {
        id: 'booking.packages.matupplevelsen.short_text',
        defaultMessage:"A nice package!"
      },
    }),
    imageUrl: './img/packages/matupplevelsen.jpg',
    slug: ""
  },
]

const PackageListComponent = (props) => {
  const { formatMessage } = props.intl;
  return (
    <div>
      {
        bikePkgs.map((pkg) => {
          <PackagesPreviewComponent
            name={formatMessage(pkg.messages.name)}
            description={formatMessage(pkg.messages.text)}
            short_description={formatMessage(pkg.messages.short_text)}
            price={pkg.price}
            slug={pkg.slug}
            image={pkg.imageUrl}
            key={pkg.id}
          />
        })
      }
    </div>
  );
}

export default injectIntl(PackageListComponent);
