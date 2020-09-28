import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [newTaskInput, setNewTaskInput] = useState("");
  const [list, setList] = useState([
    { completed: false, id: 1, text: "Task1" },
    { completed: false, id: 2, text: "Task2" },
    { completed: false, id: 3, text: "Task3" },
  ]);

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Form
          newTaskInput={newTaskInput}
          setNewTaskInput={setNewTaskInput}
          list={list}
          setList={setList}
        ></Form>
        <List newTaskInput={newTaskInput} list={list} setList={setList}></List>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
