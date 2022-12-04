import '../../Style/PatientDashboard.css';

function PatientDashHome() {
    return (
            <div className="">
                <div className='appitem'>
                    <i class="fa-regular fa-calendar-check fo"></i>
                    <h2>Book my appointment</h2>
                    <a href="/PatientAppointment">Book appointment</a>
                </div>
                <div className='appitem'>
                    {/* <i class="fa-regular fa-calendar-check fo"></i> */}
                    {/* <i class="fa-solid fa-check fo"></i> */}
                    <i class="fa-solid fa-list fo"></i>
                    <h2>My appointment</h2>
                    <a href="/AppointmentHistory">View Appointment History</a>
                </div>
            </div>
    )
}
export default PatientDashHome;