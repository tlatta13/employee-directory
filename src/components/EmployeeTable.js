import React, { Fragment } from 'react';
import "./EmployeeTable.css";

function EmployeeTable(props) {
      return (
        <Fragment>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    {/* Table headers for employee info we display */}
                    <th>Photo</th>
                    <th onClick={props.sortByName}>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th onClick={props.sortByCity}>Location</th>
                </tr>
            </thead>
            <tbody>
                {/* Map over employee results to display info defined in td */}
                {props.results.map(result => (
                    <tr key={result.id.value}>
                        <td> <img src={result.picture.thumbnail} alt={result.picture.first} /></td>
                        <td>{result.name.first + " " + result.name.last}  </td>
                        <td>{result.phone}</td>
                        <td><a href={result.email}>{result.email}</a></td>
                        <td>{result.location.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </Fragment>
    )
}

// Export EmployeeTable
export default EmployeeTable