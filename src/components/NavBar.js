import React, { Fragment } from 'react';

function NavBar() {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-primary">
                <h1 className="text-white">Employee Directory</h1>
                <form className="form-inline">
                    {/* Input to filter employees */}
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Enter Employee Name"
                     />
                </form>
            </nav>
        </Fragment>
    );
}

export default NavBar;