import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
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
    </div>
  );
};

export default RestaurantCard;
