import React from 'react';
import MainMenu from './project/MainMenu';
import InfoPage from './project/InfoPage';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";


function App() {

  return (
    <Router>

      <div>
      <Switch>
          
        </Switch>
        <p>testar routing</p>
        <nav>
            <ul>
                <li>
                    <Link to= "/InfoPage">InfoPage</Link>
                </li>
                <li>
                    <Link to= "/">MainMenu</Link>
                </li>
            </ul>
        </nav>
        <Route path="/" exact component={MainMenu} />
        <Route path="/InfoPage" component={InfoPage} />
        
      </div>

    </Router>
  );
}

export default App;