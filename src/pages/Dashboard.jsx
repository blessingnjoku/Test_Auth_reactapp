import React from 'react'
import {Link} from 'react-router-dom'


function  Dashboard(){
  const user =JSON.parse(localStorage.getItem('user'))

    return(
      <div className="container">
      <h1>Welcome to your Dashboard</h1>
      <p>This is only accessible by you when login  </p>
      <p>your email is: <b>{user.email}</b> </p>

      <button className="btn btn-dark"><Link to="/logout">Logout</Link></button>



      </div>
    )

}

export default Dashboard;
