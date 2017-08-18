import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import Splash from "./Splash";
import Main from "./Main";
import SoilTexture from "./SoilTexture";
import CompostLab from "./CompostLab";
import CompostTroubleShoot from "./CompostTroubleShoot";
import LeftBin from "./LeftBin";
import AddMaterial from "./AddMaterial";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="splash" component={Splash} initial={true} />
          <Scene key="main" component={Main} title="Main Page" />
          <Scene
            key="soilTexture"
            component={SoilTexture}
            title="Soil Texture"
            hideNavBar={false}
          />
          <Scene
            key="compostLab"
            component={CompostLab}
            title="Compost Lab"
            hideNavBar={false}
          />
          <Scene
            key="compostTroubleShoot"
            component={CompostTroubleShoot}
            title="Compost trouble shooting"
            hideNavBar={false}
          />
          <Scene
            key="leftBin"
            component={LeftBin}
            title="Left bin"
            hideNavBar={false}
          />
          <Scene
            key="addMaterial"
            component={AddMaterial}
            title="Add material"
            hideNavBar={false}
          />
        </Scene>
      </Router>
    );
  }
}
