import '../../Style/PatientDashboard.css';
import DoctorDashHome from './DoctorDashHome';
import AppoinmentDoctor from './AppoinmentDoctor';

import {
    BrowserRouter as Switch, Route
} from "react-router-dom";

function DoctorDashboard() {
    return (
        <div className='apmnt main'>
            <h1 className='heddash'>Welcome Dr. Salman Ansari</h1>
            <div className="appointment">
                <table class=" w-25 mx-3 table tbl">
                    <tbody>
                        <tr className='dashitem'>
                            <td className='tdd'> <a className='anc' href='/d'> Dashboard</a></td>
                        </tr>
                        <tr className='dashitem'>
                            <td className='tdd'> <a className='anc' href="/AppoinmentDoctor"> Appointment Details</a></td>
                        </tr>
                        <tr className='dashitem'>
                            <td className='tdd'> <a className='anc' href="/"> Log Out</a></td>
                        </tr>
                    </tbody>
                </table>

                <Switch>
                    <Route exact path="/d">
                        <DoctorDashHome />
                    </Route>
                    <Route exact path="/AppoinmentDoctor">
                        <AppoinmentDoctor />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
export default DoctorDashboard;