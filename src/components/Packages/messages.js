import React from 'react';
import { defineMessages } from 'react-intl';

const packages = {
  matupplevelsen: {
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
        defaultMessage:"Ett paket fullt av härliga smaker från Skaraborg, kryddat med en nypa motion."
      },
      summary: {
        id: 'booking.packages.matupplevelsen.summary',
        defaultMessage: "2 dagar, 40km, 16 slussar"
      }
    }),
    imageUrl: '/static/img/packages/matupplevelsen.jpg',
    slug: "matupplevelsen"
  },
  storturen: {
    id:1,
    price: 3495,
    messages: defineMessages({
      name: {
        id: 'booking.packages.storturen.name',
        defaultMessage: 'Stora Göta kanal paketet'
      },
      text: {
        id: 'booking.packages.storturen.text',
        defaultMessage: "A Big package!"
      },
      short_text: {
        id: 'booking.packages.storturen.short_text',
        defaultMessage:"Här är Café Visthusets stora Göta kanal-paket för dig som vill ha hela Göta kanalupplevelsen. Här ingår cykelturer i vacker natur, längs fält och vid slussar såväl som goda matupplevelser."
      },
      summary: {
        id: 'booking.packages.storturen.summary',
        defaultMessage: "3 dagar, 70km, 17 slussar"
      }
    }),
    imageUrl: 'static/img/Gota_kanal_Juno_locks.jpg',
    slug: "storturen"
  }
};

export default packages;
