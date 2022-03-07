import "./App.css";

import React from "react";
import SeachBar from "./SeachBar";
//import ImageList from "./ImageList";

class App extends React.Component {
  onSearchSubmit = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SeachBar onSubmit={this.onSearchSubmit} />
        {/* <ImageList /> */}
      </div>
    );
  }
}

export default App;
