import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import UserContext from "../context/UserContext";

const Body = () => {
  // special state variable - super powerful variable, not a local variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //search
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body rendered", listOfRestaurants);

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
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //******** online Status */
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks Like you are offline!!</h1>;

  const { setUserName, loggedInUser } = useContext(UserContext);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        {/* search field */}
        <div className="search m-4 p-4">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="search-box border-black border-solid"
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
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          >
            Search
          </button>
        </div>

        {/* Top rated restaurants filter */}
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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

        {/* changing/updating the context from here */}
        <div className="m-4 p-4 flex items-center">
          <label>Username: </label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
            className="border border-black"
          />
        </div>
      </div>

      {/* if restaurants data is not fetched then display shimmer 
      UI after the fetched data display restaurants cards */}

      {listOfRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {/* restaurant card */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                {
                  /* if the restarant is promoted then add a promoted label to it */
                  restaurant.data?.promoted ? (
                    <RestaurantCardPromoted resData={restaurant} />
                  ) : (
                    <RestaurantCard resData={restaurant} />
                  )
                }

                {/* <RestaurantCard
              resData={restaurant}
            /> */}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
