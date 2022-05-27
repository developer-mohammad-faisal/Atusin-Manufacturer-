import React, { Fragment, useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";
import useToken from ".././Hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification, sending, vError] =
    useSendEmailVerification(auth);

  const [token] = useToken(user);

  const navigate = useNavigate();

  let signUpError;

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    signUpError = <p className="text-red-600">{error?.message}</p>;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    await sendEmailVerification();
  };

  return (
    <Fragment>
      <section>
        <div className="flex h-screen mx-5 justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl text-center font-bold">Sign Up</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Username is Required",
                      },
                    })}
                  />

                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

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
                        {errors?.email?.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors?.email?.message}
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
                        {errors?.password?.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors?.password?.message}
                      </span>
                    )}
                  </label>
                </div>

                {signUpError}

                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="SIGN UP"
                />
              </form>

              <p>
                <small>
                  <Link
                    to="/login"
                    className="text-primary ml-0 md:ml-40 lg:ml-40"
                  >
                    Already have an account{" "}
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SignUp;
