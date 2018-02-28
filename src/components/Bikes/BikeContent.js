import React from 'react';

const PriceInfo = () => {
  const text = "Ett härligt sätt att uppleva Göta Kanal är med cykel. Här cyklar du längs vattnet på bilfria vägar där oxarna förr drog fram fraktskepp. Känn det naturnära, lantliga lugnet infinna sig och upplev myllret av människor runt slussarna, dåtidens klurigaste ingenjörskonst! Du hämtar cyklarna på Café Visthuset i Töreboda som är en bra utgångspunkt för att hinna med hela Göta kanals västgötasida."
  return (
    <div className="price-info bike-content borded">
      <h2>Hyr cykel hos oss!</h2>
      <p>{text}</p>
      <table className="table table-sm">
        <caption>
          * I priset ingår även cykelhjälm samt service vid behov.
        </caption>
        <thead>
          <th scope="row" colSpan="3"><h3>Priser 2018</h3></th>
          <tr>
            <th scope="col">Cykel/tillbehör</th>
            <th scope="col">Pris 1 dag</th>
            <th scope="col">Extradag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Vuxencykel*</th>
            <td>200 kr</td>
            <td>100 kr/dag</td>
          </tr>
          <tr>
            <th scope="row">Ungdomscykel*</th>
            <td>150 kr</td>
            <td>75 kr/dag</td>
          </tr>
          <tr>
            <th scope="row">Barncykel*</th>
            <td>120 kr</td>
            <td>60 kr/dag</td>
          </tr>
          <tr>
            <th scope="row">Cykelkärra</th>
            <td>200 kr</td>
            <td>100 kr/dag</td>
          </tr>
          <tr>
            <th scope="row">Barnsadel</th>
            <td>50 kr</td>
            <td>50 kr/dag</td>
          </tr>
          <tr>
            <th scope="row">Picknicklunch</th>
            <td>85 kr</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const Info = ({image, title, text}) => {
  return (
    <div className="bike-info bike-content borded">
      <div className="info-image">
        <img src={image} alt="Röd Skeppshultcykel från Cafe Visthuset" />
        <div className="image-content">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
const BikeContent = () => {
  return (
    <div>
      <PriceInfo />
      <Info
        image="./img/bikes/biking.jpg"
        title="Våra cyklar"
        text="Våra cyklar är 3-växlade damcyklar från Skeppshult, utrustade med cykelkorg och pakethållare. I priset ingår även cykelhjälm och service utifall att olyckan skulle vara framme."/>
      <Info
        image="./img/bikes/lunchboxes.jpg"
        title="Lunchpaket från Café Visthuset"
        text="Vi erbjuder goda lunchpaket att ta med sig på cykelturen. Välj mellan vegetariskt, fisk eller kallskuret. Till något av alternativen får du även en fransk potatissallad och en grönsallad med dressing. I paketet ingår även kaffe och en dryck." />
      <div className="row">
        <div className="container">

        </div>
      </div>
    </div>
  );
}

export default BikeContent;
