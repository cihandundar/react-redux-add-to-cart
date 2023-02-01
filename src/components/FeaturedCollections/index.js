import React from "react";

const FeaturedCollection = () => {
  const list = [
    {
      id: 4,
      title: "MacBook Air",
      price: 999,
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_TR?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664497359572",
    },
    {
      id: 5,
      title: "AirPods",
      price: 999,
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000",
    },
    {
      id: 6,
      title: "MacBook Air",
      price: 999,
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673229",
    },
    {
      id: 7,
      title: "Apple Watch Ultra",
      price: 999,
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-ultra-digitalmat-gallery-3-202209_GEO_TR_FMT_WHH?wid=576&hei=400&fmt=png-alpha&.v=1661557385092",
    },
  ];

  return (
    <div className="collection">
      <h2>Featured Collection</h2>
      <div className="collection__container">
        <ul className="collection__list">
          {list?.map((item) => (
            <li key={item?.id}>
              <div className="collection__list__img">
                <img src={item?.img} alt="" />
              </div>
              <div className="collection__list__title">{item?.title}</div>
              <span>${item?.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedCollection;
