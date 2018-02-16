import React from 'react';
import { Link } from 'react-router-dom';
import marked from 'marked';

const PagePreviewComponent = ({ redirectURL, image, title, text }) => {
  return (
    <div className="page-preview">
      <Link className="preview-link" to={redirectURL}>
        <div className="container">
          <div className="page-preview-img">
            <img className="img-fluid" src={image} />
          </div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
}
export default PagePreviewComponent;
