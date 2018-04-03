import React from 'react';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import{ messages } from '../../messages';

const PackageComponent = ({name, url, image, description, short_description, price, cta, css}) => {
  return (
    <div className="package-preview clearfix borded">
      <img
        className={css}
        src={image}
        alt=""/>
      <div className="package-preview-content col-xs-12 col-md-4">
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

const PackagePreviewComponent = (props) => {
  const url = `/packages/${props.slug}`;
  const { formatMessage } = props.intl;

  if (props.id % 2 == 0) {
    var image_css = "package-preview__image float-md-left col-xs-12 col-md-8";
  }
  else {
    var image_css = "package-preview__image float-md-right col-xs-12 col-md-8";
  }
  return <PackageComponent
      name={props.name}
      url={url}
      image={props.image}
      description={props.description}
      short_description={props.short_description}
      price={props.price}
      cta={formatMessage(messages.read_more_and_book)}
      css={image_css}
    />
}

export default injectIntl(PackagePreviewComponent);
