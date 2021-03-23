import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom"
import profile from "../src/images/profpic.png";
import Topbar from "./components/Topbar.js";
import Dashboard from "./Dashboard";
import TodoList from "./components/TodoList";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";



class App extends React.Component {
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

 
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
              <LoginPage />
          </Route>
          <Route path="/SignUp">
            <RegisterPage />
          </Route>

          <Route>
            <Topbar user={this.state.newUser} />
            <Switch>
              <Route exact path="/Dashboard">
                <Dashboard />
              </Route>
              <Route path="/todos">
                <TodoList></TodoList>
              </Route>
            </Switch>
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
