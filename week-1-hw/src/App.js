import React from "react";
import Start from "./Start";
import "./style.css";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "우지음"
      };
   }

   // view를 담당하는게 render함수안에 들어간다
   render() {
      console.log(this.state);
      return (
         <div className="App">
            <Start name={this.state.name} />
         </div>
      );
   }
}
export default App;
