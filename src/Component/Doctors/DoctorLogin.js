function DoctorLogin() {
    return (
        <div className='patientlogin'>
            <div className='loginbrandName'>
                <h2 className='loginbran'>
                    We are here for you!
                </h2>
            </div>
            <div className='fmlogin'>
                <form className='' action="">
                    <div className='frm'>
                        <i class="fa-sharp fa-solid fa-hospital-user fon"></i>
                        <h3 className="loginheading">Login as Doctor</h3>
                        <input className='loginform' type="text" placeholder='Email' />
                        <input className='loginform' type="text" placeholder='Password' />
                    </div>
                    <div>
                        <span><a href="/">Don't have an accoutn</a></span>
                        <button className='buttonn'> <a href="/loggedd">Login</a></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default DoctorLogin;