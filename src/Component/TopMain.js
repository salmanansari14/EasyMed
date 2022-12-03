import '../Style/Min.css';
import {
    BrowserRouter as Switch, Route
} from "react-router-dom";

import Mainform from './Mainform';
import Contact from './Contact';
import PatientLogin from './Patients/PatientLogin';
import DoctorLogin from './Doctors/DoctorLogin';
import AdminLogin from './Admin/AdminLogin';
import { useState } from 'react';

{/* <i class="fa-solid fa-xmark"></i> */}
function Main() {
    const [click, setShowNav] = useState(false);
    return (
        <div className="main">
            <nav className='navbar'>
                <ul className='logo'>
                <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={() => setShowNav(!click)}></i>
                    <b>EasyMed</b>
                </ul>
                <ul className={click ? "navul navmob" : "navul"}>
                    <li className='ulli'> <a className='ali' href="/salmanansari14/EasyMed.git">  Home </a></li>
                    <li className='ulli'> <a className='ali' href="/About"> About Us </a></li>
                    <li className='ulli'> <a className='ali' href="/Contact"> Contact </a> </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/salmanansari14/EasyMed.git">
                    <Mainform />
                </Route>
                <Route exact path="/Doctor">
                    <Mainform />
                </Route>
                <Route exact path="/Admin">
                    <Mainform />
                </Route>
                <Route exact path="/Contact">
                    <Contact />
                </Route>
                <Route exact path="/Patientlogin">
                    <PatientLogin />
                </Route>
                <Route exact path="/Doctorlogin">
                    <DoctorLogin />
                </Route>
                <Route exact path="/Adminlogin">
                    <AdminLogin />
                </Route>
            </Switch>
        </div>
    )
}
export default Main;
