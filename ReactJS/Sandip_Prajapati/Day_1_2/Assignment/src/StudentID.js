import React, { Component } from "react";
import Personal from "./personal";
import ImageInfo from "./image";
import College from "./college";
const personal = [
  {
    ID: 1,
    FirstName: "Sandip ",
    LastName: "Prajapati",
    DOB: "12-14-1999",
  },
  {
    ID: 2,
    FirstName: "Mandip ",
    LastName: "Prajapati",
    DOB: "12-4-1999",
  },
  {
    ID: 3,
    FirstName: "Randip ",
    LastName: "Prajapati",
    DOB: "2-14-1999",
  },
];
const imgs = [
  {
    id: 1,
    src: "https://static8.depositphotos.com/1008303/880/i/950/depositphotos_8803246-stock-photo-asian-college-student.jpg",
    alt: "It is Student Image ",
  },
  {
    id: 2,
    src: "https://static8.depositphotos.com/1008303/880/i/950/depositphotos_8803246-stock-photo-asian-college-student.jpg",
    alt: "It is Student Image ",
  },
  {
    id: 3,
    src: "https://static8.depositphotos.com/1008303/880/i/950/depositphotos_8803246-stock-photo-asian-college-student.jpg",
    alt: "It is Student Image ",
  },
];
const college = [
  {
    id: 1,
    collegeName: "GEC Modasa",
    Address: "Modasa ,Gujarat",
    logo: "./component/Image/1.jpg",
  },
  {
    id: 2,
    collegeName: "GEC Gandhinagar",
    Address: "Gandhinagar ,Gujarat",
    logo: "./component/Image/1.jpg",
  },
  {
    id: 3,
    collegeName: "GEC Morbi",
    Address: "Morbi ,Gujarat",
    logo: "./component/Image/1.jpg",
  },
];
export default class StudentID extends Component {
  render() {
    console.log(this.props.details);
    return (
      <>
        {this.props.details()}
        <ul>
          <ImageInfo key={imgs[0].id} img={imgs[0]} />
          <Personal key={personal[0].ID} personal={personal[0]} />
          <College key={college[0].id} college={college[0]} />
        </ul>
        <ul>
          <ImageInfo key={imgs[1].id} img={imgs[1]} />
          <Personal key={personal[1].ID} personal={personal[1]} />
          <College key={college[1].id} college={college[1]} />
        </ul>
        <ul>
          <ImageInfo key={imgs[2].id} img={imgs[2]} />
          <Personal key={personal[2].ID} personal={personal[2]} />
          <College key={college[2].id} college={college[2]} />
        </ul>
      </>
    );
  }
}
