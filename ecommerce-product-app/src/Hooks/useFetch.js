import { useEffect, useReducer } from "react";
import fetchReducer from "../helper/fetchReducer";

const initialState = {
  loading: true,
  error: false,
  categoryProducts: [],
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    getCategoryProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategoryProducts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const organizedData = data.map((item) => {
        return { ...item, quantity: 0 };
      });
      dispatch({ type: "SUCCESS", payload: organizedData });
    } catch (error) {
      dispatch({ type: "FAILED" });
    }
  };

  return state;
};

export default useFetch;
