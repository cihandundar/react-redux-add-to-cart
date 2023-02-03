import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/productSlice";
const ProductItem = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const data = useSelector((state) => state?.product?.data);
  // const { isLoading, error } = useSelector((state) => state?.product);

  // if (isLoading) return <h1>Yükleniyor</h1>;
  // if (error) return <h1>{error}</h1>;
  return (
    <div className="item">
      <div className="item__container">
        {data?.products?.map((item) => (
          <div className="item__card" key={item?.id}>
            <div className="item__card__img">
              <img src={item?.coverImage} alt="" />
            </div>
            <div className="item__card__title">
              <h3>{item?.title}</h3>
              <span>{item?.name}</span>
            </div>
            <div className="item__card__price">
              <p>$ {item?.isPriceRange}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
