import React from 'react';
import { defineMessages } from 'react-intl';

const packages = {
  matupplevelsen: {
    id:0,
    price: {
      priceDouble: 1895,
      priceSingle: 1995,
      priceChild: 1495
    },
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
    included: defineMessages({
      bike: {
        id: 'booking.packages.matupplevelsen.bike',
        defaultMessage: '1 st Vuxencykel, 2 dagar'
      }
    }),
    imageUrl: '/static/img/packages/matupplevelsen.jpg',
    slug: "matupplevelsen"
  },
  storturen: {
    id:1,
    price: {
      priceDouble: 3495,
      priceSingle: 3495,
      priceChild: 2495,
    },
    messages: defineMessages({
      name: {
        id: 'booking.packages.storturen.name',
        defaultMessage: 'Stora Göta kanal paketet'
      },
      text: {
        id: 'booking.packages.storturen.text',
        defaultMessage: `<strong>Här är Café Visthusets stora Göta kanal-paket för dig som vill ha hela Göta kanalupplevelsen. Här ingår cykelturer i vacker natur, längs fält och vid slussar såväl som goda matupplevelser.</strong>
        <h4>Dag 1 Töreboda - Tåtorp, ca 15 km</h4>
        <p>Stora Göta kanal-paketet börjar i Töreboda där du hämtar ut din cykel och lunchpickick på Café Visthuset.Gratis WIFI Första dagen cyklar du på plan mark mot Tåtorp och cyklingen sker längs de gamla dragvägarna där båtarna drogs fram av oxar då kanalen fungerade som transportled åt fraktskepp. Här är Sveriges längsta allé. I det ekologiska vandrarhemmet i Tåtorp väntar kvällsmaten på vandrarhemmet där du bor på kvällen. Här är nära till fina badplatser. Du kan också hyra en båt för en fisketur på sjön Viken. Den vackra trädgården ger tillfälle till att bara vara. I Tåtorp finns också Göta kanals enda handvevade sluss.</p>
        <h4>Dag 2 - Tåtorp - Töreboda - Norrqvarn, ca 28 km</h4>
        <p>Efter frukosten bär det av mot Töreboda igen där lunchen finns på Café Visthuset. Här väljer ni något från caféets lunchmeny. Färden fortsätter sedan mot Sjötorp, Göta kanals hamn mot Vänern. Vägen mot Sjötorp går nedför och du passerar många slussar som var och en erbjuder ett tillfälle att pausa och förundras över konsten att slussa en båt. Här är vackert att strosa runt bland magasinen och bodarna. Det gamla Göta kanal-museet är även det värt ett besök! Ni checkar in på Norrqvarn där kvällen spenderas. Här väljer ni valfri varmrätt från restaurangens meny att avnjuta på bryggan, precis bredvid Göta kanal.</p>
        <h4>Dag 3 - Norrqvarn - Töreboda ca 13 km</h4>
        <p>Morgonen erbjuder en frukostbuffé och därefter en behaglig cykeltur tillbaka till Töreboda och Café Visthuset där en smarrig smörgåsbricka väntar er som avslutning på paketet.</p>`
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
    included: defineMessages({
      hotell: {
        id: 'booking.packages.storturen.included.hotell',
        defaultMessage: '1 hotellnatt, delad logi'
      },
      bike: {
        id: 'booking.packages.storturen.included.bike',
        defaultMessage: '1 st Vuxencykel'
      }
    }),
    imageUrl: '/static/img/Gota_kanal_Juno_locks.jpg',
    slug: "storturen"
  }
};

export default packages;
