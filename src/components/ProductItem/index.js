import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../redux/productSlice";
import { add } from "redux/cartSlice";
const ProductItem = () => {
  const data = useSelector((state) => state?.productReducer?.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  console.log(data);
  return (
    <div className="item">
      <div className="item__container">
        <div className="item__wrapper">
          {data?.products?.map((item) => (
            <div className="item__card" key={item?.id}>
              <Link to={`/products/${item?.slug}`}>
                <div className="item__card__img">
                  <img src={item?.coverImage} alt="" />
                </div>
              </Link>
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
              <button onClick={() => handleAdd(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
