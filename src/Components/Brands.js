import React, { Fragment, useEffect, useState } from "react";
import "../CssStyle/Style.css";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brandCar.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <Fragment>
      <section className="p-7">
        <h1 className="text-center text-primary text-3xl font-bold">
          View a selection of our most popular makes
        </h1>
        <div className="grid  gap-3 pt-8 px-3 lg:px-16 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand , index) => (
            <div key={index} className="card shadow cursor-pointer">
              <div className="card-body bg-base-100">
                <img className="bounce " src={brand.brand} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Brands;
