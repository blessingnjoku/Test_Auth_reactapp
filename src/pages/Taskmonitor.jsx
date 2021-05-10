import React from 'react'

class Taskmonitor extends React.Component{
  constructor(props){
    super(props)
    this.state={
      obj:[],
      items:""
    }
  }

Enabletyping =(e)=>{
  e.preventdefault();
  const task = this.state.obj
task.push({task:this.state.items})
  this.setState({obj:task, items:""})

}

Displayword =(e)=>{
let inputnam = e.target.name;
let inputval = e.target.value;
this.setState({[inputnam]:inputval})
}

  render(){
    const {obj}=this.state
  return(
      <div className="containerd">
       <h1>Task manager</h1>
       <form onSubmit={this.Enabletyping}>
       <input type="text"
       value={this.state.items}
       name="items"
       onChange={this.Displayword}
       className="" required/>
       <input type="submit"/>
       </form>
       {
         obj.map((val, key)=>{
           return(
             <ul key={key}>
                <li>{val.task}
                <div className="listRow">
                 <i className="fa fa-save edit"
                   title="Save"/>
                 <i className="fa fa-times delete"
                   title="Cancel"

                 />
                 </div>
                 </li>

            </ul>
           )

         })
       }

      </div>
    );
  }
}

export default Taskmonitor;
