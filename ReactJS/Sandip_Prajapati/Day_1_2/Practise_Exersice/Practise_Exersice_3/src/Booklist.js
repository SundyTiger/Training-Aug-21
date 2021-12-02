import React, { Component } from "react";
import Book from "./Book";
export default class Booklist extends Component {
  state = {
    books: [
      {
        id: 1,
        book: "One",
        author: "Sahil Khan",
      },
      {
        id: 2,
        book: "two",
        author: "Arnold Swalanzer",
      },
    ],
  };
  //   books = [
  //     {
  //       book: "One",
  //       author: "Sahil Khan",
  //     },
  //     {
  //       book: "two",
  //       author: "Arnold Swalanzer",
  //     },
  //   ];
  render() {
    // const books = this.state.books.map((item) => {
    //   return(<>
    //     <h3>Book :{item.book}</h3>
    //     <h3>Author :{item.author}</h3>
    //   </>);
    // });
    return (
      <section>
        <h3>This is Book List</h3>
        {/* {books} */}
        {/* <Book book={this.books[0]} />
        <Book book={this.books[1]} /> */}
        {this.state.books.map((item) => (
          <Book key={item.id} info={item}></Book>
        ))}
      </section>
    );
  }
}
