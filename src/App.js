//React Import???
import React from 'react';
//Change variables?
//Could change ROute to something else
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

//change this format around
//CAN CREATE MORE PAGES/TABS*******

import Navbar from "./components/navbar.component"
import CalorieList from "./components/calorie-list.component";
import EditCalorie from "./components/edit-calorie.component";
import CreateCalorie from "./components/create-calorie-entry.component";
import CreateUser from "./components/create-user.component";
import CreateMacros from "./components/about-macros.component";
import CreateAuthor from "./components/about-Author.component";

//Component variables are changed!!
function App() {
  return (
    <Router>
      <div className = "container">
        <Navbar />
        <br/>
        <Route path="/" exact component={CalorieList} />
        <Route path="/edit/:id" component={EditCalorie} />
        <Route path="/create" component={CreateCalorie} />
        <Route path="/user" component={CreateUser} />
        <Route path="/about-macros" component={CreateMacros} />
        <Route path="/about" component={CreateAuthor} />
      </div>
    </Router>
  );
}

export default App;
