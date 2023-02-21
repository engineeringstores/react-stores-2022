import React from 'react';
import PropTypes from 'prop-types';
import './ItemDisplay.scss';

const ItemDisplay = ({ imageURL, name, price, style }) => {
  return (
    <div style={style} className="item-display-container">
      <div className="item-display">
        <img className="item-display-image" src={imageURL ? imageURL : ''} />
      </div>
      <div className="item-display-info">
        <h3>{name}</h3>
        <p>{price ? '$' + price : ''}</p>
      </div>
    </div>
  );
};

ItemDisplay.propTypes = {
  name: PropTypes.string,
  imageURL: PropTypes.string,
  price: PropTypes.number,
  style: PropTypes.object,
};

export { ItemDisplay };
