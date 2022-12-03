import '../../Style/PatientDashboard.css';
function AppoinmentDoctor() {
    return (
        <div>
            <h1>Appoinment Details for Doctor</h1>
            <div className='appointment'>
                <table class="table table-striped tbl">
                    <thead>
                        <tr>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Appoinment Date</th>
                            <th scope="col">Appoinment Time</th>
                            <th scope="col">Current Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rizwanul</td>
                            <td>Rizwan08@gmail.com</td>
                            <td>9674457400</td>
                            <td>22/12/2022</td>
                            <td>11:23:00</td>
                            <td>Active</td>
                            <td> <button className="btn btn-danger btn-sm">Cancel</button> </td>
                        </tr>
                        <tr>
                            <td>Ashutosh Kesarwani</td>
                            <td>Adarsh123@gmail.com</td>
                            <td>9454800184</td>
                            <td>05/12/2022</td>
                            <td>09:23:00</td>
                            <td>Active</td>
                            <td> <button className="btn btn-danger btn-sm">Cancel</button> </td>
                        </tr>
                        <tr>
                            <td>Salman Ansari</td>
                            <td>salmanansari14@gmail.com</td>
                            <td>85764867413</td>
                            <td>22/12/2022</td>
                            <td>08:15:00</td>
                            <td>Cancelled by you</td>
                            <td> <button className="btn btn-sm">Cancel</button> </td>
                        </tr>
                        <tr>
                            <td>Imran sheikh</td>
                            <td>imran33@gmail.com</td>
                            <td>8632867484</td>
                            <td>16/01/2023</td>
                            <td>02:23:00</td>
                            <td>Active</td>
                            <td> <button className="btn btn-danger btn-sm">Cancel</button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AppoinmentDoctor;