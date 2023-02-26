import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { ProfilePage, HomePage } from "./Pages";
const App = () => {
  return (
    <Router>
    <div>
    <p>dasdsa</p>
    </div>
    <Route exact path="/"  component={HomePage}/>
    </Router>
  );
};

export default App;
