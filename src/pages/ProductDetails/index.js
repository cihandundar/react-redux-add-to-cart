import StarIcon from "assets/icons/StarIcon";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails } from "redux/productSlice";

const ProductDetails = () => {
  const data = useSelector((state) => state?.productReducer?.data);
  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(slug));
  }, [dispatch, slug]);

  return (
    <main>
      <section className="details">
        <div className="details__container">
          <div className="details__wrapper">
            <div className="details__left">
              <div className="details__left__image">
                <img src={data?.coverImage} alt="" />
              </div>
            </div>
            <div className="center"></div>
            <div className="details__right">
              <div className="details__right__title">
                <h2>{data?.name}</h2>
                <h4>{data?.title}</h4>
              </div>
              <div className="details__right__col">${data?.isPriceRange}</div>
              <div className="details__right__col star">
                <p>Rating: {data?.rating}</p>
                <span>
                  <StarIcon />
                </span>
              </div>
              <div className="details__right__col">
                <p>{data?.description}</p>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="details__info">
          <div className="details__info__container">
            <div className="details__info__container__title">
              <h2>Product Specifications</h2>
            </div>
            <div className="details__info__wrapper">
              {data?.properties?.productDetails?.specifications.map((info) => (
                <div className="details__info__box" key={info.id}>
                  <div className="details__info__box__title">
                    <h4>{info?.name}</h4>
                  </div>
                  <div className="details__info__box__img">
                    <img src={info?.icon} alt="" />
                  </div>
                  <span>{info?.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
