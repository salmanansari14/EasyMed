import {
  BrowserRouter as Switch, Route
} from "react-router-dom";

import './App.css';
import TopMain from './Component/TopMain';
import About from './Component/About';
import PatientDashboard from './Component/Patients/PatientDashboard';
import DoctorDashboard from './Component/Doctors/DoctorDashboard';
import AdminDashboard from './Component/Admin/AdminDashboard';
import Footer from "./Component/Footer";

{/* This main file all js component file */}

function App() {
  return (
    <div className="App">

      <Switch>
        <TopMain />
        <Route exact path="/About">
          <About />
        </Route>

        <Route exact path="/loggedp">
          <PatientDashboard />
        </Route>
        <Route exact path="/PatienDashHome">
          <PatientDashboard />
        </Route>
        <Route exact path="/p">
          <PatientDashboard />
        </Route>
        <Route exact path="/PatientAppoinment">
          <PatientDashboard />
        </Route>
        <Route exact path="/AppoinmentHistory">
          <PatientDashboard />
        </Route>

        <Route exact path="/loggedd">
          <DoctorDashboard />
        </Route>
        <Route exact path="/d">
          <DoctorDashboard />
        </Route>
        <Route exact path="/DoctroDashHome">
          <DoctorDashboard />
        </Route>
        <Route exact path="/AppoinmentDoctor">
          <DoctorDashboard />
        </Route>

        <Route exact path="/loggeda">
          <AdminDashboard />
        </Route>
        <Route exact path="/a">
          <AdminDashboard />
        </Route>
        <Route exact path="/AdminDashHome">
          <AdminDashboard />
        </Route>
        <Route exact path="/AppoinmentDetails">
          <AdminDashboard />
        </Route>
        <Route exact path="/DoctorList">
          <AdminDashboard />
        </Route>
        <Route exact path="/PatientList">
          <AdminDashboard />
        </Route>
        <Route exact path="/AddDoctor">
          <AdminDashboard />
        </Route>
        <Footer />
      </Switch>
      
    </div>
  );
}
export default App;