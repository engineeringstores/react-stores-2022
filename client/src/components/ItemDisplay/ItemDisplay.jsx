import PropTypes from 'prop-types';
import './ItemDisplay.scss';

const ItemDisplay = ({ imageURL, name, price, style }) => {
  return (
    <div style={style} className="item-display-container">
      <div className="item-display-image">
        <img src={imageURL ? imageURL : ''} />
      </div>
      <div className="item-display-info">
        <h1>{name}</h1>
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
