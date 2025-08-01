import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurents, setlistOfRestaurents] = useState(resList);
  useEffect(() => {
    console.log("UseEffect called");
  }, []);

  //First Body is rendered and then the UseEffect will get rendered.
  console.log("Body rendered");

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
