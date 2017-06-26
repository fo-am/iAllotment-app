import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import Splash from "./Splash";
import Main from "./Main";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="splash" component={Splash} initial={true} />
          <Scene key="main" component={Main} title="PageTwo" />
        </Scene>
      </Router>
    );
  }
}
