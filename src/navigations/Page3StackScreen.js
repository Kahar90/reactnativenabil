import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component, useState} from 'react';
import Page3 from '../screens/Page3';

function Page3StackScreen(props) {
    const HomeStack = createNativeStackNavigator();
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={Page3}
                options={{headerShown: false}}
            />
        </HomeStack.Navigator>
    );
}

export default Page3StackScreen;