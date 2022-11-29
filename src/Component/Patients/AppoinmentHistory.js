import '../../Style/PatientDashboard.css';
function AppoinmentHistory() {
    return (
                <table class="table table-striped tbl">
                    <thead>
                        <tr>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Consultancy</th>
                            <th scope="col">Contack</th>
                            <th scope="col">Appoinment date</th>
                            <th scope="col">Appoinment time</th>
                            <th scope="col">Current Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td> <button className='btn btn-danger btn-sm'>Cancel</button></td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Cancelled by You</td>
                            <td> <button className='btn btn-sm'>Cancel</button></td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Active</td>
                            <td> <button className='btn btn-danger btn-sm'>Cancel</button></td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Cancelled by Doctor</td>
                            <td> <button className='btn btn-sm'>Cancel</button></td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Cancelled by Your</td>
                            <td> <button className='btn btn-sm'>Cancel</button></td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Active</td>
                            <td> <button className='btn btn-danger btn-sm'>Cancel</button></td>
                        </tr>
                    </tbody>
                </table>
    )
}
export default AppoinmentHistory;