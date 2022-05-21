import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Fragment>
      <section>
        <div class="hero min-h-screen bg-base-100">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <h1 class="text-3xl text-center font-bold">Sign Up</h1>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Confirm Password</span>
                </label>
                <input
                  type="Confirm Password"
                  placeholder=" Confirm Password"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Sign Up</button>
              </div>
              <Link to="/login" className="text-end">
                Already have an Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SignUp;
