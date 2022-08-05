import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputValue}`);
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full px-5 py-2 max-w-xs  mx-auto bg-slate-500 rounded flex items-center mt-5"
    >
      <input
        type="text"
        value={inputValue}
        placeholder="Search here.."
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-inherit text-slate-100 text-sm focus:border-0 outline-0 placeholder:text-slate-200 flex-1"
      />
      <button type="submit">
        <BiSearchAlt className="text-slate-100" />
      </button>
    </form>
  );
};

export default Form;
