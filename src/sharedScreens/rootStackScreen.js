import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './splashScreen';
import Login from '../ResponsableScreens/login';
import SignUp from '../ResponsableScreens/signUp';
//import SignInScreen from './SignInScreen';
//import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={Login}/>
        <RootStack.Screen name="SignUpScreen" component={SignUp}/>
    </RootStack.Navigator>
);

export default RootStackScreen;