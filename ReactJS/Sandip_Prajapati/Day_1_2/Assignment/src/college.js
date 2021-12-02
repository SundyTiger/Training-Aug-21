import React, { Component } from "react";

export default class College extends Component {
  render() {
    const { collegeName, Address, logo } = this.props.college;
    return (
      <>
          <li>
            <p>College Details</p>
          </li>
          <li>College: {collegeName}</li>
          <li>Address: {Address}</li>
          <li>Logo: {logo}</li>
        <br />
        <br />
      </>
    );
  }
}
