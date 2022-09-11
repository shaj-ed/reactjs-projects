import { BiSearchAlt } from "react-icons/bi";
import useGlobalContext from "../Hooks/useGlobalContext";

const Search = () => {
  const {
    state: { searchTerm },
    searchProduct,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span className="block text-lg font-medium capitalize mb-2">
          search product
        </span>
        <input
          type="text"
          className="px-4 py-1 rounded font-medium outline-0 border-0 w-60 placeholder:text-sm"
          placeholder="ex: headphone"
          name="search product"
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => searchProduct(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="px-4 py-1 bg-gray-400 rounded text-gray-900 mt-2 w-60 flex justify-center items-center hover:opacity-80"
      >
        <span className="mr-2 font-medium">search</span> <BiSearchAlt />
      </button>
    </form>
  );
};

export default Search;
