import './App.css';
import React from "react";
import { Home, Landing, Form, Detail} from './Views';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path='/' component={Landing} />
      <Route path='/Detail' component={Detail}  />
      <Route path='/Form' component={Form} />
      <Route path='/home'render = {() => <Home />}  />

    </div>
  );
}

export default App;
