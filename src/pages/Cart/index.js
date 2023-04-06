import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "redux/cartSlice";
import Loading from "../../assets/images/loading.gif";
const Cart = () => {
  const data = useSelector((state) => state?.cartReducer);
  console.log(data);
  const isLoading = useSelector((state) => state?.productReducer?.isLoading);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__wrapper">
          {isLoading ? (
            <div>
              <img src={Loading} alt="" />
            </div>
          ) : (
            data?.map((item) => (
              <div className="cart__box" key={item?.id}>
                <div className="cart__box__img">
                  <img src={item?.coverImage} alt="" />
                </div>

                <div className="cart__box__title">
                  <h3>{item?.title}</h3>
                  <span>{item?.name}</span>
                </div>
                <div className="cart__box__price">
                  {item.wasPriceRange.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
                <button onClick={() => dispatch(remove(item.id))}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
