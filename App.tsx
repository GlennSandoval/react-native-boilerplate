import {TransitionSpec} from "@react-navigation/stack/lib/typescript/src/types";
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import About from './screens/About';

const Stack = createStackNavigator();

const config: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen

          name="Home"
          component={Home}
          options={{transitionSpec: {open: config, close: config}}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{transitionSpec: {open: config, close: config}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
