import React from "react";
import { useDispatch } from "react-redux";
import { removeAllItems } from "../features/cartSlice";
import { closeModal } from "../features/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <section className="w-full h-full absolute bg-stone-900/[0.8] z-10">
      <article className="py-8 px-5 bg-slate-600 text-slate-200 text-center w-full max-w-sm rounded absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-base font-bold mb-4">
          Are you sure about to clear items?
        </h2>
        <button
          type="button"
          className="text-sm font-semibold py-1 px-4 border bg-gray-800 mr-2 rounded"
          onClick={() => {
            dispatch(removeAllItems());
            dispatch(closeModal());
          }}
        >
          confirm
        </button>
        <button
          type="button"
          className="text-sm font-semibold py-1 px-4 border rounded"
          onClick={() => dispatch(closeModal())}
        >
          cancel
        </button>
      </article>
    </section>
  );
};

export default Modal;
