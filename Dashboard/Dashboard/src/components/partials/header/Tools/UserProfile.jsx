import React, { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import axios from "axios";
import jwtDecode from 'jwt-decode';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = ({ token }) => {

  const navigate = useNavigate();
  const decodedToken = jwtDecode(token);

  const initialUserData = {
    userid: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  };

  const [userData, setUserData] = useState(initialUserData);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  useEffect(() => {

    const decodedEmail = decodedToken.email;
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/doctor/${decodedEmail}`);
        const responseData = response.data;
        setUserData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [decodedToken.email]);

  // const onUpdate = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.put(`http://localhost:3001/updatepassword/${decodedToken.email}`, {

  //       password: userData.password,
  //     });
  //     if (response.status === 200) {
  //       toast.success('Password Updated successfully');
  //       navigate('/dashboard')
  //     }

  //   } catch (error) {
  //     console.log(error);

  //   }
  // };

  const onUpdate = async (e) => {
    e.preventDefault();

    if (newPassword === "" || confirmPassword === "") {
      toast.error('All fields are required');
    } else if (newPassword === confirmPassword) {
      try {
        const response = await axios.put(`http://localhost:3001/updatepassword/${decodedToken.email}`, {
          password: newPassword,
        });
        if (response.status === 200) {
          toast.success('Password Updated successfully');
          navigate('/dashboard');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error('New & confirm password must match');
    }
  };




  return (
    <div>
      <div className="flex justify-between flex-wrap items-center mb-6">
        <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
          User Profile
        </h4>
      </div>
      <Card>
        <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6">
        <Card>
            <div className="bg-transparent">
              <form className="space-y-3" onSubmit={onUpdate}>
                <div >
                  <label htmlFor="userid" className="col-sm-2 col-form-label"><b>Doctor ID </b></label>
                  <input
                    type="text"
                    name="userid"
                    className=" col-sm-10 py-2 "
                    id="userid"
                    placeholder="User ID"
                    value={`: ${userData.userid}`}
                   readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstname" className="col-sm-2 col-form-label"><b>First Name </b></label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className=" col-sm-10 py-2"
                    placeholder="First Name"
                    value={`: ${userData.firstname}`}
                  readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname" className="col-sm-2 col-form-label"><b>Last Name </b></label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className=" col-sm-10 py-2"
                    placeholder="Last Name"
                    value={`: ${userData.lastname}`}
                   readOnly
                  />
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-2 col-form-label"><b>Email </b></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="col-sm-10 py-2"
                    placeholder="Email"
                    value={`: ${userData.email}`}
                   readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="col-sm-2 col-form-label"><b>Phone </b></label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className=" col-sm-10  py-2"
                    placeholder="Phone"
                    value={`: ${userData.phone}`}
                  readOnly
                  />
                </div>
              </form>
            </div>
         </Card>
        </div>
        <div className="col-span-6">
         <Card>
            <div className="bg-transparent">
              <form className="space-y-3" onSubmit={onUpdate}>
                <div>
                  {/* <div className="form-group">
                      <label htmlFor="password" className=" col-sm-2 col-form-label"><b>New Password*</b></label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control py-2"
                        placeholder="Password"
                        value={(userData.password || "").substring(0, 5)}
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className=" col-sm-2 col-form-label"><b>Confirm Password*</b></label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control py-2"
                        placeholder="Password"
                        value={''}
                        onChange={''}
                      />
                    </div> */}
                  <div className="form-group">
                    <label htmlFor="newPassword" className=" col-form-label py-2"><b>New Password<span style={{ color: 'red' }}>*</span></b></label>
                    <input
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      className="form-control py-2"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword" className=" col-form-label py-2"><b>Confirm Password <span style={{ color: 'red' }}>*</span></b></label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="form-control py-2"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <br />
                  <div className="ltr:text-right rtl:text-left">
                    <button className="btn btn-dark text-center" type="submit">
                      Change Password
                    </button>
                  </div>
                </div>

              </form>
            </div>
         </Card>
         </div>
         </div>
      </Card>
    </div>

  );

};

export default UserProfile;


