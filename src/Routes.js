import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import home from './screens/home/index';
import Entry from './screens/entry/index';


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name='home' component={home} />
                <AppStack.Screen name='Entry' component={Entry} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}