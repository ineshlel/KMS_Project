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

const EmplStack = createStackNavigator();
const myOptions={
    title:'Travaux',
    headerTintColor:'#fff',
    headerStyle:{
    backgroundColor:COLORS.purple
    }
  }

const EmplStackScreen = ({navigation}) => (
    <EmplStack.Navigator >
        <EmplStack.Screen name="TabNavigatorEmpl" component={TabNavigatorEmpl}  options={{headerShown: false}} />
        <EmplStack.Screen name="InfoFormEmpl" options={{...myOptions,title:'Programme'} }  component={InfoFormEmpl} />
        <EmplStack.Screen name="TwoHeaderTabEmployee" options={{...myOptions,title:'Inscription'} }   component={TwoHeaderTabEmployee} />
        <EmplStack.Screen name="HeaderTabEmpl" options={{...myOptions,title:'Programme'} }  component={HeaderTabEmpl} />
        <EmplStack.Screen name="ListOfWorksEmpl"   component={ListOfWorksEmpl}options={myOptions}/>
        <EmplStack.Screen name="TwoHeaderTabWork" options={{...myOptions,title:'Traveaux'} }   component={TwoHeaderTabWork} />
        <EmplStack.Screen name="PLayQuiz" options={{...myOptions,title:'QCM'} }  component={Playquiz} />
        <EmplStack.Screen name="CoursesScreenEmpl" options={({ route }) => ({ title: route.params , headerTintColor:'#fff',
       headerStyle:{
       backgroundColor:COLORS.purple
       }})} component={CoursesScreenEmpl}/>
        <EmplStack.Screen name="HeaderTabCourseEmpl" options={{...myOptions,title:'Cours'} }  component={HeaderTabCourseEmpl} />
    </EmplStack.Navigator>
);

export default EmplStackScreen;