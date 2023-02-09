import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "redux/cartSlice";

const Cart = () => {
  const data = useSelector((state) => state?.cartReducer);
  console.log(data);
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="item__container">
        <div className="item__wrapper">
          {data?.map((item) => (
            <div className="item__card" key={item?.id}>
              <div className="item__card__img">
                <img src={item?.coverImage} alt="" />
              </div>

              <div className="item__card__title">
                <h3>{item?.title}</h3>
                <span>{item?.name}</span>
              </div>
              <div className="item__card__price">
                {item.wasPriceRange.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
              <button onClick={() => dispatch(remove(item.id))}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
