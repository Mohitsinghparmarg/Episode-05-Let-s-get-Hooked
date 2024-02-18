import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resList from "../utills/mockData";

const Body = () => {
      
      // Local state variable -> Super PowerFul Variable
        let [ListOfRestaurants,setListOfRestaurant] = useState(resList);

        return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
            onClick={ () =>
              {
                 const filteredList = ListOfRestaurants.filter(
                    (res) => res.data.avgRating>4
                );
                 setListOfRestaurant(filteredList);
              }
            }
          >Top Rated Restaurants
         </button>
        </div>
        <div className="res-container">
          {ListOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;