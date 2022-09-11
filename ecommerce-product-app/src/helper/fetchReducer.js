const fetchReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        error: false,
        categoryProducts: action.payload,
      };
    case "FAILED":
      return {
        loading: false,
        error: true,
        categoryProducts: [],
      };
    default:
      return state;
  }
};

export default fetchReducer;
