const appReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS_DATA":
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };
    case "FAILED_DATA":
      return {
        ...state,
        loading: false,
        error: true,
        products: action.payload,
      };
    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SEARCH":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "INCREASE":
      return {
        ...state,
        cart: action.payload,
      };
    case "DECREASE":
      return {
        ...state,
        cart: action.payload,
      };
    case "TOTAL":
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
