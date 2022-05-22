import {
  faChartLine,
  faScrewdriverWrench,
  faStarHalfAlt,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const BusinessSummary = () => {
  return (
    <Fragment>
      <section
        className="p-7"
      >
        <div className="text-center text-primary uppercase">
          <h1 className="text-4xl font-bold">Millions Business Trust Us</h1>
          <h3 className="text-xl">Try to Understand User Expectation</h3>
          
        </div>

        <div className="grid gap-5 text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div class="card ">
            <div class="card-body text-secondary">
              <h1 className="text-5xl font-bold">
                {" "}
                <FontAwesomeIcon icon={faUsersGear} />{" "}
              </h1>
              <h2 class="text-5xl font-bold">100+</h2>
              <p className="text-xl" > Served customers</p>
            </div>
          </div>

          <div class="card ">
            <div class="card-body text-secondary">
              <h1 className="text-5xl font-bold">
                {" "}
                <FontAwesomeIcon icon={faChartLine} />{" "}
              </h1>
              <h2 class="text-5xl font-bold">120M+</h2>
              <p className="text-xl"  >Annual revenue</p>
            </div>
          </div>

          <div class="card  ">
            <div class="card-body text-secondary">
              <h1 className="text-5xl font-bold">
                {" "}
                <FontAwesomeIcon icon={faStarHalfAlt} />{" "}
              </h1>
              <h2 class="text-5xl font-bold">33K</h2>
              <p className="text-xl" >Reviews</p>
            </div>
          </div>

          <div class="card ">
            <div class="card-body text-secondary">
              <h1 className="text-5xl font-bold">
                {" "}
                <FontAwesomeIcon icon={faScrewdriverWrench} />{" "}
              </h1>
              <h2 class="text-5xl font-bold">50+</h2>
              <p className="text-xl" >Tools</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BusinessSummary;
