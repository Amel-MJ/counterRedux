  
import React from 'react';
import {connect} from "react-redux"
import './App.css';
import Todolist from './component/todolist'
import Add from './component/add'
function App(props) {

const handleClickComplite=(id)=>{
  props.complite(id)
}
const handleClickDelete=(id)=>{
props.delete(id)
}
  return (
    <div className="App">
    <Add/>
    <Todolist handleClickDelete={handleClickDelete} handleClickComplite={handleClickComplite} tasks={props.tasks}/>
    </div>
  );
}
const mapState=(state)=>{
  return {tasks:state}
}
const mapDispatch=(dispatch)=>{
  return {
    delete:(id)=>dispatch({type:"DELETE",payload:id}),
    complite:(id)=>dispatch({type:"COMPLITE",payload:id}),
  }
}
export default connect(mapState,mapDispatch)(App);