import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4650551&lng=73.8341982&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  const resInfoData = resInfo?.data?.cards[3]?.card?.card?.info;

  if (!resInfoData) {
    return (
      <div>
        <h1 className="load">Loading...</h1>
      </div>
    );
  }

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    resInfoData;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default RestaurantMenu;
