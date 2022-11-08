import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  total: 0,
  amount: 0,
  cartItems: [],
};

export const fetchCartItems = createAsyncThunk("cart/fetchItems", async () => {
  const res = await fetch(
    "https://course-api.com/react-useReducer-cart-project"
  );
  const data = await res.json();
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeAllItems: (state) => {
      state.cartItems = [];
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    increaseItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      item.amount = item.amount + 1;
    },
    decreaseItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      item.amount = item.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount = amount + item.amount;
        total = total + item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.cartItems = action.payload;
    });
    builder.addCase(fetchCartItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.cartItems = [];
    });
  },
});

export const {
  removeAllItems,
  deleteItem,
  increaseItem,
  decreaseItem,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
