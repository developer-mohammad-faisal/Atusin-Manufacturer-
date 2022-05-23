import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import notF from "../assets/images/notFound.jpg";

const NotFound = () => {
  return (
    <Fragment>
     <section className="bg-base-100">
     <div className="flex justify-center items-center">
        <img src={notF} alt="" />
      </div>
      <Link to="/">
        <button className="btn uppercase mb-20 ml-20  btn-primary">
          Back to The home
        </button>
      </Link>
     </section>
    </Fragment>
  );
};

export default NotFound;
