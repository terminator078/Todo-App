import React, { useState, useEffect, useReducer } from "react";
import NavBar from "./basics/navBar";
import TodoLists from "./basics/todoLists";
import About from "./about";
import Footer from "./basics/footer";

import '@fontsource/roboto'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let listItems = [];

const TodoList = () => {
  if (localStorage.getItem("todoList-react-app"))
    listItems = JSON.parse(localStorage.getItem("todoList-react-app"));

  const [list, setList] = useState(listItems);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [au, setAu] = useState(1);
  const [di,setDi] = useState("");
  // const [id,setId] = useState(0);

  const reducer = (state, action) => {
    if (action.type === "edit") {
      state = action.value;
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, 0);

  useEffect(
    () => localStorage.setItem("todoList-react-app", JSON.stringify(list)),
    [list]
  );

  const deleteItem = (element) => {
    const updatedList = list.filter((item) => item.id !== element.id);
    setList(updatedList);
    // localStorage.setItem('todoList',JSON.stringify(updatedList))
  };

  const addItem = (title, des) => {
    let l;
    if (
      list.find((element) => element.title === title && element.des === des)
    ) {
      alert("already exists");
    } else {
      if (title && des) {
        l = list.length === 0 ? 1 : list[list.length - 1].id + 1;
        const obj = {
          id: l,
          title: title,
          des: des,
        };
        let uList = [...list, obj];
        setList(uList);
        //  localStorage.setItem('todoList',JSON.stringify(uList))
      } else {
        alert("title or description can not be void");
    }
  }
  };
  const editItem = (item) => {
    dispatch({ type: "edit", value: item.id });
    setTitle(item.title);
    setDes(item.des);
  };

  const updateItem = (title, des) => {
        // eslint-disable-next-line
        const uList = list.map((element) => {
        if (element.id !== state)return element; 
        else return { id: state, title: title, des: des };
      });
      setList(uList);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            < TodoLists
              list={list}
              deleteItem={deleteItem}
              addItem={addItem}
              editItem={editItem}
              updateItem={updateItem}
              title={title}
              setTitle={setTitle}
              des={des}
              setDes={setDes}
              au={au}
              setAu={setAu}
              di={di}
              setDi={setDi}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default TodoList;
