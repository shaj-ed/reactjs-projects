import cartItemThumb from "./../../assets/images/image-product-1-thumbnail.jpg";
import deleteIcon from "./../../assets/images/icon-delete.svg";
import { useContext } from "react";
import { AppContext } from "../../Context/appContext";

const Cart = ({ show }) => {
  const { product, deleteItem } = useContext(AppContext);

  return (
    <div className={show ? "cart show" : "cart"}>
      <h2 className="cart__title">Cart</h2>
      <hr />
      <div className="cart__content">
        {product.isAdd ? (
          <article className="item">
            <img src={cartItemThumb} className="item__thumb" alt="item" />
            <h2 className="item__name">{product.title}</h2>
            <p className="item__price">
              ${product.discountPrice}.00 * {product.amount}{" "}
              <strong>${product.totalPrice}.00</strong>
            </p>
            <button
              type="button"
              className="item__button item__button--delete"
              onClick={() => deleteItem()}
            >
              <img src={deleteIcon} alt="delete" />
            </button>
            <button
              type="button"
              className="item__button item__button--checkout"
            >
              Checkout
            </button>
          </article>
        ) : (
          <span className="cart__empty">Your cart is empty.</span>
        )}
      </div>
    </div>
  );
};

export default Cart;
