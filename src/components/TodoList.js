import React from "react";
import "../App.css";
import Todo from "./Todo.js";
import { Link } from "react-router-dom";
import menu from "../images/menu.png";
import calendar from "../images/calendar.png";
import settings from "../images/cog.png";
import profile from "../images/profpic.png";
import styled from "styled-components";
const TODO_LIST_KEY = "todoapp_List";

class TodoList extends React.Component {
  state = {
    todoList: [
      {
        id: 1,
        title: "pickup groceries",
        description: "pickup due 1pm",
        completed: false,
      },
      {
        id: 2,
        title: "go to post office",
        description: "send package",
        completed: false,
      },
      {
        id: 3,
        title: "finish projects",
        description: "write javascript",
        completed: false,
      },
      {
        id: 4,
        title: "go to gym",
        description: "chest day",
        completed: false,
      },
    ],
    newUser: {
      firstName: "jake",
      avatarUrl: profile,
    },
      newTaskName: "",
     
  
  };

  

  componentDidMount() {
    let todoListString = localStorage.getItem(TODO_LIST_KEY);
    if (todoListString) {
      this.setState({
        todoList: JSON.parse(todoListString),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.todoList !== prevState.todoList) {
      let todoListStr = JSON.stringify(this.state.todoList);
      localStorage.setItem(TODO_LIST_KEY, todoListStr);
    }
  }

  onAddNewTask = () => {
    console.log("test");
    let newTask = {
      id: 5,
      title: this.state.newTaskName,
      description: "blah blah",
      completed: false,
    };
    this.setState((state) => {
      return {
        todoList: [...state.todoList, newTask],
        newTaskName: "",
      };
    });
  };

  handleChangeTask = (event) => {
    this.setState({ newTaskName: event.target.value });
  };
  onCheck = (id) => {
    this.setState((state) => {
      let newTodos = state.todoList.map((toDo) => {
        if (toDo.id === id) {
          return {
            ...toDo,
            completed: !toDo.completed,
          };
        } else {
          return toDo;
        }
      });
      return { todoList: newTodos };
    });
  };

  handleRemoveTask = (id) => {
    this.setState((state) => {
      const newList = state.todoList.filter((toDo) => {
        if (toDo.id === id) {
          return false;
        } else {
          return true;
        }
      });
      return { todoList: newList };
    });
  };

  render() {
    return (
      <section>
        <Sidebar>
          <Link to="/" className="loginLink">
            <SidebarImg src={menu} alt="menu"></SidebarImg>
          </Link>
          <Link to="/Dashboard" className="link">
            <Calendar src={calendar} alt="calendar"></Calendar>
          </Link>
                <Settings src={settings} alt="settings"></Settings>
        </Sidebar>
        <ListContainer>
          <Filters>
            <FiltersButton1 type="button">View All</FiltersButton1>
            <FiltersButton2 type="button">Ongoing</FiltersButton2>
            <FiltersButton3 type="button">Completed</FiltersButton3>
          </Filters>
          {this.state.todoList.map((toDo) => (
            <Todo
              todo={toDo}
              onCheckbox={this.onCheck}
              onDelete={this.handleRemoveTask}
            />
          ))}

          <Form>
            <input
              type="text"
              placeholder="Task Item.."
              onChange={this.handleChangeTask}
              value={this.state.newTaskName}
            ></input>
            <input
              onClick={this.onAddNewTask}
              type="submit"
              value="Add"
            ></input>
          </Form>
          <DeleteList>Delete list</DeleteList>
        </ListContainer>
      </section>
    );
  }
}

const Sidebar = styled.div`
    width: 110px;
    height: 1200px;
    background-color: hsla(0, 0%, 0%, 0.384);
    margin: 0%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    -webkit-box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.59);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.59);
`;

const Calendar = styled.img`
  margin-top: 200%;
  width: 100%;
  &:hover {
    transform: scale(1.3);
  }
`;
const SidebarImg = styled.img`
  width: 40px;
  height: 40px;
  
  display: flex;
  &:hover {
    transform: scale(1.3);
  }
`;
const Settings = styled.img`
  margin-top: auto;
  margin-bottom: 10%;
  width: 50%;
  &:hover {
    transform: scale(1.3);
  }
`;

const ListContainer = styled.div`
  width: 60%;
  height: 80vh;
  background-color: hsla(0, 0%, 100%, 0.144);
  display: flex;
  align-self: center;
  margin-left: 15%;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  -webkit-box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.59);
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.59);
`;

const Form = styled.div`
  width: 90%;
  height: 25%;
  display: flex;
  margin-top: 20%;
`;

const FiltersButton1 = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: -5%;
  &:hover {
    color: #2dffff;
    cursor: pointer;
    text-decoration: underline;
  }
`;
const FiltersButton2 = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: -5%;
  &:hover {
    color: #2dffff;
    cursor: pointer;
    text-decoration: underline;
  }
`;
const FiltersButton3 = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: -5%;
   &:hover {
      color: #2dffff;
      cursor: pointer;
      text-decoration: underline;
    }
`;
const Filters = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly; 
`;

const DeleteList = styled.button`
  background: none;
  border: none;
  color: #df4646;
  font-size: 20px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  align-self: flex-end;
  margin-right: 2%;
  margin-bottom: 1%;
  &:hover {
    color: #ff0000;
    cursor: pointer;
  }
`;


export default TodoList