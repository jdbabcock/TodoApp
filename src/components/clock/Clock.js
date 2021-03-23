
import React, { Component } from "react";
import { Link } from "react-router-dom";


const ClockContainer = {
  minHeight: "100vh",
  display: "flex",
  width: "100%",
  justifyContent: "center",
    alignItems: "center",
  
  
};

const clockTick = {
    color: "white",
    fontSize: "40px",
    textAlign: "center",
    marginTop:"-10%"
    
};
const clockDate = {
  color: "white",
  fontSize: "120px",
  textAlign: "center",
  
};


const clockBackground = {
  justifyContent: "center",
  alignItems: "center",
  
  width: "900px",
  height: "900px",
  flexFlow: "column wrap",
  display: "flex",
};

const inspire = {
  color: "white",
  fontSize: "50px",
  textAlign: "center",
};
class CLock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return (
          <div style={ClockContainer}>
            <div style={clockBackground}>
              <h1 style={inspire}>
                “It always seems impossible until it’s done.” —Nelson Mandela
              </h1>
              <h2 style={clockDate}>
                {this.state.date.toDateString().substring(4, 11)}
              </h2>
              <h2 style={clockTick}>
                {" "}
                {this.state.date.toLocaleTimeString()}{" "}
              </h2>
              <Link to="/todos" className="dashLink">
                <button className="login"> Begin </button>
              </Link>
            </div>
          </div>
        );
}
}

export default CLock;