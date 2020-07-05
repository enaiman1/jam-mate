import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LSbody from './LSindex';
import Lryics from "./Lyrics/Lyrics"
import {Provider} from './context'

import './App.css';

function App() {
  return (
    <Provider>
    <Router>
    <>
      <div className="container">
        <Switch>
          <Route exact path="/LSbody" component={LSbody}/>
          <Route exact path="/lyrics/track/:id" component={Lryics}/>
        </Switch>
      </div>
    </>
    </Router>
    </Provider>
  );
}

export default App;
