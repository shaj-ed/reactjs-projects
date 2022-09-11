import useGlobalContext from "../Hooks/useGlobalContext";

const Filter = () => {
  const {
    state: { sortBy },
    sortingProducts,
  } = useGlobalContext();

  return (
    <label className="block mt-5 md:mt-0">
      <span className="block text-lg font-medium mb-2">Filter</span>
      <select
        name="filter"
        className="p-2 rounded cursor-pointer outline-none text-md font-medium"
        defaultValue={sortBy}
        onChange={(e) => sortingProducts(e.target.value)}
      >
        <option value="all" className="text-md font-medium">
          All
        </option>
        <option value="ascending" className="text-md font-medium">
          Ascending
        </option>
        <option value="descending" className="text-md font-medium">
          Descending
        </option>
        <option value="priceLowHigh" className="text-md font-medium">
          Price (Low - High)
        </option>
        <option value="priceHighLow" className="text-md font-medium">
          Price (High - Low)
        </option>
      </select>
    </label>
  );
};

export default Filter;
