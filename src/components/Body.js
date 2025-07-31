import RestaurentCard from "./RestaurentCard";
// import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //State Variable - superpowerful variable
  // We use Hooks to use the superpowerful Variables (Normal JS Variables given by react to us)
  const [listOfRestaurents] = useState([
    {
      card: {
        card: {
          info: {
            id: "112062",
            name: "Aroma's Hyderabad House",
            cloudinaryImageId: "ymjvq1ewa4tnzbpmqnip",
            costForTwo: "₹500 for two",
            cuisines: ["Biryani", "Hyderabadi", "Mughlai", "Chinese"],
            avgRating: 4.4,
            parentId: "71",
            sla: {
              deliveryTime: 32,
              lastMileTravel: 5.9,
              serviceability: "SERVICEABLE",
              slaString: "30-35 mins",
              lastMileTravelString: "5.9 km",
              iconType: "ICON_TYPE_EMPTY",
            },
          },
        },
      },
    },
    {
      card: {
        card: {
          info: {
            id: "1120688",
            name: "KFC",
            cloudinaryImageId: "ymjvq1ewa4tnzbpmqnip",
            costForTwo: "₹500 for two",
            cuisines: ["Biryani", "Hyderabadi", "Mughlai", "Chinese"],
            avgRating: 3.5,
            parentId: "71",
            sla: {
              deliveryTime: 32,
              lastMileTravel: 5.9,
              serviceability: "SERVICEABLE",
              slaString: "30-35 mins",
              lastMileTravelString: "5.9 km",
              iconType: "ICON_TYPE_EMPTY",
            },
          },
        },
      },
    },
    {
      card: {
        card: {
          info: {
            id: "112552",
            name: "Navya Ruchulu",
            cloudinaryImageId: "ymjvq1ewa4tnzbpmqnip",
            costForTwo: "₹500 for two",
            cuisines: ["Biryani", "Hyderabadi", "Mughlai", "Chinese"],
            avgRating: 4.1,
            parentId: "71",
            sla: {
              deliveryTime: 32,
              lastMileTravel: 5.9,
              serviceability: "SERVICEABLE",
              slaString: "30-35 mins",
              lastMileTravelString: "5.9 km",
              iconType: "ICON_TYPE_EMPTY",
            },
          },
        },
      },
    },
    {
      card: {
        card: {
          info: {
            id: "1120992",
            name: "Amma Vantalu",
            cloudinaryImageId: "ymjvq1ewa4tnzbpmqnip",
            costForTwo: "₹500 for two",
            cuisines: ["Biryani", "Hyderabadi", "Mughlai", "Chinese"],
            avgRating: 4.2,
            parentId: "71",
            sla: {
              deliveryTime: 32,
              lastMileTravel: 5.9,
              serviceability: "SERVICEABLE",
              slaString: "30-35 mins",
              lastMileTravelString: "5.9 km",
              iconType: "ICON_TYPE_EMPTY",
            },
          },
        },
      },
    },
  ]);

  // This is Normal JS Variabale
  // let listOfRestaurents = [
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "112062",
  //           name: "Aroma's Hyderabad House",
  //           cloudinaryImageId: "ymjvq1ewa4tnzbpmqnip",
  //           costForTwo: "₹500 for two",
  //           cuisines: ["Biryani", "Hyderabadi", "Mughlai", "Chinese"],
  //           avgRating: 4.4,
  //           parentId: "71",
  //           sla: {
  //             deliveryTime: 32,
  //             lastMileTravel: 5.9,
  //             serviceability: "SERVICEABLE",
  //             slaString: "30-35 mins",
  //             lastMileTravelString: "5.9 km",
  //             iconType: "ICON_TYPE_EMPTY",
  //           },
  //         },
  //       },
  //     },
  //   },
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "1120688",
  //           name: "KFC",
  //           cloudinaryImageId: "ymjvq1ewa4tnzbpmqnip",
  //           costForTwo: "₹500 for two",
  //           cuisines: ["Biryani", "Hyderabadi", "Mughlai", "Chinese"],
  //           avgRating: 3.5,
  //           parentId: "71",
  //           sla: {
  //             deliveryTime: 32,
  //             lastMileTravel: 5.9,
  //             serviceability: "SERVICEABLE",
  //             slaString: "30-35 mins",
  //             lastMileTravelString: "5.9 km",
  //             iconType: "ICON_TYPE_EMPTY",
  //           },
  //         },
  //       },
  //     },
  //   },
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "112552",
  //           name: "Navya Ruchulu",
  //           cloudinaryImageId: "ymjvq1ewa4tnzbpmqnip",
  //           costForTwo: "₹500 for two",
  //           cuisines: ["Biryani", "Hyderabadi", "Mughlai", "Chinese"],
  //           avgRating: 4.1,
  //           parentId: "71",
  //           sla: {
  //             deliveryTime: 32,
  //             lastMileTravel: 5.9,
  //             serviceability: "SERVICEABLE",
  //             slaString: "30-35 mins",
  //             lastMileTravelString: "5.9 km",
  //             iconType: "ICON_TYPE_EMPTY",
  //           },
  //         },
  //       },
  //     },
  //   },
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "1120992",
  //           name: "Amma Vantalu",
  //           cloudinaryImageId: "ymjvq1ewa4tnzbpmqnip",
  //           costForTwo: "₹500 for two",
  //           cuisines: ["Biryani", "Hyderabadi", "Mughlai", "Chinese"],
  //           avgRating: 4.2,
  //           parentId: "71",
  //           sla: {
  //             deliveryTime: 32,
  //             lastMileTravel: 5.9,
  //             serviceability: "SERVICEABLE",
  //             slaString: "30-35 mins",
  //             lastMileTravelString: "5.9 km",
  //             iconType: "ICON_TYPE_EMPTY",
  //           },
  //         },
  //       },
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurents = listOfRestaurents.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            console.log(listOfRestaurents);
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
