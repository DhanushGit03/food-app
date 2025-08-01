import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurents, setlistOfRestaurents] = useState(resList);
  useEffect(() => {
    fetchData();
  }, []);

  //Fetch data concept
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4650551&lng=73.8341982&collection=83647&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json = await data.json();
    console.log(json);
    setlistOfRestaurents(json.data.cards[3].card.card.info);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurents = listOfRestaurents.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setlistOfRestaurents(filteredRestaurents);
          }}
        >
          Top Rated Restaurents
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
