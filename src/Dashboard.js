import React from "react";
import "./Dashboard.css";
import Clock from "./components/clock/Clock";



class Dashboard extends React.Component {
    render() {
        return (
            <div>
                
            <Clock />
          </div>
        );
    }
}

export default Dashboard;