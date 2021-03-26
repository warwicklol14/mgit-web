import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Home} from "./pages/home/Home";
import {Header} from "./pages/home/sections/Header";
import {About} from "./pages/about/About";
import {Contact} from "./pages/contact/Contact";
import {Faculty} from "./pages/faculty/Faculty";

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="/faculty">
                <Faculty/>
            </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
