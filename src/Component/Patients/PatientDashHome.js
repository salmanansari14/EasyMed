import '../../Style/PatientDashboard.css';

function PatientDashHome() {
    return (
            <div className="">
                <div className='appitem'>
                    <i class="fa-regular fa-calendar-check fo"></i>
                    <h2>Book my appoinment</h2>
                    <a href="/PatientAppointment">Book appoinment</a>
                </div>
                <div className='appitem'>
                    <i class="fa-regular fa-calendar-check fo"></i>
                    <h2>My appoinment</h2>
                    <a href="/AppointmentHistory">View Appoinment History</a>
                </div>
            </div>
    )
}
export default PatientDashHome;