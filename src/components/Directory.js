import API from "../API";
import React, { Component } from "react"
// import NavBar from "./NavBar"
import EmployeeTable from "./EmployeeTable"
// import "./style.css";

class Directory extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""
    };

    // this is the initialization, what do you want the page to display when page it's first loaded
    componentDidMount() {
        API.getEmployees().then(res => this.setState({
            employees: res.data.results,
        })).catch(err => console.log(err))
    }

    render() {

        return (
            <div className="container">
                <EmployeeTable results={this.state.employees}/>
            </div >


        )
    }
}

export default Directory