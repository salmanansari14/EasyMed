import '../../Style/Min.css';
function DoctorReg() {
    return (
        <div className=''>
            <form className='' action="">
                <div className='ffm'>
                    <h3>Registration Form For Doctor</h3>
                    <input className='formin' type="text" placeholder='First Name' />
                    <input className='formin' type="text" placeholder='Last Name' />
                    <input className='formin' type="text" placeholder='Email' />
                    <input className='formin' type="text" placeholder='Your Phone' />
                    <input className='formin' type="text" placeholder='Password' />
                    <input className='formin' type="text" placeholder='Confirm Password' />
                </div>
                <div>
                    <span className='spann'><a href="/Doctorlogin">Already have an accoutn ?</a></span>
                    <button className='butn'><a href="/Doctorlogin">Register</a></button>
                </div>
            </form>
        </div>
    )
}
export default DoctorReg;