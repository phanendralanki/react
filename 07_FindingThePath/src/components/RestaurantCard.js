import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
  //   const { name, cuisines, starRating, deliveryTime } = props;

  const { resData } = props;
  const { name, cuisines, areaName, avgRating, cloudinaryImageId } = resData?.info;
  const imgSrc = `${CDN_URL}/${cloudinaryImageId}`;
  return (
    <div className="res-card">
      <img className="res-logo" src={imgSrc} />

      {/* <h3>{name}</h3>
          <h4>{cuisines}</h4>
          <h4>{starRating}</h4>
          <h4>{deliveryTime}</h4> */}

      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
