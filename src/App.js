// import './css/styles.css';
import React, { useEffect, useState } from "react";
import MainMenu from "./project/MainMenu";
import InfoPage from "./project/InfoPage";
import { Route, Switch } from "react-router-dom";

function App() {
  const [changingDiaper, setChangingDiaper] = useState(false);
  const [parking, setParking] = useState(false);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <MainMenu
            changingDiaper={changingDiaper}
            setChangingDiaper={setChangingDiaper}
            parking={parking}
            setParking={setParking}
          />
        </Route>

        <Route path="/InfoPage/:id" component={InfoPage} />
      </Switch>
    </div>
  );
}

export default App;
