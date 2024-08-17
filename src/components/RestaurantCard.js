import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // Destructure with defaults to avoid undefined errors
  const {
    name = "",
    cloudinaryImageId = "",
    costForTwo = "",
    cuisines = [],
    avgRating = "",
  } = resData?.info || {};
  const { slaString = "" } = resData?.info?.sla || {};

  // console.log(resData?.info);

  return (
    <div className="card bg-gray-100 hover:bg-gray-300 shadow-md rounded-lg overflow-hidden ">
      <img
        className="w-full h-48 object-cover rounded-xl p-2"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <h4 className="mt-2 text-gray-600">{cuisines.join(",")}</h4>
      <h4 className="mt-2 text-gray-600">{avgRating}</h4>
      <h4 className="mt-2 text-gray-600">{costForTwo}</h4>
      <h4 className="mt-2 text-gray-600">{slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
