import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../customHooks/useRestaurantMenu";
import RestaurantCategoryAccordian from "./RestaurantCategoryAccordian";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const dummyData = "Dummy Data";

  const [showIndex,setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  // ******** Categories
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      {/*******  categories Accordian  ********/}

      {categories.map((category,index) => (
        //*** Controlled Component */
        <RestaurantCategoryAccordian
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems = {index === showIndex ? true:false}
          setShowIndex = {() => setShowIndex(index)}
          dummyData = {dummyData}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
