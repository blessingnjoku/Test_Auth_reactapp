import React from 'react'
import {Link} from 'react-router-dom'


function Navbar (){
 const user=JSON.parse(localStorage.getItem('user'))
    return(

        <div className="navbar">
          <div className="container">
          AUTH APP
            <ul className="menu">
               <li>< Link to="/">Home</Link></li>
             <li><Link to="dashboard">Dashboard</Link></li>
              {
                user?
                <>
                    <li><Link to="/manager">TaskManager</Link></li>
                </>:
                <>
                  <li><Link to="login">Login</Link></li>
                </>
              }
            </ul>
          </div>
        </div>
    )

}

export default Navbar;
