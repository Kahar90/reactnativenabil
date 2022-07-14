import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component, useState} from 'react';
import Page2 from '../screens/Page2';

function Page2StackScreen(props) {
    const HomeStack = createNativeStackNavigator();
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={Page2}
                options={{headerShown: false}}
            />
        </HomeStack.Navigator>
    );
}

export default Page2StackScreen;