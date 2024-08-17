import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="font-bold text-lg shadow-lg bg-gray-50 w-6/12 mx-auto my-4 p-4 ">
        <div
          className="flex justify-between cursor-pointer border-gray-200 border-b-2"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
