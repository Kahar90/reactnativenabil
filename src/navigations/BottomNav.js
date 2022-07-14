import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component, useState} from 'react';
import HomeScreen from '../../pages/HomeScreen';
import Football from '../svg/006-football.svg';
import Info from '../svg/045-info.svg';
import Time from '../svg/001-calendar.svg';
import Page2 from '../../pages/Page2';
import Page3 from '../../pages/Page3';
import HomeStackScreen from './HomeStackScreen';
import Page2StackScreen from './Page2StackScreen';
import Page3StackScreen from './Page3StackScreen';

function BottomNav(props) {
  const selected = '#FDEB25';
  const unselected = '#fff';
  const [selectedIndex, setselectedIndex] = useState(0);
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
        listeners={{tabPress: () => setselectedIndex(0)}}
        name="Home"
        component={HomeStackScreen}
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
                  {selectedIndex === 0 ? <View style={styles.bar}></View> : null}
                <Football
                  width={30}
                  height={30}
                  fill={selectedIndex === 0 ? selected : unselected}></Football>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        listeners={{tabPress: () => setselectedIndex(1)}}
        name="page2"
        component={Page2StackScreen}
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
                  {selectedIndex === 1 ? <View style={styles.bar}></View> : null}
                <Info
                  width={30}
                  height={30}
                  fill={selectedIndex === 1 ? selected : unselected}></Info>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        listeners={{tabPress: () => setselectedIndex(2)}}
        name="page3"
        component={Page3StackScreen}
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
                {selectedIndex === 2 ? <View style={styles.bar}></View> : null}
                <Time
                  width={30}
                  height={30}
                  fill={selectedIndex === 2 ? selected : unselected}></Time>
              </View>
            );
          },
        }}
      />

      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default BottomNav;

const styles = StyleSheet.create({
  selected: {
    width: 30,
    height: 30,
    backgroundColor: '#FDEB25',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  unselected: {
    width: 30,
    height: 30,
    backgroundColor: '#090909',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  bar: {
    // a small square on top of the icon

    position: 'absolute',
    marginTop: -12,
    top: 0,
    right: 0,
    width: 30,
    height: 5,
    backgroundColor: '#FDEB25',
    // borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// style={{
// width: 30,
// height: 30,
// backgroundColor: '#090909',
// borderRadius: 15,
// justifyContent: 'center',
// alignItems: 'center',
// marginTop: 5,
// marginBottom: 5,
// }}>
