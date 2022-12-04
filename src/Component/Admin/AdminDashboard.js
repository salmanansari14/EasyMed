import '../../Style/PatientDashboard.css';
import AdminDashHome from './AdminDashHome';
import DoctorList from './DoctorList';
import PatienList from './PatientList';
import AppoinmentDetails from './AppoinmentDetails';
import AddDoctor from './AddDoctor';

import {
    BrowserRouter as Switch, Route
} from "react-router-dom";

function AdminDashboard() {
    return (
        <div className=' main apmnt'>
            <h1 className='heddash'>Salman Ansari (Admin) </h1>
            <div className="appointment">
                <table class="w-25 mx-3 table tbl tt">
                    <tbody>
                        <tr className='dashitem'>
                            <td><a className='anc' href='/a'> Dashboard</a></td>
                        </tr>
                        <tr className='dashitem'>
                            <td><a className='anc' href='/DoctorList'>Doctor List</a></td>
                        </tr>
                        <tr className='dashitem'>
                            <td><a className='anc' href='/PatientList'> Patient List</a></td>
                        </tr>
                        <tr className='dashitem'>
                            <td><a className='anc' href='/AppoinmentDetails'>Appoinment History</a></td>
                        </tr>
                        <tr className='dashitem'>
                            <td><a className='anc' href='/AddDoctor'>Add Doctor</a></td>
                        </tr>
                        <tr className='dashitem'>
                            <td><a className='anc' href='/salmanansari14/EasyMed.git'>Log Out</a></td>
                        </tr>
                    </tbody>
                </table>

                <Switch>
                    <Route exact path="/a">
                        <AdminDashHome />
                    </Route>
                    <Route exact path="/DoctorList">
                        <DoctorList />
                    </Route>
                    <Route exact path="/PatientList">
                        <PatienList />
                    </Route>
                    <Route exact path="/AppoinmentDetails">
                        <AppoinmentDetails />
                    </Route>
                    <Route exact path="/AddDoctor">
                        <AddDoctor />
                    </Route>
                </Switch>
            </div>

        </div>
    )
}
export default AdminDashboard;