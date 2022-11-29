import '../Style/Min.css';
import {
    BrowserRouter as Switch, Route
} from "react-router-dom";

import PatientReg from './Patients/PatientReg';
import DoctorReg from './Doctors/DoctorReg';
import AdminReg from './Admin/AdminReg';

function Mainform() {
    return (
        <div className='mainform'>
            <div className='brandName'>
                <h2 className='spbrand'><i class="fa-sharp fa-solid fa-hospital-user fon"></i></h2>
            </div>
            <div className='formm'>
                <div className='formnav'>
                    <ul className='ulform'>
                        <li className='liform'><a href="/"> Patient</a></li>
                        <li className='liform'><a href="/Doctor"> Doctor</a></li>
                        <li className='liform'><a href="/Admin"> Admin</a></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/">
                        <PatientReg />
                    </Route>
                    <Route exact path="/Doctor">
                        <DoctorReg />
                    </Route>
                    <Route exact path="/Admin">
                        <AdminReg />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
export default Mainform;