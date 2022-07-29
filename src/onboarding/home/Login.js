import { useState, useEffect } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState()
  const userData = JSON.parse(localStorage.getItem('userData'));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    localStorage.setItem('userData', JSON.stringify({ email: formValues.email, islogin: true }));

  };
  const navigate = useNavigate();

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {

      navigate('welcome/Emp')
      setData(formValues)
      console.log(formValues);
    }
  }, [formErrors]);

  useEffect(() => {
    // userData.islogin === true  ? navigate('welcome/Emp') : null
    if(userData &&  userData.islogin ){
      navigate('welcome/Emp')
      console.log('user' , userData);
    }
 
  },[])

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,8}$/;
    if (!values.email) {
      errors.email = "Email is required!";
    }
    else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Create Strong Password ";
    }

    return errors;
  };

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <h1>Kohler Park-it</h1>
        <div className="ui divider"></div>
        <div className="ui form">
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

          <button className="fluid ui button blue">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;



