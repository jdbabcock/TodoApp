import React from "react";


function TopBar(props) {

  const headerMain = {
    width: "100%",
    height: "150px",
    backgroundColor: "  hsla(0, 0%, 0%, 0.384)",
    marginTop: "0",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    webkitBoxShadow: "0px 8px 15px 0px rgba(0, 0, 0, 0.59)",
    boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.59)",
  };

 const headerH1 = {
  color: "rgb(231, 229, 229)",
  marginLeft: "5%",
  width: "40%",
  fontSize: "3em",
  fontStyle: "italic",
  display: "flex",
}
 const headerH2 = {
    color:  "rgb(231, 229, 229)",
    marginLeft: "auto",
    marginRight: "1%",
}
 const profile = {
  display: "flex",
  marginRight: "2%",
  width: "100px",
 }




    return (
      <header style={headerMain}>
        <h1 style={headerH1} >Task List Web</h1>
        <h2 style = {headerH2}>Welcome, {props.user.firstName} </h2>
        <img style={profile} src={props.user.avatarUrl} alt="profile"></img>
      </header>
    );
}

export default TopBar;