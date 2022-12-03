import '../../Style/PatientDashboard.css';
import PatientDashHome from './PatientDashHome';
import PatientAppoinment from './PtientAppoinment';
import AppoinmentHistory from './AppoinmentHistory';

import {
    BrowserRouter as Switch, Route
} from "react-router-dom";

function PatientDashboard() {
    return (
        <div className='apmnt main'>
            <h1 className='heddash'>Welcome Salman Ansari (Patient)</h1>
            <div className="appointment">
                <table class="tt mx-3 table tbl">
                    <tbody>
                        <tr className='dashitem'>
                            <td className='dashitm'><a className='anc' href='/p'>Dashboard</a></td>
                        </tr>
                        <tr className='dashitem'>
                            <td className='dashitm'><a className='anc' href='/PatientAppoinment'>Book Appointment</a></td>
                        </tr>
                        <tr className='dashitem'>
                            <td className='dashitm'><a className='anc' href='/AppoinmentHistory'>Appointment History</a></td>
                        </tr>
                        <tr className='dashitem'>
                            <td className='dashitm'><a className='anc' href='/salmanansari14/EasyMed.git'>Log Out</a></td>
                        </tr>
                    </tbody>
                </table>

                <Switch>
                    <Route exact path="/p">
                        <PatientDashHome />
                    </Route>
                    <Route exact path="/AppoinmentHistory">
                        <AppoinmentHistory />
                    </Route>
                    <Route exact path="/PatientAppoinment">
                        <PatientAppoinment />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
export default PatientDashboard;