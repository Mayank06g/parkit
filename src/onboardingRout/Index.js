import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import About from '../onboarding/aboutus/About';
import Contact from '../onboarding/contactus/Contact';
import Login from '../onboarding/home/Login';
import Signup from '../onboarding/signup/SignUp';
import Emp from '../welcome/employee/HomeEmp';

const AppRoutes=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signupus" element={<Signup />} />
            <Route path="aboutus" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path='welcome/Emp' element ={<Emp/>} />
        </Routes>
      
    </BrowserRouter> 
    )
}
export default AppRoutes