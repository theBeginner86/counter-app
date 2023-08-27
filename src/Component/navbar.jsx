import React from 'react';


//Stateless Functional Component
const Navbar = ({totalCounters}) => {
    return ( 
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="index.html">
                  Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
              </a>
            </nav>
        </React.Fragment>
       );
}
 
export default Navbar;
