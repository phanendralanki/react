import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  // special state variable - super powerful variable, not a local variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //search
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);


  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body rendered");

  //How to make api call and fetch the Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 1.fetching the data from API
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.544893&lng=81.521241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    //2. converting data into json format
    const json = await data.json();

    // console.log(json?.data);
    //3.Changing the ui with data
    // ? - optional chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  //Conditional Rendering
  // if(listOfRestaurants.length === 0){
  // return <h1>Loading .......</h1>
  // return <Shimmer />
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* search field */}
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="search-box"
          />
          <button
            onClick={() => {
              //filter the restaurant cards and update the UI
              //1.get the data from search box
              // console.log(searchText);

              const searchList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchList);
            }}
          >
            Search
          </button>
        </div>

{/* Top rated restaurants filter */}
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>



      </div>
      <div className="res-container">
        {/* restaurant card */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
