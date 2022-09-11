import { useEffect, useState } from "react";

const useAddRemove = (cart, id) => {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const productInCart = cart.find((product) => product.id === id);
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cart, id]);

  return inCart;
};

export default useAddRemove;
