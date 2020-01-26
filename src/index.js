import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "./certificate.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes/index";
var hist = createBrowserHistory();


ReactDOM.render(
      <Router history={hist}>
      <Suspense fallback={
      <div className='loaderimageContainer'>
        <img className="loaderimage" style={{ width:'100%', height:'700px' }} src="https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif" alt="loader">
        </img>
      </div>}> 
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route exact path={prop.path} key={key} component={prop.component} />;
            })}
          </Switch>
        </Suspense>
      </Router>,
  document.getElementById("root")
);
