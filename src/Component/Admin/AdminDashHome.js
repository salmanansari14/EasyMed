import '../../Style/PatientDashboard.css';
function AdminDashHome() {
    return (
        <div className='apmnt'>
            <div className="appointment">
                <div className='appitem'>
                    <i class="fa-regular fa-calendar-check fo"></i>
                    <h2>Doctor list</h2>
                    <a href="/DoctorList">view doctors</a>
                </div>
                <div className='appitem'>
                    <i class="fa-regular fa-calendar-check fo"></i>
                    <h2>Patient List</h2>
                    <a href="/PatienList">view Patients</a>
                </div>
                <div className='appitem'>
                    <i class="fa-regular fa-calendar-check fo"></i>
                    <h2>Appoinments</h2>
                    <a href="/AppoinmentDetails">View appoinments</a>
                </div>
                <div className='appitem'>
                    <i class="fa-regular fa-calendar-check fo"></i>
                    <h2>Manage Doctor</h2>
                    <a href="/AddDoctor">manage/add doctors</a>
                </div>
            </div>
        </div>
    )
}
export default AdminDashHome;