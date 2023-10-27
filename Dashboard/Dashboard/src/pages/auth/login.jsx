import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ setToken }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/login', formData);
            const { token } = response.data;
            setToken(token);
            localStorage.setItem('token', token);
            toast.success('Login successful');
            navigate('/dashboard');
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
                        <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5">
                                <h3 className="mb-4 text-center">Sign in</h3>
                                <h4 className="mb-4 text-center" style={{ color: 'green' }}>Pain Management</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="username">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="username"
                                            placeholder="Email"
                                            name='username'
                                            className="form-control"
                                            onChange={handleChange}
                                            value={formData.username}
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
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link to="/register" className="link-danger">Register</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;

