import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const item = {
  title: `fall limited edition sneakers`,
  description: `these low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything the
    weather can offer.`,
  price: 250.0,
  discount: 50,
  discountPrice: 125.0,
  amount: 0,
  totalPrice: 0,
  isAdd: false,
};

const AppProvider = ({ children }) => {
  const [product, setProduct] = useState(item);
  const [openLightbox, setOpenLightbox] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const increase = () => {
    if (product.amount === 0) {
      return;
    }

    const newProduct = { ...product, amount: product.amount - 1 };
    setProduct(newProduct);
  };

  const decrease = () => {
    const newProduct = {
      ...product,
      amount: product.amount + 1,
      isAdd: true,
    };
    setProduct(newProduct);
  };

  const deleteItem = () => {
    const newProduct = {
      ...product,
      amount: 0,
      isAdd: false,
    };

    setProduct(newProduct);
  };

  const addToCart = () => {
    if (!product.amount) return;
    setProduct({ ...product, isAdd: true });
  };

  useEffect(() => {
    let price = product.discountPrice * product.amount;
    setProduct({ ...product, totalPrice: price });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.isAdd, product.amount]);

  return (
    <AppContext.Provider
      value={{
        product,
        deleteItem,
        addToCart,
        increase,
        decrease,
        openLightbox,
        setOpenLightbox,
        slideIndex,
        setSlideIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
