import API from "../API";
import React, { Component } from "react"
// import NavBar from "./NavBar"
import EmployeeTable from "./EmployeeTable"


class Directory extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""
    };

    // Initialization that runs after component output is rendered to DOM
    componentDidMount() {
        API.getEmployees().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err));
    };

    // Sort Employees by Name
    sortByName = () => {
        const filterEmp = this.state.filteredEmployees;
        if (this.state.order === "desc") {
            const sortEmp = filterEmp.sort((a, b) => 
                (a.name.first > b.name.first) ? -1 : 1);
            
            this.setState({
                filteredEmployees: sortEmp,
                order: "asc"
            });
        } else {
            const sortEmp = filterEmp.sort((a, b) => 
                (a.name.first > b.name.first) ? 1 : -1);
    
            this.setState({
                filteredEmployees: sortEmp,
                order: "desc"
            });
        };
    };

    // Sort Employees by Name
    sortByCity = () => {
        const filterEmp = this.state.filteredEmployees;
        if (this.state.order === "desc") {
            const sortEmp = filterEmp.sort((a, b) => 
                (a.location.city > b.location.city) ? -1 : 1);
            
            this.setState({
                filteredEmployees: sortEmp,
                order: "asc"
            });
        } else {
            const sortEmp = filterEmp.sort((a, b) => 
                (a.location.city > b.location.city) ? 1 : -1);
    
            this.setState({
                filteredEmployees: sortEmp,
                order: "desc"
            });
        };
    };

    // Information rendered to be displayed
    render() {
        return (
            <div className="container">
                <EmployeeTable
                    results={this.state.filteredEmployees}
                    sortByName={this.sortByName}
                    sortByCity={this.sortByCity}
                />
            </div >
        )
    }
}

// Export directory component
export default Directory