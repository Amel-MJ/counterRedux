import React, { Component } from 'react'



class Todolist extends Component {
    render() {
        const { tasks } = this.props
        return (
            <div className='container'>

               
                    <ul>
                        {tasks.map((el,i) => {
                            return <li>
                        <p style={{
                            color:"red"
                        }}>{el.task}</p>
                                <button onClick={()=>this.props.handleClickComplite(i)}>complite</button>
                                <button  onClick={()=>this.props.handleClickDelete(i)}>delete</button>

                            </li>
                        })}


                    </ul>

           
            </div>
        )
    }
}
export default Todolist