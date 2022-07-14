import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component, useState} from 'react';
import HomeScreen from '../../pages/HomeScreen';

function HomeStackScreen(props) {
    const HomeStack = createNativeStackNavigator();
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
            />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;