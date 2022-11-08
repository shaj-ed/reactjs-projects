import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./Components/CartContainer";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import { calculateTotal, fetchCartItems } from "./features/cartSlice";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { open } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(fetchCartItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {open && <Modal />}
      <Header />
      <CartContainer />
    </>
  );
};

export default App;
