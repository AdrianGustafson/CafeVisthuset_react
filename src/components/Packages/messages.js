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
    imageUrl: '/img/packages/matupplevelsen.jpg',
    slug: "matupplevelsen"
  }
};

export default packages;
