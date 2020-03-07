import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Easing} from 'react-native';

import Home from './screens/Home';
import About from './screens/About';

const Stack = createStackNavigator();

const config: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.inOut(Easing.ease),
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
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
