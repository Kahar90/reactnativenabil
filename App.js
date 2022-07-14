// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import type {Node} from 'react';
import MainNav from './src/navigations/MainNav';

const App: () => Node = () => {
  // const Stack = createNativeStackNavigator();

  return <MainNav></MainNav>;
};

export default App;
