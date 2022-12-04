import '../../Style/PatientDashboard.css';
function PatientAppoinment() {
    return (
        <div>
            <h1>Book Your Appointment</h1>
            <div className='appointment'>
                <form className='appoform'>
                    <label className="inpappo" htmlFor="">Doctor
                        <select className="inpp" name="" id="">
                            <option value="">Dr. Chaddha</option>
                            <option value="">Dr. Shukla</option>
                            <option value="">Dr. DB Agarwal</option>
                        </select>
                    </label>
                    <label className="inpappo" htmlFor="">Consultancy Fees
                        <input className="inpp" type="text" placeholder="doctor" />
                    </label>
                    <label className="inpappo" htmlFor="">Date
                        <input className="inpp" type="text" placeholder="doctor" />
                    </label>
                    <label className="inpappo" htmlFor="">Time
                        <input className="inpp" type="text" placeholder="doctor" />
                    </label>
                    <button className='btnapp'>Create New Entry</button>
                </form>
            </div>
        </div>
    )
}
export default PatientAppoinment;