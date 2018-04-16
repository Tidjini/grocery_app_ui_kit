import React from "react";

import { Scene, Stack, Actions, Router } from "react-native-router-flux";

import Splash from "./components/scenes/splash";
import Wellcome from "./components/scenes/wellcome";
import ProductList from "./components/scenes/productList";

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Stack key="splash_scene" hideNavBar>
          <Scene key="splash" component={Splash} hideNavBar />
        </Stack>
        <Stack key="wellcome" hideNavBar>
          <Scene key="wellcome" component={Wellcome} hideNavBar />
        </Stack>
        <Stack key="main" hideNavBar>
          <Scene key="productList" component={ProductList} hideNavBar />
        </Stack>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
