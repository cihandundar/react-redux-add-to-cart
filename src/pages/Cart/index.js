import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, remove } from "redux/cartSlice";
import Empty from "../../assets/images/empty.jpg";
import Loading from "../../assets/images/loading.gif";
const Cart = () => {
  const data = useSelector((state) => state?.cartReducer);
  const isLoading = useSelector((state) => state?.productReducer?.isLoading);

  const dispatch = useDispatch();

  function handleRemove(item) {
    dispatch(remove(item));
  }

  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };

  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      {isLoading ? (
        <div className="loading">
          <img className="spinner" src={Loading} alt="" />
        </div>
      ) : (
        <div className="cart__container">
          {data.cartItems.length === 0 ? (
            <div className="cart__empty">
              <h3>Your cart is currently empty</h3>
              <div className="cart__shopping">
                <Link to="/product">
                  <span>Start Shopping</span>
                </Link>
              </div>
              <div className="cart__empty__img">
                <img src={Empty} alt="" />
              </div>
            </div>
          ) : (
            <div className="cart__wrapper">
              <h2>Shopping Cart</h2>
              <div className="cart__wrapper__title">
                <h3>Product</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3>Total</h3>
              </div>
              {data?.cartItems?.map((item) => (
                <div className="cart__box" key={item?.id}>
                  <div className="cart__box__img">
                    <img src={item?.coverImage} alt="" />
                    <div className="cart__box__title">
                      <h3>{item?.title}</h3>
                      <span>{item?.name}</span>
                      <button onClick={() => dispatch(handleRemove(item))}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart__box__price">
                    {item.wasPriceRange?.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                  <div className="cart__box__quantity">
                    <button onClick={() => handleDecreaseCart(item)}>-</button>
                    <div className="count">{item.cartQuantity}</div>
                    <button onClick={() => handleIncreaseCart(item)}>+</button>
                  </div>
                  <div className="cart__box__total">
                    {(item?.isPriceRange * item?.cartQuantity).toLocaleString(
                      "en-US",
                      {
                        style: "currency",
                        currency: "USD",
                      }
                    )}
                  </div>
                </div>
              ))}
              <div className="cart__box__summary">
                <div className="cart__box__checkout">
                  <div className="cart__box__clear">
                    <button className="clear" onClick={() => handleClearCart()}>
                      Clear Cart
                    </button>
                  </div>
                  <div className="subtotal">
                    <div>
                      <span>Subtotal</span>
                      <span>${data?.cartTotalAmount}</span>
                    </div>
                    <Link to="/login">
                      <button className="check">Check out</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
