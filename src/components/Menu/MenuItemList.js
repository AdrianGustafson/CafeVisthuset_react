import React from 'react';
import MenuItemComponent from './MenuItem';


const MenuItemList = props => {
  const itemList = [
    {
      'id': 0,
      'title': "Riktigt gott kaffe!",
      'shorttext': "Hos oss hittar du riktigt gott kaffe, varsamt rostat för att få fram den söta smaken",
      'text': "This is a Placeholder with **markdown**!",
      'image': "./img/menu/coffee.jpg"
  },
    {
      'id': 1,
      'title': "Söndagsbrunch",
      'shorttext': "Varje söndag servererar vi vår populära brunch",
      'text': "This is a Placeholder!",
      'image': "./img/menu/brunchpizza.jpg"
  },
    {
      'id': 2,
      'title': "Klings glass",
      'shorttext': "Vi serverar Klings goda glass från Mariestad",
      'text': "This is a Placeholder!",
      'image': "./img/menu/solglass.jpg"
  },
    {
      'id': 3,
      'title': "Egenbakat bröd",
      'shorttext': "Vi bakar allt vårt bröd själva på gammaldags mjölsorter från lokala kvarnar",
      'text': "This is a Placeholder!",
      'image': "./img/menu/bread.jpg"
    }
  ]

  return (
    <div>
      {
        itemList.map( item => {
          return (
            <MenuItemComponent
              title={item.title}
              shorttext={item.shorttext}
              text={item.text}
              image={item.image}
              key ={item.id}
            />)
        })

    }
  </div>
  );
};

export default MenuItemList;
