import React from 'react';
import { Link } from 'react-router-dom';
import marked from 'marked';

import coffee from '../img/coffee.jpg';
import Visthuset_biking from '../img/Visthuset_biking.jpg';
import Gota_kanal_Juno_locks from '../img/Gota_kanal_Juno_locks.jpg';


const PagePreviewComponent = ({ redirectURL, image, title, text }) => {
  if (image === 'coffee') {
    var img = coffee;
  } else if (image === 'Visthuset_biking') {
    var img = Visthuset_biking;
  } else {
    var img = Gota_kanal_Juno_locks;
  }
  return (
    <div className="page-preview">
      <Link className="preview-link" to={redirectURL}>
        <div className="container">
          <div className="page-preview-img">
            <img className="img-fluid" src={img} />
          </div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
}
export default PagePreviewComponent;
