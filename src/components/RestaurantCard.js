import { URL } from '../../util/utility';

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resData.info;
  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating + ' ⭐️'}</h4>
      <h4>{deliveryTime + ' minutes'}</h4>
    </div>
  );
};

export default RestaurantCard;
