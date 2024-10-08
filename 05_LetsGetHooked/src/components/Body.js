import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import {useState} from "react";
const Body = () => {
 
  //useState - used to give super powerful state variables
  // state variable - super powerful variable
  const [listOfRestaurants,setListOfRestaurants] = useState(restaurantList);


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res)=> res.data.avgRating>4.2
              );
              setListOfRestaurants(filteredList);
          }

          }
          
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">


         {/* restaurant card */}
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}


      </div>
    </div>
  );
};

export default Body;
