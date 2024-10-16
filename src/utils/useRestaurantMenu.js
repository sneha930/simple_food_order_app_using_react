import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
   const [resInfo, setResInfo] = useState(null);
 
   //fetch data
   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async() => {
      const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
      const json = await data.json();
      console.log(json?.data?.cards[0]?.card?.card?.text);
      console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);

      setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);
      
   };

   return resInfo;
}

export default useRestaurantMenu; 