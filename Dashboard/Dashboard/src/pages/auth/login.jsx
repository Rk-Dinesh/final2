import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode';
import MobileLogo from "@/assets/logo.png";

function Login({ setToken }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/login', formData);
            console.log(response);

            const { user, token } = response.data;

            console.log(response.data)
            const decodedToken = jwtDecode(token);
            console.log('Decoded Token:', decodedToken);
            console.log(decodedToken.email)
            setToken(token);
            localStorage.setItem('token', token);
            console.log('User Details:', user);
            toast.success('Login successful');
            navigate('/dashboard', { state: { user, token } });

        } catch (error) {
            console.error(error.response.data.message);
            toast.error('Invalid credentials');
        }
    }

    return (
        <section className="vh-100" style={{ backgroundColor: "#90a4ae" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong " style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5">
                             
                                    <div className="d-flex justify-content-center align-items-center mb-3">
                                        <img src={MobileLogo} alt="" width="40px" />
                                    </div>
                              
                                <h6 className="mb-2 text-center" style={{ color: '#097969' }}>Pain Management</h6>
                                <h5 className="mb-2 text-center">Sign in</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            name='email'
                                            className="form-control"
                                            onChange={handleChange}
                                            value={formData.email}
                                            required
                                        />
                                    </div>
                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            name='password'
                                            className="form-control"
                                            onChange={handleChange}
                                            value={formData.password}
                                            required
                                        />
                                    </div>
                                    <div className='text-center'>
                                        <button className="btn btn-dark text-center" type="submit">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                                {/* <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link to="/register" className="link-danger">Register</Link>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;

