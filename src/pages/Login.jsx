import {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'


function Login (){
  const [state, setState]= useState({email:"", password:""})
 const [loggedin, setLoggedin]= useState(false)
  const handleform=(e)=>{
    const {name, value}= e.target
    setState(prevState=>({...prevState, [name]:value}))
  }

  useEffect(()=>{
    const user =JSON.parse(localStorage.getItem('user'))
    if(user){
      setLoggedin(true)
    }
  })

const Formsubmit =(e)=>{
  e.preventDefault();
  if(state.email!='' && state.password!=''){
  // submit form
  localStorage.setItem('user', JSON.stringify(state))
  setLoggedin(true)
}else {
alert("email and password required")
}
}
    return(
      loggedin ?<Redirect to="/manager"/>:
      <div>
        <div className="form-div">
             <h3>Login</h3>
            <form onSubmit={Formsubmit}>
              <div className="form-group mb-3">
                <label>Email</label>
                <p className="text-danger d-none">your email is required</p>
                <input type="email"  name="email" value={state.email} onChange={handleform} placeholder="enter your email" className="form-control"/>
              </div>

              <div className="form-group mb-3">
                <label>Password</label>
                  <p className="text-danger d-none">your password is required</p>
                <input type="password" name="password" value={state.value} onChange={handleform}placeholder="enter your password" className="form-control"/>
              </div>
                 <input type="submit" className="btn btn-dark"/>
            </form>
        </div>
      </div>

    )

}

export default Login;
