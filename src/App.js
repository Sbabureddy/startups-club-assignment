import React, { Component } from "react";

import ControlledFrom from "./components/ControlledFrom";
// import FormikLogin from './components/FormikLoginComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ControlledFrom />
        {/* <FormikLogin /> */}
      </div>
    );
  }
}

export default App;
