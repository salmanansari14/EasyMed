import '../../Style/PatientDashboard.css';
function AddDoctor() {
    return (
        <div>
            <h1>Add Doctor</h1>
            {/* <div className='appointment'> */}
                <form className='appoform'>
                    <label className="inpappo" htmlFor="">Doctor
                        <input className="inpp" type="text" placeholder="doctor Name" />
                    </label>
                    <label className="inpappo" htmlFor="">Password
                        <input className="inpp" type="text" placeholder="Enter Your Password" />
                    </label>
                    <label className="inpappo" htmlFor="">Confirm Password
                        <input className="inpp" type="text" placeholder="Re-Enter Password" />
                    </label>
                    <label className="inpappo" htmlFor="">Email
                        <input className="inpp" type="text" placeholder="Enter Your Email" />
                    </label>
                    <label className="inpappo" htmlFor="">Consultancy fees
                        <input className="inpp" type="text" placeholder="Fees" />
                    </label>
                    <button className='btnapp'>Add Doctor</button>
                </form>
            {/* </div> */}
        </div>
    )
}
export default AddDoctor;