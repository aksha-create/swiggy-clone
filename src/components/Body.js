import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurants, setlistofRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const baseUrl = process.env.REACT_APP_SWIGGY_BASE_URL;
      const queryParams =
        "?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&api_key=${process.env.REACT_APP_SWIGGY_API_KEY}";
      const fullUrl = `${baseUrl}${queryParams}`;
      const data = await fetch("https://handler-cors.vercel.app/fetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: fullUrl,
        }),
      });

      if (!data.ok) {
        throw new Error(`Error: ${data.status} ${data.statusText}`);
      }

      const json = await data.json();
      // Assuming the proxy returns the API response directly
      setlistofRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlinestatus = useOnlineStatus();
  const { loggedInUser, setuserName } = useContext(UserContext);

  if (onlinestatus === false)
    return <h1>Looks like offline please check your internet connection</h1>;

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <div className="m-4 p-4">
          <input
            className="border-solid border-2 border-indigo-600 ... rounded-2xl shadow-md py-2 px-2 resize-y"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="... ring-2 ring-blue-500 rounded-xl text-sm shadow-emerald-100 text-white cursor-pointer px-4 py-1 m-2 bg-sky-500"
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
          <button
            className="... ring-2 ring-blue-500 rounded-xl text-sm shadow-lg text-white cursor-pointer px-4 py-1 m-2 ml-9 bg-green-800"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setlistofRestaurant(filteredList);
              console.log(filteredList);
            }}
          >
            Top rated restaurants
          </button>
          <label className="mx-2">UserName:</label>
          <input
            className="p-2 border border-black"
            value={loggedInUser}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-4">
          {filteredRestaurant.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted
                  resData={restaurant}
                ></RestaurantCardPromoted>
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
