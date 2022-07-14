import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import HomePage from '../screens/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function MainNav(props) {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default MainNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B0A',
  },
});
