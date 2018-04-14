import React from 'react';

const FaceBookComponent = ({ tabs='timeline', hide_cover=false, show_facepile=false, small_header=false }) => {
  /*
  tabs: a commaseparated list, choices are timeline, events, messages
  hide_cover: boolean, wether to hide the cover photo or not
  show_facepile: boolean, wether to show faces at the top
  small_header, boolean, large or small header
  */
  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/cafevisthuset/"
      data-tabs={tabs}
      data-small-header={small_header}
      data-adapt-container-width="true"
      data-hide-cover={hide_cover}
      data-show-facepile={show_facepile}>
      <blockquote
        cite="https://www.facebook.com/cafevisthuset/"
        className="fb-xfbml-parse-ignore">
        <a href="https://www.facebook.com/cafevisthuset/">
        Café Visthuset
        </a>
      </blockquote>
    </div>
  );
}

export default FaceBookComponent;
