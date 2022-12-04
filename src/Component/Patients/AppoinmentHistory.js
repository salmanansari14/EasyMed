import '../../Style/PatientDashboard.css';
function AppoinmentHistory() {
    return (
        <table class="table table-striped tbl">
            <thead>
                <tr>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">Appointment Time</th>
                    <th scope="col">Current Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Adarsh Mishra</td>
                    <td>8674867484</td>
                    <td>22/12/2022</td>
                    <td>11:23:00</td>
                    <td>Active</td>
                    <td> <button className='btn btn-danger btn-sm'>Cancel</button></td>
                </tr>
                <tr>
                    <td>Rizwanul Hasan</td>
                    <td>7854589644</td>
                    <td>06/02/2022</td>
                    <td>11:23:00</td>
                    <td>Cancelled by You</td>
                    <td> <button className='btn btn-sm'>Cancel</button></td>
                </tr>
                <tr>
                    <td>Mohd Imran</td>
                    <td>9645452514</td>
                    <td>07/05/2022</td>
                    <td>11:23:00</td>
                    <td>Active</td>
                    <td> <button className='btn btn-danger btn-sm'>Cancel</button></td>
                </tr>
                <tr>
                    <td>Salman Ansari</td>
                    <td>9656521547</td>
                    <td>25/11/2022</td>
                    <td>09:13:00</td>
                    <td>Cancelled by Doctor</td>
                    <td> <button className='btn btn-sm'>Cancel</button></td>
                </tr>
                <tr>
                    <td>Farhan Ansari</td>
                    <td>8564725965</td>
                    <td>02/10/2022</td>
                    <td>12:13:40</td>
                    <td>Cancelled by Your</td>
                    <td> <button className='btn btn-sm'>Cancel</button></td>
                </tr>
            </tbody>
        </table>
    )
}
export default AppoinmentHistory;