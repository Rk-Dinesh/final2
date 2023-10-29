import React, { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import axios from "axios";
import jwtDecode from 'jwt-decode';
import "bootstrap/dist/css/bootstrap.min.css";



const UserProfile = ({ token }) => {
  const decodedToken = jwtDecode(token);
   const data1 = 'hello'
  const initialUserData = {
    userid: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUserData);

  useEffect(() => {
    // Use the decoded email from the token
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

  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/updateDoctor/${decodedToken.email}`, {
        userid: userData.userid,
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
      });

      console.log(response);
      // Handle the response or navigate to another page upon success
    } catch (error) {
      console.log(error);
      // Handle errors if the request fails
    }
  };

  return (
    <div>
      <div className="flex justify-between flex-wrap items-center mb-6">
        <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
        User Profile
        </h4>
      </div>
      <div>
        <div className="gd-flex  align-items-center">
          <div className="cold-md-6">
            <div className="bg-transparent ">
             <Card>
             <form className="space-y-3">
                <div >
                  <label htmlFor="userid" className="col-sm-2 col-form-label"><b>Doctor ID :</b></label>
                  <input
                    type="text"
                    name="userid"
                    className=" col-sm-10 py-2 "
                    id="userid"
                    placeholder="User ID"
                    value={userData.userid || ""}
                    onChange={(e) => setUserData({ ...userData, userid: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstname"  className="col-sm-2 col-form-label"><b>First Name :</b></label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className=" col-sm-10 py-2"
                    placeholder="First Name"
                    value={userData.firstname || ""}
                    onChange={(e) => setUserData({ ...userData, firstname: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname"  className="col-sm-2 col-form-label"><b>Last Name :</b></label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className=" col-sm-10 py-2"
                    placeholder="Last Name"
                    value={userData.lastname || ""}
                    onChange={(e) => setUserData({ ...userData, lastname: e.target.value })}
                  />
                </div>
                <div className="form-group row">
                  <label htmlFor="email"  className="col-sm-2 col-form-label"><b>Email :</b></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="col-sm-10 py-2"
                    placeholder="Email"
                    value={userData.email || ""}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"  className="col-sm-2 col-form-label"><b>Phone :</b></label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className=" col-sm-10  py-2"
                    placeholder="Phone"
                    value={userData.phone || ""}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="password"  className="block  capitalize form-label">Password*</label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="form-control py-2"
                    placeholder="Password"
                    value={userData.password || ""}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  />
                </div> */}
                {/* <div className="ltr:text-right rtl:text-left">
                  <button className="btn btn-dark text-center" type="submit">
                    Update
                  </button>
                </div> */}
              </form>
             </Card>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default UserProfile;
