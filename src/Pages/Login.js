import React, { Fragment, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);

  let signInError;

  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-600">{error?.message || gError?.message}</p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <Fragment>
      <section>
        <div className="flex h-screen justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl text-center font-bold">Login</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />

                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 character or longer",
                      },
                    })}
                  />

                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {signInError}

                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="Login"
                />
              </form>

              <p>
                <Link
                  to="/singUp"
                  className="text-primary ml-0 md:ml-32 lg:ml-32"
                >
                  Create an account
                </Link>
              </p>

              <div className="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-primary btn-outline"
              >
                CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
