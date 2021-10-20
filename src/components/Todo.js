import React, { Component } from 'react'

 class Todo extends Component {
     constructor(){
         super();
         this.state={
             tasks:[{task:'read', id:1},{task:'write', id:2},{task:'play', id:3}],
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
            return taskObj.id!=id
        })
        this.setState({
            tasks:[...narr]
        })
    }

    render() {
        return (
            <div>
            <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
               <button onClick={this.handleSubmit}>Submit</button>
            
               <ul>
                    {
                        this.state.tasks.map((taskobj)=>(
                            <li key={taskobj.id}>
                                <p>{taskobj.task}</p>
                               <button onClick={() => this.handleDelete(taskobj.id)}>Delete</button>
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