import React, { Component } from 'react'

 class Todo extends Component {
     constructor(){
         super();
         this.state={
             tasks:[],
             currTask:''
         }
     }
     handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            currTask:e.target.value
        })
    }

    handleSubmit = () => {
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:''
        })
    }

    handleDelete = (id) => {
        let narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id!==id
        })
        this.setState({
            tasks:[...narr]
        })
    }

    render() {
        return (
            <div>
                <div className="header">
            <input className="input-box" type="text" value={this.state.currTask} onChange={this.handleChange}/>
               <button className="sbtn" onClick={this.handleSubmit}>+</button>
              </div>
               <ul>
                    {
                        this.state.tasks.map((taskobj)=>(
                            <li key={taskobj.id}>
                                <p>{taskobj.task}
                               <button className="dbtn" onClick={() => this.handleDelete(taskobj.id)}> x </button>
                               </p>
                            </li>
                        )
                        
                        )
                        
                    }
                </ul>
        </div>     
        )
    }
}

export default Todo;