import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurents, setlistOfRestaurents] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4653823&lng=73.834045&collection=83648&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const cards = json?.data?.cards || [];

    const restaurantCards = cards.filter((card) => card?.card?.card?.info);

    setlistOfRestaurents(restaurantCards);
  };

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurents.map((restaurent) => (
          <RestaurentCard
            key={restaurent.card.card.info.id}
            resData={restaurent}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
