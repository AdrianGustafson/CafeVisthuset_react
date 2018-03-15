import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

import { pages } from '../../messages';

const PriceInfo = () => {
  return (
    <div className="price-info bike-content borded">
      <FormattedMessage
        id='booking.bikes.priceinfo.title'
        defaultMessage={'{txt}'}
        values={{txt: <h2>Hyr cykel hos oss!</h2>}}/>
      <FormattedMessage
        id='booking.bikes.priceinfo.body'
        defaultMessage="Ett härligt sätt att uppleva Göta Kanal är med cykel. Här cyklar du längs vattnet på bilfria vägar där oxarna förr drog fram fraktskepp. Känn det naturnära, lantliga lugnet infinna sig och upplev myllret av människor runt slussarna, dåtidens klurigaste ingenjörskonst! Du hämtar cyklarna på Café Visthuset i Töreboda som är en bra utgångspunkt för att hinna med hela Göta kanals västgötasida."
      />
      <table className="table table-sm">
        <caption>
          * <FormattedMessage
            id="booking.bikes.priceinfo.table.caption"
            defaultMessage="I priset ingår även cykelhjälm samt service vid behov." />
        </caption>
        <thead>
          <th scope="row" colSpan="3"><h3><FormattedMessage id='booking.bikes.priceinfo.table.title' defaultMessage="Priser 2018"/></h3></th>
          <tr>
            <th scope="col"><FormattedMessage id='booking.bikes.priceinfo.table.hl1' defaultMessage="Cykel/tillbehör"/></th>
            <th scope="col"><FormattedMessage id='booking.bikes.priceinfo.table.hl2' defaultMessage="Pris 1 dag"/></th>
            <th scope="col"><FormattedMessage id='booking.bikes.priceinfo.table.hl3' defaultMessage="Extradag"/></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><FormattedMessage id='booking.bikes.priceinfo.table.rh1' defaultMessage="Vuxencykel"/>*</th>
            <td><FormattedMessage id='booking.bikes.priceinfo.table.price1' defaultMessage="200 kr"/></td>
            <td><FormattedMessage id='booking.bikes.priceinfo.table.price2' defaultMessage="100 kr/dag"/></td>
          </tr>
          <tr>
            <th scope="row"><FormattedMessage id='booking.bikes.priceinfo.table.rh2' defaultMessage="Ungdomscykel"/>*</th>
            <td><FormattedMessage id='booking.bikes.priceinfo.table.price3' defaultMessage="150 kr"/></td>
            <td><FormattedMessage id='booking.bikes.priceinfo.table.price4' defaultMessage="75 kr/dag"/></td>
          </tr>
          <tr>
            <th scope="row"><FormattedMessage id='booking.bikes.priceinfo.table.rh3' defaultMessage="Barncykel"/>*</th>
            <td><FormattedMessage id='booking.bikes.priceinfo.table.price5' defaultMessage="120 kr"/></td>
            <td><FormattedMessage id='booking.bikes.priceinfo.table.price6' defaultMessage="60 kr/dag"/></td>
          </tr>
          <tr>
            <th scope="row"><FormattedMessage id='booking.bikes.priceinfo.table.rh4' defaultMessage="Cykelkärra"/></th>
            <td><FormattedMessage id='booking.bikes.priceinfo.table.price1' defaultMessage="200 kr"/></td>
            <td><FormattedMessage id='booking.bikes.priceinfo.table.price2' defaultMessage="100 kr/dag"/></td>
          </tr>
          <tr>
            <th scope="row"><FormattedMessage id='booking.bikes.priceinfo.table.rh5' defaultMessage="Barnsadel"/></th>
            <td><FormattedMessage id='booking.bikes.priceinfo.table.price7' defaultMessage="50 kr"/></td>
            <td><FormattedMessage id='booking.bikes.priceinfo.table.price8' defaultMessage="50 kr/dag"/></td>
          </tr>
          <tr>
            <th scope="row"><FormattedMessage id='booking.bikes.priceinfo.table.rh6' defaultMessage="Picknicklunch"/></th>
            <td><FormattedMessage id='booking.bikes.priceinfo.table.price9' defaultMessage="85 kr"/></td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const Info = ({image, title, text, alt}) => {
  return (
    <div className="bike-info bike-content borded">
      <div className="info-image">
        <img src={image} alt={alt} />
        <div className="image-content">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
const BikeContent = (props) => {
  const { formatMessage } = props.intl;
  return (
    <div>
      <PriceInfo />
      <Info
        image="./img/bikes/biking.jpg"
        title= {formatMessage(pages.bikes.bikeInfoTitle)}
        text={formatMessage(pages.bikes.bikeInfoBody)}
        alt={formatMessage(pages.bikes.bikeInfoAlt)}/>
      <Info
        image="./img/bikes/lunchboxes.jpg"
        title={formatMessage(pages.bikes.lunchInfoTitle)}
        text={formatMessage(pages.bikes.lunchInfoBody)}
        alt={formatMessage(pages.bikes.lunchInfoAlt)}/>

      <div className="row">
        <div className="container">

        </div>
      </div>
    </div>
  );
}

export default injectIntl(BikeContent);
