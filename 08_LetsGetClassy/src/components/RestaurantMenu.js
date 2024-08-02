import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
// import { MENU_API } from "../utils/Constants";
import useRestaurantMenu from "../customHooks/useRestaurantMenu";

const RestaurantMenu = () => {
 
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
 
  //fetching Data
  /*
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []); //[] - loads only ones

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  // console.log(itemCards);
  */


  if(resInfo === null) return <Shimmer />

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - RS {item.card.info.price / 100}
          </li>
        ))}
      </ul>
      <h2>{avgRating}</h2>
    </div>
  );
};

export default RestaurantMenu;
