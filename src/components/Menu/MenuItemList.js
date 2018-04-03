import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

import MenuItemComponent from './MenuItem';

class MenuItemList extends React.Component {
  render() {
  const itemList = [
    {
      id: 0,
      messages: defineMessages({
        title: {
          id:'menu.item.coffe.title',
          defaultMessage: "Riktigt gott kaffe!"
        },
        shorttext: {
          id: "menu.item.coffee.shorttext",
          defaultMessage: "Hos oss hittar du riktigt gott kaffe, varsamt rostat för att få fram den söta smaken",
        },
        text: {
          id: "menu.item.coffee.text",
          defaultMessage: "This is a Placeholder with **markdown**!"
        }
      }),
      'image': "static/img/menu/coffee.jpg"
  },
    {
      id: 1,
      messages: defineMessages({
        title: {
          id: 'menu.item.brunch.title',
          defaultMessage: "Söndagsbrunch"
        },
        shorttext: {
          id: 'menu.item.brunch.shorttext',
          defaultMessage: "Varje söndag servererar vi vår populära brunch"
        },
        text: {
          id: 'menu.item.brunch.text',
          defaultMessage: "This is a Placeholder!"
        }
      }),
      image: "static/img/menu/brunchpizza.jpg"
  },
    {
      id: 2,
      messages: defineMessages({
        title: {
          id: 'menu.item.icecream.title',
          defaultMessage: "Klings glass"
        },
        shorttext:{
          id: 'menu.item.icecream.shorttext',
          defaultMessage: "Vi serverar Klings goda glass från Mariestad"
        },
        text: {
          id: 'menu.item.icecream.text',
          defaultMessage: "This is a Placeholder!"
        }
      }),
      image: "static/img/menu/solglass.jpg"
  },
    {
      id: 3,
      messages: defineMessages({
      title: {
        id: 'menu.item.bread.title',
        defaultMessage:"Egenbakat bröd"
      },
      shorttext: {
        id: 'menu.item.bread.shorttext',
        defaultMessage: "Vi bakar allt vårt bröd själva på gammaldags mjölsorter från lokala kvarnar"
      },
      text: {
        id: 'menu.item.bread.text',
        defaultMessage: "This is a Placeholder!"
      }
    }),
      image: "static/img/menu/bread.jpg"
    }
  ]

  const { formatMessage } = this.props.intl;
  return (
    <div>
      {
        itemList.map( item => {
          return (
            <MenuItemComponent
              title={formatMessage(item.messages.title)}
              shorttext={formatMessage(item.messages.shorttext)}
              text={formatMessage(item.messages.text)}
              image={item.image}
              key ={item.id}
            />)
        })

    }
  </div>
  );
}};

export default injectIntl(MenuItemList);
