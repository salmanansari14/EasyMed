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
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>Salman</td>
                            <td>Ansari</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Imran</td>
                            <td>Shiekh</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Ashutosh</td>
                            <td>Kesarwani</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Rizwanul</td>
                            <td>Hasan</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default PatientList;