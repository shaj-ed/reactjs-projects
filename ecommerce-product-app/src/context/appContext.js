import { createContext, useEffect, useReducer } from "react";
import appReducer from "../helper/appReducer";

const AppContext = createContext();

const initialState = {
  loading: true,
  error: false,
  products: [],
  cart: [],
  sortBy: "all",
  searchTerm: "",
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const organizedData = data.map((item) => {
        return { ...item, quantity: 0 };
      });
      dispatch({ type: "SUCCESS_DATA", payload: organizedData });
    } catch (error) {
      dispatch({ type: "FAILED_DATA", payload: [] });
      console.log(error);
    }
  };

  const sortingProducts = (sortValue) => {
    dispatch({ type: "SORT", payload: sortValue });
  };

  const searchProduct = (term) => {
    dispatch({ type: "SEARCH", payload: term });
  };

  const addProductToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };

  const removeProductFromCart = (id) => {
    const newCart = state.cart.filter((product) => product.id !== id);
    dispatch({ type: "REMOVE_FROM_CART", payload: newCart });
  };

  const increaseQuantity = (id) => {
    const cartProduct = state.cart.find((product) => product.id === id);
    if (!cartProduct) return;
    const increaseProduct = state.cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    dispatch({ type: "INCREASE", payload: increaseProduct });
  };

  const decreaseQuantity = (id) => {
    const cartProduct = state.cart.find((product) => product.id === id);
    if (!cartProduct) return;
    const decreaseProduct = state.cart
      .map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      })
      .filter((product) => product.quantity !== 0);
    dispatch({ type: "DECREASE", payload: decreaseProduct });
  };

  useEffect(() => {
    let total = state.cart.reduce((acc, product) => {
      let itemTotal = product.price * product.quantity;
      acc += itemTotal;
      return acc;
    }, 0);
    total = parseFloat(total.toFixed(2));
    dispatch({ type: "TOTAL", payload: total });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        state,
        sortingProducts,
        searchProduct,
        addProductToCart,
        removeProductFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
