import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SuperHeroCard from './components/SuperHeroCard/SuperHeroCard';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/view/:id" exact component={SuperHeroCard}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
