import React from 'react';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import{ messages } from '../../messages';

const PackageRightComponent = ({name, url, image, description, short_description, price, cta}) => {
  return (
    <div className="package-preview clearfix borded">
      <img
        className="package-preview__image col-xs-12 col-md-8"
        src={image}
        alt=""/>
      <div className="d-flex-column align-self-end package-preview-content col-xs-12 col-md-4">
        <h2>{name}</h2>
        <p>{short_description}</p>
        <p>{description}</p>
        <p className="package-preview__price">{price} SEK</p>
        <Link to={url}
          className="visthuset-primary btn col align-self-end">
          {cta}
        </Link>
      </div>
    </div>
  );
}

const PackageLeftComponent = (props) => {
  return (
    <div className="package-preview clearfix borded">
      <div className="package-preview-content col-xs-12 col-md-4">
        <h2>{props.name}</h2>
        <p>{props.short_description}</p>
        <p>{props.description}</p>
        <p className="package-preview__price">{props.price} SEK</p>
        <Link to={props.url}
          className="visthuset-primary btn">
          {props.cta}
        </Link>
      </div>
      <img
        className="package-preview__image col-xs-12 col-sm-8"
        src={props.image}
        alt=""/>
    </div>
  );
}
const PackagePreviewComponent = (props) => {
  const url = `/packages/${props.slug}`;
  const { formatMessage } = props.intl;

  if (props.id % 2 == 0) {
    return <PackageRightComponent
      name={props.name}
      url={url}
      image={props.image}
      description={props.description}
      short_description={props.short_description}
      price={props.price}
      cta={formatMessage(messages.read_more_and_book)}
    />
  }
  else {
    return <PackageLeftComponent
      name={props.name}
      url={url}
      image={props.image}
      description={props.description}
      short_description={props.short_description}
      price={props.price}
      cta={formatMessage(messages.read_more_and_book)}
    />
  }
}

export default injectIntl(PackagePreviewComponent);
