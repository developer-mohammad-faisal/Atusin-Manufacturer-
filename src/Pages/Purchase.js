import React, { Fragment, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import Loading from '../Loading/Loading'
import { useAuthState } from "react-firebase-hooks/auth";

const Purchase = () => {
  const { id } = useParams();
  const [purchase, setPurchase] = useState([]);
  const [user , loading] = useAuthState(auth);
  const {
    img,
    name,
    description,
    orderQuantity,
    availableQuantity,
    perPartsPrice,
  } = purchase;

  useEffect(() => {
    const url = `http://localhost:5000/parts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [id]);


  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

    
  if(loading) {
    return <Loading/>
  }

  //   console.log(quantity);
  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <Fragment>
      <section>
        <div className="" >
               <h1 className="text-center text-4xl font-koulen font-semibold uppercase "> Purchase <span className="text-primary">Parts</span></h1>
            <div className=" flex flex-col px-16 py-14 lg:flex-row justify-between ">

              <div className=" w-3/3 shadow-md rounded-lg lg:w-3/5 bg-base-100">
                <div className="flex flex-col lg:flex-row items-center py-10 px-5">

                   <img src={img} className="w-60 h-48 lg:h-80 lg:w-80 rounded-md" alt="" />
                
                  <div className=" card-body">
                    <h1 className="font-semibold text-3xl ">{name}</h1>
                    <h1 className="font-semibold">Availabe Quantiny :  <span className="font-bold text-xl"> {availableQuantity} </span> </h1>
                    <h1 className="font-semibold">Min-Order Quantity : <span className="font-bold text-xl"> {orderQuantity}</span></h1>
                    <h1 className="font-semibold">Per Parts Price:     <span className="font-bold text-xl"> ${perPartsPrice}</span></h1>
                    <p><span className="font-semibold ">Details:</span>{description}</p>
                  </div>

                </div>
              </div>


              <div className=" w-full lg:w-96 shadow-md px-5 bg-base-100 pb-5  rounded-xl ">
                <h1 className="text-center text-4xl font-semibold  py-5  text-primary">Purchase Order</h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col ">

                    <input type="text"placeholder="Name" class="input w-full placeholder:text-[15px] py-5 mb-3 " defaultValue={user?.displayName} disabled {...register("name", { value: user?.displayName })} />

                    <input type="text" placeholder="Email" class="input w-full placeholder:text-[15px] py-5 my-3" defaultValue={user?.email} disabled {...register("email", { value: user?.email })} />

                    <input type="phone" placeholder="Phone Number" class="input input-bordered w-full placeholder:text-[15px] py-5 my-3"{...register("phone", {required: {value: true, message: "Phone Number is required!",},})}/>{errors.phone?.type === "required" && (<span className="label-text-alt text-red-600  pl-1"> {errors.phone.message}</span>)}

                    <input type="text"placeholder="Where to Ship" class="input input-bordered  placeholder:text-[15px] py-5 my-3"{...register("address", {required: {value:true,
                    message: "Ship Address is required!",},})}
                    />{errors.address?.type === "required" && (<span className="label-text-alt text-red-600  pl-1">{errors.address.message}</span>)}

                    <input type="number" placeholder="Quantity"class="input w-2/6 input-bordered placeholder:text-[15px] py-5 my-3"{...register("quantity", {required: {value:true,message: "Quantity is required!",},})}/>{errors.quantity?.type === "required" && (<span className="label-text-alt text-red-600 pl-1">{errors.quantity.message}</span>)}

                  </div>

                  <button type="submit"className="px-8 mt-5 w-full  rounded-md py-2 font-semibold font-koulen btn-primary ">Place Order</button>

               </form>
              </div>
            </div>
       
        </div>
      </section>
    </Fragment>
  );
};

export default Purchase;
