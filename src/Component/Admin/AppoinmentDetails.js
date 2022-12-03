import '../../Style/PatientDashboard.css';
import '../../Style/Min.css';
function AppoinmentDetails() {
    return (
        <div className=''>
            <h1>AppoinmentDetails</h1>
            <div className='appointment'>
                <table class="table table-striped tbl">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Consultancy Fees</th>
                            <th scope="col">Appoinment Date</th>
                            <th scope="col">Appoinment Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Salman Ansari</td>
                            <td>salmanansari14@gmail.com</td>
                            <td>9976867400</td>
                            <td>Dr. Chaddha</td>
                            <td>1000</td>
                            <td>05/01/2023</td>
                            <td>09:15:00</td>
                        </tr>
                        <tr>
                        <td>Adarsh Kumar</td>
                            <td>Kumar05@gmail.com</td>
                            <td>9576007411</td>
                            <td>Dr. DB Agarwal</td>
                            <td>1000</td>
                            <td>08/12/2022</td>
                            <td>02:15:00</td>
                        </tr>
                        <tr>
                        <td>Imran Shiekh</td>
                            <td>Imran14@gmail.com</td>
                            <td>7458671413</td>
                            <td>Dr. Khursheed</td>
                            <td>500</td>
                            <td>14/12/2022</td>
                            <td>12:15:00</td>
                        </tr>
                        <tr>
                        <td>Ashutosh Kesarwani</td>
                            <td>Ashut4@gmail.com</td>
                            <td>8764867413</td>
                            <td>Dr. Mishra</td>
                            <td>1000</td>
                            <td>22/12/2022</td>
                            <td>08:15:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AppoinmentDetails;