// import './css/styles.css';
import React from 'react';
import MainMenu from './project/MainMenu';
import InfoPage from './project/InfoPage';
import { Route, Switch } from "react-router-dom";

function App() {

  return (
      <div>
      <Switch>
          
          <Route path="/" exact component={MainMenu} />
          <Route path="/InfoPage/:id" component={InfoPage} />
          
        </Switch>  
      </div>
  );
}

export default App;