// import './css/styles.css';
import React, { useEffect, useState } from "react";
import MainMenu from "./project/MainMenu";
import InfoPage from "./project/InfoPage";
import { Route, Switch } from "react-router-dom";

function App() {
  const [changingDiaper, setChangingDiaper] = useState(false);
  const [parking, setParking] = useState(false);
  const [wc, setWc] = useState(false);
  const [fourH, setFourH] = useState(false);
  const [pramFriendly, setPramFriendly] = useState(false);
  const [elevatorRamp, setElevatorRamp] = useState(false);
  const [picnicCompatible, setPicnicCompatible] = useState(false);
  const [cafe, setCafe] = useState(false);
  const [fireplace, setFireplace] = useState(false);
  const [playground, setPlayground] = useState(false);
  const [microwave, setMicrowave] = useState(false);
  const [beach, setBeach] = useState(false);
  const [trails, setTrails] = useState(false);
  const [restaurant, setRestaurant] = useState(false);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <MainMenu
            changingDiaper={changingDiaper} setChangingDiaper={setChangingDiaper}
            parking={parking} setParking={setParking}
            wc={wc} setWc={setWc}
            fourH={fourH} setFourH={setFourH}
            pramFriendly={pramFriendly} setPramFriendly={setPramFriendly}
            elevatorRamp={elevatorRamp} setElevatorRamp={setElevatorRamp}
            picnicCompatible={picnicCompatible} setPicnicCompatible={setPicnicCompatible}
            cafe={cafe} setCafe={setCafe}
            fireplace={fireplace} setFireplace={setFireplace}
            playground={playground} setPlayground={setPlayground}
            microwave={microwave} setMicrowave={setMicrowave}
            beach={beach} setBeach={setBeach}
            trails={trails} setTrails={setTrails}
            restaurant={restaurant} setRestaurant={setRestaurant}
          />
        </Route>

        <Route path="/InfoPage/:id" component={InfoPage} />
      </Switch>
    </div>
  );
}

export default App;
