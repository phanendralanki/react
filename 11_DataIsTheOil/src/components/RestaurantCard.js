import { CDN_URL } from "../utils/Constants";
import {useContext} from "react";
import UserContext from "../context/UserContext";
const RestaurantCard = (props) => {

  const {loggedInUser} = useContext(UserContext);

  //   const { name, cuisines, starRating, deliveryTime } = props;

  const { resData } = props;
  const { name, cuisines, areaName, avgRating, cloudinaryImageId } =
    resData?.info;
  const imgSrc = `${CDN_URL}/${cloudinaryImageId}`;

  return (
    <div
      className="
    m-4 p-4 w-[250px] bg-gray-100 rounded-lg
    hover:bg-gray-200
    "
    >
      <img className="rounded-lg" src={imgSrc} />

      {/* <h3>{name}</h3>
          <h4>{cuisines}</h4>
          <h4>{starRating}</h4>
          <h4>{deliveryTime}</h4> */}

      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
      <h4>user - {loggedInUser}</h4>
    </div>
  );
};

//******* Higher Order Component ***********
// - which will take RestaurantCard Component as input 
// and returns RestaurantCard Promoted component

//Higher Order Component
// input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
