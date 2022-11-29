import '../../Style/PatientDashboard.css';
function AppoinmentDoctor() {
    return (
        <div>
            <h1>Appoinment Details for Doctor</h1>
            <div className='appointment'>
                <table class="table table-striped tbl">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contack</th>
                            <th scope="col">Appoinment Date</th>
                            <th scope="col">Appoinment Time</th>
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
                            <td>@mdo</td>
                            <td>Active</td>
                            <td> <button className="btn btn-danger btn-sm">Cancel</button> </td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Active</td>
                            <td> <button className="btn btn-danger btn-sm">Cancel</button> </td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Cancelled</td>
                            <td> <button className="btn btn-sm">Cancel</button> </td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Active</td>
                            <td> <button className="btn btn-danger btn-sm">Cancel</button> </td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Cancelled</td>
                            <td> <button className="btn btn-sm">Cancel</button> </td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Cancelled</td>
                            <td> <button className="btn btn-sm">Cancel</button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AppoinmentDoctor;