import '../../Style/PatientDashboard.css';
function DoctorDashHome() {
    return (
        <div className='apmnt'>
            <div className="appointment">
                <div className='appitem'>
                    <i class="fa-regular fa-calendar-check fo"></i>
                    <h2>Appointment</h2>
                    <a href="/AppointmentDoctor">View Appointment</a>
                </div>
            </div>
        </div>
    )
}
export default DoctorDashHome;