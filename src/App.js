import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "./pages/LyricSearch/context";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import SBindex from "./pages/SpotifyBuilder/SBindex";
import LSindex from "./pages/LyricSearch/LSindex";
import Lyrics from "./pages/LyricSearch/Lyrics/Lyrics";
import MusicNews from "./pages/MusicNews/MusicNew";
import NoMatch from "./pages/NoMatch";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider>
<Router>
   <Navbar />
   <Switch>
<Route exact path="/" component={Landing} />
<Route exact path="/SBindex" component={SBindex} />
<Route exact path="/LSindex" component={LSindex} />
<Route exact path="/lyrics/track/:id" component={Lyrics} />
<Route exact path="/MusicNews" component={MusicNews} />
<Route component={NoMatch} />

   </Switch>
</Router>

      </Provider>
     
   <Landing />
    </div>
  );
}

export default App;
