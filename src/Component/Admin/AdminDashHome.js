import '../../Style/PatientDashboard.css';
function AdminDashHome() {
    return (
        <div className='apmnt'>
            <div className="appointment">
                <div className='appitem'>
                    <i class="fa-solid fa-user-group fo"></i>
                    <h2>Doctor list</h2>
                    <a href="/DoctorList">View Doctors</a>
                </div>
                <div className='appitem'>
                    <i class="fa-regular fa-calendar-check fo"></i>
                    <h2>Appoinments</h2>
                    <a href="/AppoinmentDetails">View Appoinments</a>
                </div>
                <div className='appitem'>
                    <i class="fa-solid fa-user-group fo"></i>
                    <h2>Patient List</h2>
                    <a href="/PatienList">View Patients</a>
                </div>
                <div className='appitem'>
                    <i class="fa-sharp fa-solid fa-user-plus fo"></i>
                    <h2>Add Doctor</h2>
                    <a href="/AddDoctor">Manage/Add Doctors</a>
                </div>
            </div>
        </div>
    )
}
export default AdminDashHome;