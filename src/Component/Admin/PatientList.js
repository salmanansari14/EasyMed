import '../../Style/PatientDashboard.css';
function PatientList() {
    return (
        <div>
            <h1>Patient List</h1>
            <div className='appointment'>
                <table class="table table-striped tbl">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Adarsh</td>
                            <td>Mishra</td>
                            <td>Kumar05@gmail.com</td>
                            <td>9576007411</td>
                            <td>Adarsh2345@3</td>
                        </tr>
                        <tr>
                            <td>Salman</td>
                            <td>Ansari</td>
                            <td>salmanansari14@gmail.com</td>
                            <td>7845256354</td>
                            <td>Salman1@</td>
                        </tr>
                        <tr>
                            <td>Imran</td>
                            <td>Shiekh</td>
                            <td>Imran14@gmail.com</td>
                            <td>7458671413</td>
                            <td>Imransekh321#</td>
                        </tr>
                        <tr>
                            <td>Ashutosh</td>
                            <td>Kesarwani</td>
                            <td>Ashut4@gmail.com</td>
                            <td>8764867413</td>
                            <td>abc135##</td>
                        </tr>
                        <tr>
                            <td>Rizwanul</td>
                            <td>Hasan</td>
                            <td>Rizwan123@gmail.com</td>
                            <td>8360325641</td>
                            <td>Rizwan1@</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default PatientList;