import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Textinput from "@/components/ui/Textinput";
import Card from "@/components/ui/Card";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormValidationSchema = yup
  .object({
    userid: yup.string().required(" User_id is required"),
    firstname: yup.string().required(" First Name is required"),
    lastname: yup.string().required(" Lastst Name is required"),
    phone: yup.string().required("Phone Number is required"),
    email: yup.string().required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();

const Add_Board = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
  });

  const onSubmit = async (data) => {

    // try {
    //   const response = await axios.post('http://localhost:3001/doctor', data);
    //   console.log('Doctor added:', response.data);
    // } catch (error) {
    //   console.error('Error adding doctor:', error);
    // }
    // history.back();
    // console.log(data);

    try {
      const response = await axios.post('http://localhost:3001/doctor', data);
      console.log(response.data);

      if (response.status === 200) {
          toast.success('User created successfully');
          history.back();
      }
  } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 409) {
          toast.error('User already exists');
      } else {
          toast.error('User already exists');
      }
  }
  };



  return (
    <div>
      <div className="flex justify-between flex-wrap items-center mb-6">
        <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
          New Doctor
        </h4>
      </div>
      <Card >
        <div className="grid grid-cols-12 gap-6 mb-6">
          <div className="2xl:col-span-6 lg:col-span-8 col-span-12">
            <div className=" bg-transparent">

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

                <Textinput
                  name="userid"
                  label="Doctor ID*"
                  placeholder="userid"
                  register={register}
                  error={errors.userid}
                />
                <Textinput
                  name="firstname"
                  label="First Name*"
                  placeholder="First Name"
                  register={register}
                  error={errors.firstname}
                />
                <Textinput
                  name="lastname"
                  label="Last Name*"
                  placeholder="Last Name"
                  register={register}
                  error={errors.lastname}
                />
                <Textinput
                  name="email"
                  label="Email*"
                  placeholder="Email"
                  register={register}
                  error={errors.email}
                />
                <Textinput
                  name="phone"
                  label="Phone*"
                  placeholder="Phone"
                  register={register}
                  error={errors.phone}
                />
                <Textinput
                  name="password"
                  label="Password*"
                  placeholder="Password"
                  register={register}
                  error={errors.password}
                />



                <div className="ltr:text-right rtl:text-left">
                  <button className="btn btn-dark text-center">Add</button>
                </div>
              </form>

            </div>
          </div>
        </div>

      </Card>
    </div>
  );
};

export default Add_Board;
