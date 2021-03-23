import React from "react";
import "../App.css"
import remove from "../images/remove.png";
import styled from "styled-components"




function Todo(props) {
  let completed= props.todo.completed
  
  const ToDoCard = styled.div`
    width: 90%;
    height: 20%;
    background-color: ${(props) =>
      props.completed ? "hsla(99, 83%, 48%, 0.8)" : "hsla(0, 0%, 100%, 0.244)"};
    margin-top: 5%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    border-radius: 12px;
    -webkit-box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.59);
    boxshadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.59);
  `;

 const deleteItem = {
  width: "20px",
  height: "20px",
  marginLeft: "auto",
  marginRight: "3%",
  background: "none",
  border: "none",
};
const x = {
  width: "20px",
  height: "20px",
  marginLeft: "auto",
  marginRight: "3%",
};

const ToDoH2_checked = {
  textDecoration: "line-through",
  opacity: "0.5",
  color: "white",
  marginLeft: "5%",
  fontFamily: "Segoe UI",
  fontSize: "24px",
  fontWeight: "bold",
};
const ToDoH2 = {
  color: "white",
  marginLeft: "5%",
  fontFamily: "Segoe UI",
  fontSize: "24px",
  fontWeight: "bold",
  textDecoration: "none",
  opacity: "1"

};

  const handleCheck = () =>
    props.onCheckbox(props.todo.id);
  
  const onDeleteTask = () =>
    props.onDelete(props.todo.id);
  
    return (
      <ToDoCard completed={completed}>
        <input
          className="ToDoCardInput"
          type="checkbox"
          id="taskchecks"
          defaultChecked={completed}
          onChange={handleCheck}
        ></input>
        <label for="taskchecks" style={completed ? ToDoH2_checked : ToDoH2}>{props.todo.title}</label>
        <button style={deleteItem} onClick={onDeleteTask}>
          <img style={x} src={remove} alt="remove"></img>
        </button>
      </ToDoCard>
    );
}



export default Todo;