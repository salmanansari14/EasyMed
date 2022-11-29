import '../Style/Contact.css';
function Contact() {
    return (
        <div className='aa'>
            <form className='' action="">
                <div className='ffmm'>
                    <h3>Drop a message</h3>
                    <input className='forminn' type="text" placeholder='First Name' />
                    <input className='forminn' type="text" placeholder='Last Name' />
                    <input className='forminn' type="text" placeholder='Email' />
                    <textarea className='forminn' placeholder='Write Your Message' name="" id="" cols="30" rows="10"></textarea><br />
                    <button className='bttn'>Send Message</button>
                </div>
            </form>
        </div>
    )
}
export default Contact;