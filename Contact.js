import React from "react";

function Contact(props) {
  return (
    <div>
      <img src={props.url} alt="dog1" />
      <div style={{ textAlign: "left", paddingLeft: "20px", color: "purple" }}>
        <h2>Name: {props.name}</h2>
        <h3>Phone: {props.phone}</h3>
        <h3>Email: {props.email}</h3>
        <hr />
        <hr />
        <br />
      </div>
    </div>
  );
}

export default Contact;
