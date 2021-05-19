import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../sharedScreens/splashScreen';
import Login from '../ResponsableScreens/login';
import SignUp from '../ResponsableScreens/signUp';
import TabNavigatorEmpl from '../navigation/tabNavigatorEmpl';
import { COLORS } from '../constants';
import InfoFormEmpl from '../EmployeeScreens/InfoFormEmpl';
import TwoHeaderTabEmployee from '../EmployeeScreens/twoHeaderTabEmployee';
import HeaderTabEmpl from '../EmployeeScreens/headersTabEmpl';
import ListOfWorksEmpl from '../EmployeeScreens/listOfWorksEmpl';
import TwoHeaderTabWork from '../EmployeeScreens/twoHeaderTabWork';
import Playquiz from '../MyQuiz/playQuiz';
import CoursesScreenEmpl from '../EmployeeScreens/coursesScreenEmpl';
import HeaderTabCourseEmpl from '../EmployeeScreens/headerTabCourseEmpl';
//import SignInScreen from './SignInScreen';
//import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();
const myOptions={
    title:'Travaux',
    headerTintColor:'#fff',
    headerStyle:{
    backgroundColor:COLORS.purple
    }
  }

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator >
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="SignUp" component={SignUp}/>
        <RootStack.Screen name="TabNavigatorEmpl" component={TabNavigatorEmpl}  options={{headerShown: false}} />
        <RootStack.Screen name="InfoFormEmpl" options={{...myOptions,title:'Programme'} }  component={InfoFormEmpl} />
        <RootStack.Screen name="TwoHeaderTabEmployee" options={{...myOptions,title:'Inscription'} }   component={TwoHeaderTabEmployee} />
        <RootStack.Screen name="HeaderTabEmpl" options={{...myOptions,title:'Programme'} }  component={HeaderTabEmpl} />
        <RootStack.Screen name="ListOfWorksEmpl"   component={ListOfWorksEmpl}options={myOptions}/>
        <RootStack.Screen name="TwoHeaderTabWork" options={{...myOptions,title:'Traveaux'} }   component={TwoHeaderTabWork} />
        <RootStack.Screen name="PLayQuiz" options={{...myOptions,title:'QCM'} }  component={Playquiz} />
        <RootStack.Screen name="CoursesScreenEmpl" options={({ route }) => ({ title: route.params , headerTintColor:'#fff',
       headerStyle:{
       backgroundColor:COLORS.purple
       }})} component={CoursesScreenEmpl}/>
        <RootStack.Screen name="HeaderTabCourseEmpl" options={{...myOptions,title:'Cours'} }  component={HeaderTabCourseEmpl} />
    </RootStack.Navigator>
);

export default RootStackScreen;