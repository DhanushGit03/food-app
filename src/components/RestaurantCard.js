import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.card.card.info.cloudinaryImageId}
      />
      <h3>{resData.card.card.info.name}</h3>
      <h4>{resData.card.card.info.cuisines.join(", ")}</h4>
      <h4>{resData.card.card.info.avgRating}</h4>
      <h4>{resData.card.card.info.costForTwo}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurentCard;
