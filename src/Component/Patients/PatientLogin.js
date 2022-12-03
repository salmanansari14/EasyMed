function PatientLogin() {
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
                        <h3 className="loginheading">Patient Login</h3>
                        <input className='loginform' type="text" placeholder='Email' />
                        <input className='loginform' type="text" placeholder='Password' />
                    </div>
                    <div>
                    <span><a href="/salmanansari14/EasyMed.git">Don't have an accoutn</a></span>
                        <button className='buttonn'><a href="/loggedp">Login</a></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PatientLogin;