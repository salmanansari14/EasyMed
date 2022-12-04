import '../Style/About.css';
function About() {
    return (
        <div>
            <h1>About Us</h1>
            <div className='about'>
                <div className='box'>
                    <a href='/Patientlogin'>
                        <i class="fa-solid fa-check fon"></i>
                        <h2>Make an appoinment</h2>
                        <p> Here you can book your appoinment very easily just by some click and you appoinment get booked.</p>
                    </a>
                </div>
                <div className='box'>
                    <a href='/Patientlogin'>
                        <i class="fa-sharp fa-solid fa-square-h fon"></i>
                        <h2>Help by specialist</h2>
                        <p>They also give advice about diet, exercise, and sleep. Doctors use science to figure out what is making people sick.</p>
                    </a>
                </div>
                <div className='box'>
                    <a href='/Patientlogin'>
                        <i class="fa-sharp fa-solid fa-hospital-user fon"></i>
                        <h2>Get report</h2>
                        <p>Here you can get you checkup report digitally in your phone.</p>
                    </a>
                </div>
                <div className='box'>
                    <a href='/Patientlogin'>
                        <i class="fa-solid fa-user-doctor fon"></i>
                        <h2>Medical checkup</h2>
                        <p>If you want to do any medical checkups like blood test, Xray, Altrasound, Cityscan. Click here</p>
                    </a>
                </div>
                <div className='box'>
                    <a href='/Patientlogin'>
                        <i class="fa-solid fa-bed fon"></i>
                        <h2>Sleep centre</h2>
                        <p>Here you can find beds if you need to admit in hospital.</p>
                    </a>
                </div>
                {/* <div className='box'>
                    <a href='/Patientlogin'>
                        <i class="fa-solid fa-notes-medical fon"></i>
                        <h2>Pharmacy</h2>
                        <p>Lorem ipsum dolor sit amet lorem20 consectetur, adipisicing elit. Facere qui hic error cumque, vitae non suscipit corporis ducimus harum in.</p>
                    </a>
                </div> */}
                <div className='box'>
                    <a href='/Patientlogin'>
                        <i class="fa-solid fa-stethoscope fon"></i>
                        <h2>Neurology</h2>
                        <p>We have some neurology specialist in our hospital you can easily reach out here.</p>
                    </a>
                </div>
                <div className='box'>
                    <a href='/Patientlogin'>
                        <i class="fa-solid fa-wheelchair fon"></i>
                        <h2>Nursing service</h2>
                        <p>Nursing service are available in our hospital.</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default About;