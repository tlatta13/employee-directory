import React, { Fragment } from 'react';

function NavBar() {
    return (
        <Fragment>
        <div className="container">
            <nav className="navbar navbar-dark bg-primary">
                <h1 className="text-white">Employee Directory</h1>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Enter Employee Name" aria-label="Search" />
                </form>
            </nav>
        </div>
        </Fragment>
    );
}

export default NavBar;