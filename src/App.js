import "./App.css";

import React from "react";
import SeachBar from "./SeachBar";
import ImageList from "./ImageList";

function App() {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SeachBar />
      <ImageList />
    </div>
  );
}

export default App;
