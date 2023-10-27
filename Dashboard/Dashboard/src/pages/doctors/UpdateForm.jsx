import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Textinput from "@/components/ui/Textinput";
import Card from "@/components/ui/Card";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FormValidationSchema = yup.object({
  userid: yup.string().required("User_id is required"),
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  phone: yup.string().required("Phone Number is required"),
  email: yup.string().required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const UpdateDoctor = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
  });

  const { id } = useParams();
  const [userid, setUserid] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getDoctor/${id}`);
        const responseData = response.data;
        console.log(responseData);
        setUserid(responseData.userid)
        setFirstname(responseData.firstname)
        setLastname(responseData.lastname)
        setPhone(responseData.phone)
        setEmail(responseData.email)
        setPassword(responseData.password)

        setValue("userid", responseData.userid);
        setValue("firstname", responseData.firstname);
        setValue("lastname", responseData.lastname);
        setValue("phone", responseData.phone);
        setValue("email", responseData.email);
        setValue("password", responseData.password);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [id]);

  const Update = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3001/updateDoctor/${id}`, {
        userid: userid,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        password: password
      });

      console.log(response);
      navigate('/doctors');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-between flex-wrap items-center mb-6">
        <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
          Update Doctor
        </h4>
      </div>
      <Card>
        <div className="grid grid-cols-12 gap-6 mb-6">
          <div className="2xl:col-span-6 lg:col-span-8 col-span-12">
            <div className="bg-transparent">
              <form className="space-y-3" onSubmit={Update}>
                <Textinput
                  name="userid"
                  label="Doctor ID*"
                  placeholder="User ID"
                  value={userid}
                  register={register}
                  onChange={(e) => setUserid(e.target.value)}
                  error={errors.userid}
                />
                <Textinput
                  name="firstname"
                  label="First Name*"
                  placeholder="First Name"
                  value={firstname}
                  register={register}
                  onChange={(e) => setFirstname(e.target.value)}
                  error={errors.firstname}
                />
                <Textinput
                  name="lastname"
                  label="Last Name*"
                  placeholder="Last Name"
                  value={lastname}
                  register={register}
                  onChange={(e) => setLastname(e.target.value)}
                  error={errors.lastname}
                />
                <Textinput
                  name="email"
                  label="Email*"
                  placeholder="Email"
                  value={email}
                  register={register}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email}
                />
                <Textinput
                  name="phone"
                  label="Phone*"
                  placeholder="Phone"
                  value={phone}
                  register={register}
                  onChange={(e) => setPhone(e.target.value)}
                  error={errors.phone}
                />
                <Textinput
                  name="password"
                  label="Password*"
                  placeholder="Password"
                  value={password}
                  register={register}
                  onChange={(e) => setPassword(e.target.value)}
                  error={errors.password}
                />
                <div className="ltr:text-right rtl:text-left">
                  <button className="btn btn-dark text-center" type="submit">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UpdateDoctor;
