import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import HomeScreen from '../../pages/HomeScreen';
import Football from '../svg/006-football.svg';
import Info from '../svg/045-info.svg';
import Time from '../svg/001-calendar.svg';

export default class BottomNavigationBar extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            paddingVertical: 10,
            backgroundColor: '#090909',
            position: 'absolute',
            height: 50,
          },
          tabBarLabelStyle: {
            fontSize: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => {
              return (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: '#090909',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                    marginBottom: 5,
                  }}>
                  <Football width={30} height={30} fill="#fff"></Football>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="login"
          component={HomeScreen}
          options={{
            tabBarIcon: () => {
              return (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: '#090909',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                    marginBottom: 5,
                  }}>
                  <Info width={30} height={30} fill="#fff"></Info>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Forgot Password"
          component={HomeScreen}
          options={{
            tabBarIcon: () => {
              return (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: '#090909',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                    marginBottom: 5,
                  }}>
                  <Time width={30} height={30} fill="#fff"></Time>
                </View>
              );
            },
          }}
        />

        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    );
  }
}
