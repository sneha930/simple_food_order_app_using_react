import resList from "../utils/mockData";
import mockData from "../utils/mockData";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
   // const {resData} = props;
   // {console.log(props.resdata.data)};
   // {console.log(props.resdata)}

   //destructuring on fly
   const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime} = props?.resdata;

   return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{cloudinaryImageId}</h3>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>

      </div>
   )
}

export default RestaurantCard;