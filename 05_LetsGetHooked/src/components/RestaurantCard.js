import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
    //   const { name, cuisines, starRating, deliveryTime } = props;

    const {resData} = props;
    
      const { name,cuisines,area,costForTwoString,avgRating ,deliveryTime,cloudinaryImageId} = resData?.data;
    
      return (
        <div className="res-card">
          <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
    
          {/* <h3>{name}</h3>
          <h4>{cuisines}</h4>
          <h4>{starRating}</h4>
          <h4>{deliveryTime}</h4> */}
    
          <h2>{name}</h2>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{area}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwoString}</h4>
          <h4>{deliveryTime} minutes</h4>
        </div>
      );
    };

export default RestaurantCard;