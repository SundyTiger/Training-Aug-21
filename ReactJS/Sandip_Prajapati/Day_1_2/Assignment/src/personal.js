import React, { Component } from "react";

export default class Personal extends Component {
  render() {
    const { ID, FirstName, LastName, DOB } = this.props.personal;
    return (
      <>
          <li>
            <h5>Student Details</h5>
          </li>
          <li>ID:{ID} </li>
          <li>FirstName: {FirstName}</li>
          <li>LastName: {LastName}</li>
          <li>DOB: {DOB}</li>
      </>
    );
  }
}

export { Personal };
