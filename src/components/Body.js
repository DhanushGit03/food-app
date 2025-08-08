import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurents, setlistOfRestaurents] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurents, setfilteredRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4650551&lng=73.8341982&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const cards = json?.data?.cards || [];

    const restaurantCards = cards.filter((card) => card?.card?.card?.info);

    setlistOfRestaurents(restaurantCards);
    setfilteredRestaurents(restaurantCards);
  };

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredRestaurents = listOfRestaurents.filter((res) =>
              res?.card?.card?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setfilteredRestaurents(filteredRestaurents);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurents = listOfRestaurents.filter(
              (res) => res?.card?.card?.info?.avgRating > 4
            );
            setlistOfRestaurents(filteredRestaurents);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurents.map((restaurent) => (
          <RestaurentCard
            key={restaurent.card?.card?.info?.id}
            resData={restaurent}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
