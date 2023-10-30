import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./pages/dashboard";
import Patient from "./pages/patient";
import Doctor from "./pages/doctors";
import DoctorForm from "./pages/doctors/DoctorForm";
import Viewpage from "./pages/patient-details/Viewpage";
import UpdateForm from "./pages/doctors/UpdateForm";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Layout from "./layout/Layout";
import Page from "./pages/components/Page";
import Page1 from "./pages/components/Page1";
import Page2 from "./pages/components/Page2";
import Page3 from "./pages/components/Page3";
import Page4 from "./pages/components/Page4";
import Page5 from "./pages/components/Page5";
import Page6 from "./pages/components/Page6";
import Page7 from "./pages/components/Page7";
import UserProfile from "./components/partials/header/Tools/UserProfile";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <div>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="" element={<Login setToken={setToken} />} />
        <Route path="/*" element={token ? <Layout token={token}/> : <Navigate to='/' />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patient" element={<Patient />} />
          <Route path="doctors" element={<Doctor />} />
          <Route path="view" element={<Viewpage />} />
          <Route path="form" element={<DoctorForm />} />
          <Route path="updateform/:id" element={<UpdateForm />} />
          <Route path="profile" element={<UserProfile token={token} />} />
          <Route path="step1" element={<Page/>} />
          <Route path="step2" element={<Page1/>} />
          <Route path="step3" element={<Page2/>} />
          <Route path="step4" element={<Page3/>} />
          <Route path="step5" element={<Page4/>} />
          <Route path="step6" element={<Page5/>} />
          <Route path="step7" element={<Page6/>} />
          <Route path="step8" element={<Page7/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
