import {
  StackHeaderProps,
  TransitionSpec,
} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Easing} from 'react-native';

import {Header, Body, Left, Button, Icon, Right, Title} from 'native-base';

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

const AppHeader = (props: StackHeaderProps) => {
  const {scene, previous, navigation} = props;
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Header>
      <Left>
        {!!previous && (
          <Button transparent onPress={navigation.goBack}>
            <Icon name="arrow-back" />
          </Button>
        )}
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Right>
    </Header>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: AppHeader}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            transitionSpec: {open: config, close: config},
            header: AppHeader,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
