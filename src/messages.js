import React from 'react';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  // CTAs
  read_more: {
    id: 'app.cta.read_more',
    defaultMessage: 'Läs mer!'
  },
  read_more_and_book: {
    id: 'app.cta.read_more_and_book',
    defaultMessage: 'Läs mer och boka!'
  },
  close: {
    id: 'app.cta.close',
    defaultMessage: 'Stäng'
  },
  book: {
    id: 'app.cta.book',
    defaultMessage: 'boka!'
  },
  book_here: {
    id: 'app.cta.book_here',
    defaultMessage: 'Boka här'
  },
  // Form messages
  newsletter: {
    id: 'app.form.newsletter',
    defaultMessage: 'Vill du ha nyheter och erbjudanden'
  },
  privacy: {
    id: 'app.form.privacy',
    defaultMessage: 'Läs om hur vi hanterar dina personuppgifter'
  },
  name: {
    id: 'app.form.name',
    defaultMessage: 'Namn'
  },
  first_name: {
    id: 'app.form.first_name',
    defaultMessage: 'Förnamn'
  },
  last_name: {
    id: 'app.form.last_name',
    defaultMessage: 'Efternamn'
  },
  phone_number: {
    id: 'app.form.phone_number',
    defaultMessage: 'Telefonnummer'
  },
  email: {
    id: 'app.form.email',
    defaultMessage: 'Epost'
  },
  message: {
    id: 'app.form.message',
    defaultMessage: 'Meddelande till oss...'
  },
  send: {
    id: 'app.form.send',
    defaultMessage: 'Skicka'
  },
  // Error pages
  NotFoundTitle: {
    id: 'app.NotFoundTitle',
    defaultMessage: 'Sidan finns inte...'
  },
  NotFoundMessage: {
    id: 'app.NotFoundMessage',
    defaultMessage: 'Det verkar som att du hamnat på en sida som inte finns...'
  },
  // Info
  includedTitle: {
    id: 'app.info.includedTitle',
    defaultMessage: 'Det här ingår'
  },
  priceTitle: {
    id: 'app.info.priceTitle',
    defaultMessage: 'Pris'
  },
  priceDouble: {
    id: 'app.info.price.double',
    defaultMessage: 'Pris för delad logi'
  },
  priceSingle: {
    id: 'app.info.price.single',
    defaultMessage: 'Pris för enkelrum'
  },
  priceChild: {
    id: 'app.info.price.child',
    defaultMessage: 'Barnpris'
  }
});

// Pages
const pages = {
    packages: defineMessages({
      name: {
        id: 'app.page.packages',
        defaultMessage: 'Paketupplevelser'
      },
      supertitle: {
        id: "booking.packages.supertitle",
        defaultMessage: "Paketupplevelser | Café Visthuset"
      },
      title: {
        id: "booking.packages.title",
        defaultMessage:"Paketupplevelser hos Café Visthuset"
      }
    }),
    menu: defineMessages({
      name: {
        id: "app.page.menu",
        defaultMessage: 'Meny'
      },
      supertitle: {
        id: "menu.supertitle",
        defaultMessage: "Café Visthuset | Meny"
      },
      title: {
        id: "menu.title",
        defaultMessage: "Meny"
      }
    }),
    home: defineMessages({
      name: {
        id: "app.page.home",
        defaultMessage: 'Hem'
      },
      menuTitle: {
        id: "Home.preview.menu.title",
        defaultMessage: "Vår meny"
      },
      menuText: {
        id: "Home.preview.menu",
        defaultMessage: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
      },
      bikesTitle: {
        id: "Home.preview.bikes.title",
        defaultMessage: "Cykeluthyrning"
      },
      bikesText: {
        id: "Home.preview.bikes",
        defaultMessage: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
      },
      packagesTitle: {
        id: "Home.preview.package.title",
        defaultMessage: "Cykelpaket"
      },
      packagesText: {
        id: "Home.preview.package",
        defaultMessage: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
      }
    }),
    bikes: defineMessages({
      name:{
        id: 'app.page.bikes',
        defaultMessage: 'Cykeluthyrning'
      },
      supertitle: {
        id: "booking.bikes.supertitle",
        defaultMessage: "Cykeluthyrning | Café Visthuset"
      },
      title: {
        id: "booking.bikes.title",
        defaultMessage: "Café Visthusets Cykeluthyrning"
      },
      // Bike info
      bikeInfoTitle: {
        id: 'booking.bikes.bikeinfo.title',
        defaultMessage: "Våra cyklar"
      },
      bikeInfoBody: {
        id: 'booking.bikes.bikeinfo.body',
        defaultMessage: "Våra cyklar är 3-växlade damcyklar från Skeppshult, utrustade med cykelkorg och pakethållare. I priset ingår även cykelhjälm och service utifall att olyckan skulle vara framme."
      },
      bikeInfoAlt: {
        id: 'booking.bikes.bikeinfo.alt',
        defaultMessage: "Röd Skeppshultcykel från Cafe Visthuset"
      },
      // Lunch info
      lunchInfoTitle: {
        id: 'booking.bikes.lunchinfo.title',
        defaultMessage: "Lunchpaket från Café Visthuset"
      },
      lunchInfoBody: {
        id: 'booking.bikes.lunchinfo.body',
        defaultMessage: "Vi erbjuder goda lunchpaket att ta med sig på cykelturen. Välj mellan vegetariskt, fisk eller kallskuret. Till något av alternativen får du även en fransk potatissallad och en grönsallad med dressing. I paketet ingår även kaffe och en dryck."
      },
      lunchInfoAlt: {
        id: 'booking.bikes.lunchinfo.alt',
        defaultMessage: "Lunchpaket från Cafe Visthuset"
      }
    }),
    events: defineMessages({
      name: {
        id: 'app.page.events',
        defaultMessage: 'Evenemang'
      }
    }),
    about: defineMessages({
      name: {
        id: 'app.page.about',
        defaultMessage: 'Om oss'
      }
    }),
    contact: defineMessages ({
      name: {
        id: 'app.page.contact',
        defaultMessage: 'Kontakt'
      }
    })
  };

export { messages, pages };
