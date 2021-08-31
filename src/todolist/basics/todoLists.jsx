import React from "react";
import TodoListItem from "./todoListItem";
import AddItem from "./addItem";
import EditItem from "./editItem";

const TodoLists = ({ list,deleteItem,addItem,editItem,updateItem,title,setTitle,des,setDes,au,setAu ,di,setDi}) => {
  return (
    <>
        {au===1?<AddItem addItem= {addItem} title={title} setTitle={setTitle} des={des} setDes={setDes}/>:<EditItem updateItem={updateItem} title={title} setTitle={setTitle} des={des} setDes={setDes} setAu={setAu} setDi={setDi} />}
        <div className="container">
        <h3>Todo List :- </h3>
        {list.length===0?<div className="card w-75 m-2">
        <div className="card-body">Nothing in the List</div></div>:list.map((element) => {
          return (
              <TodoListItem listItem={element} deleteItem={deleteItem} editItem= {editItem} key={element.id} setAu={setAu} di={di} setDi={setDi}/>
          );
        })}
        </div>
    </>
  );
};

export const fun =()=>{
  console.log("fun");
}

export default TodoLists;
