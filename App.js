import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginScreen from './pages/LoginScreen';
import ForgotPassword from './pages/ForgotPasswordScreen';
import HomePage from './pages/HomePage';

const App: () => Node = () => {
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

    // <SafeAreaView style={styles.container}>
    //   <LoginScreen></LoginScreen>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 32,
    // paddingHorizontal: 24,

    flex: 1,
    backgroundColor: '#0A0B0A',
  },
});

export default App;
