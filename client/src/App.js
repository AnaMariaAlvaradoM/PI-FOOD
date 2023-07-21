import './App.css';
import React from "react";
import { Home, Landing, Form, Detail } from './Views';
import NavBar from './Components/NavBar/NavBar';
import { Route, useLocation } from 'react-router-dom';
import SearchBar from './Components/SearchBar/SearchBar';
import './fonts.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path='/' component={Landing} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/recipes?name=" component={SearchBar} />
      <Route path='/form' component={Form} />
      <Route path='/home' component={Home} />
    </div>
  );
}

export default App;