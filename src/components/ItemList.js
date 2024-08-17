import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 text-left border-gray-200 border-b-2 flex justify-between rounded-lg"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs font-normal">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="text-green-800 bg-white rounded-lg p-1 mx-10 font-bold"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
            <img
              className="w-full rounded-lg"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
