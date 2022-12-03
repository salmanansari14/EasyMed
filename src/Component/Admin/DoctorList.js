import '../../Style/PatientDashboard.css';
function DoctorList() {
    return (
        <div>

            <h1>Doctor List</h1>
            <div className='appointment'>
                <table class="table table-striped tbl">
                    <thead>
                        <tr>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">password</th>
                            <th scope="col">Email</th>
                            <th scope="col">Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dr. Chaddha</td>
                            <td>Chaddha#13</td>
                            <td>chaddhaDr345@gmail.com</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>Dr. Shukla</td>
                            <td>Skl3214@</td>
                            <td>shuklaji345@gmail.com</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>Dr. DB Agarwal</td>
                            <td>123DB@@</td>
                            <td>agarwal345@gmail.com</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>Dr. Khursheed</td>
                            <td>1Khursheed@@</td>
                            <td>khursheed90@gmail.com</td>
                            <td>500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default DoctorList;