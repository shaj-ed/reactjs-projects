import { useContext } from "react";
import { AppContext } from "../context/appContext";

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
