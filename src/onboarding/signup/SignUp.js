import React from "react";
import { useState, useEffect } from "react";

import './SignUp.css';
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const initialValues = { username: "", email: "", password: "", confirmpassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
   
        setIsSubmit(true);
    };
    const navigate = useNavigate();
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {

            navigate('/')
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,8}$/;
        const nameRegex = /^[A-Za-z]+$/
        if (!values.username) {
            errors.username = "Username is required!";
        }

        else if (!nameRegex.test(values.username)) {
            errors.username = 'Enter only alphabets'
        }
        else if (values.username.length<3){
            errors.username='Name must be more than 3 characters'
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "Create Strong Password ";
        }
        if (!values.confirmpassword) {
            errors.confirmpassword = 'Confirm Password is required'
        } else if (values.password !== values.confirmpassword) {
            errors.confirmpassword = ' Password Not Match'
        }

        return errors;
    };

    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <h1> Park-it SignUp Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">

                    <div className="field">
                        <label>Name</label>
                        <p>
                            <input
                                type="text"
                                name="username"
                                placeholder="Name"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                            <p>{formErrors.username}</p>
                        </p>

                    </div>

                    <div className="field">
                        <label>Email</label>
                        <p>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <p>{formErrors.email}</p>
                        </p>

                    </div>

                    <div className="field">
                        <label>Password</label>
                        <p>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <p>{formErrors.password}</p>
                        </p>

                    </div>

                    <div className="field">
                        <label>Confirm Password </label>
                        <p>
                            <input
                                type="password"
                                name="confirmpassword"
                                placeholder="Confirm Password"
                                value={formValues.confirmpassword}
                                onChange={handleChange}
                            />
                            <p>{formErrors.confirmpassword}</p>
                        </p>

                    </div>

                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default Signup;


