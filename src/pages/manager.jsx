import React from 'react'
import {Link} from 'react-router-dom'

class Manager extends React.Component{
  constructor(props){
    super(props)
    this.state={
      taskarray:[],
      taskitems:"",
      editValue:""
    }
  }

Enabletyping=(e)=>{
  e.preventDefault();
  const taskevent = this.state.taskarray
  taskevent.push({taskevent: this.state.taskitems})
  this.setState({taskarray:taskevent,taskitems:""})
}

getvalue=(e)=>{
  let inputname = e.target.name;
  let inputvalue = e.target.value;
  this.setState({[inputname]:inputvalue})
}
handleEditvalue=(e)=>{
  const {name, value}=e.target;
  this.setState({[name]:value})
}
onEdit=()=>{
  this.setState({editValue: this.props.taskitems})
}

  render(){
    const {taskarray, onEdit} =this.state
    return(
      <div className="form-div">
      <h1>Welcome to your Taskmanager</h1>
      <p>This is only accessible by you when login </p>

      <form className="" onSubmit={this.Enabletyping}>
       <input type="text"
       value={this.state.taskitems}
       name="taskitems"
       onChange={this.getvalue}
       className="" placeholder="please type" required/>
       <button>make a list</button>

      </form>

      {

        taskarray.map((val, key)=>{
          return(
          <ul key={key}>
            <li>{val.taskevent}
             <i className="fa fa-pencil edit"
               title="Edit"
               value={this.state.taskitems}
               name="taskitems"
              onChange={this.handleEditvalue}
              onClick={this.onEdit}
               />
             <i className="fa fa-trash delete"
               title="Delete"

             />



            </li>
            </ul>

          )
        })

      }
      <button className="btn btn-dark"><Link to="/logout">Logout</Link></button>

      </div>
    )
  }
}

export default Manager;
