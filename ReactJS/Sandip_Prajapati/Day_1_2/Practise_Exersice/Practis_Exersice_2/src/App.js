import React,{Component} from "react";
import { age, name, person } from "./data";
import Banner from "./component/Header/Banner/Banner";
// const App = () => (
  // <section>
  //   <Banner />
  //   <p>This is Default</p>
  //   <p>{name}</p>
  //   <p>{age}-</p>
  //   <p>{person.age}</p>
  // </section>
// );
class App extends Component{
  render(){
    return(
      <section>
      <Banner />
      <p>This is Default</p>
      <p>{name}</p>
      <p>{age}</p>
      <p>{person.age}</p>
    </section>
    )
  }
}

export default App;
