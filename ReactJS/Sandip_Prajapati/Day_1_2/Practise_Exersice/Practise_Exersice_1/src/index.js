/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactDOM from "react-dom";

// function Greeting() {
//   return (
//     <div>
//       <h1>I am Green Hood</h1>
//       <ul>
//         <li>
//           <a href="#">Hello World</a>
//         </li>
//       </ul>
//     </div>
//   );
// }
// function Greeting() {
//   return (
//     <React.Fragment>
//       <h1>I am Green Hood</h1>
//       <ul>
//         <li>
//           <a href="#">Hello World</a>
//         </li>
//       </ul>
//     </React.Fragment>
//   );
// }
function Greeting() {
  return (
    <>
      <h1>I am Green Hood</h1>
      <ul>
        <li>
          <a href="#">Hello World</a>
        </li>
      </ul>
    </>
  );
}

// function Greeting(){
//   return React.createElement('div',{},'Hello World')
// }
ReactDOM.render(<Greeting />, document.getElementById("root"));
