import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/tabBar';



import MyListEmpl from '../EmployeeScreens/listProgramsEmpl';

import ProgramListAcceptedEmpl from '../EmployeeScreens/programListAccepted';
import Loader from '../components/loader';
import CheckBoxApp from '../components/checkBox';
import Dashboard from '../components/downloadFile';
import LoginScreen from '../ResponsableScreens/loginExample';
import AgendaEv from '../components/calendar';
import EditProfileScreen from '../components/editProfil';
import ProfileScreen from '../components/profileScreen';


const Tab = createBottomTabNavigator();
const TabNavigatorEmpl = ({navigation}) => {
  return (

    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={MyListEmpl}
        options={{ tabBarBadge:3 }}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Agenda'
        //component={ThreeTabSelector}
        component={AgendaEv}
        initialParams={{ icon: 'plus' }}
        options={{headerShown: false}}  />
      <Tab.Screen
        name='Profile'
      component={ProfileScreen}
       //component={Loader}
     // component={EditProfileScreen}
        initialParams={{ icon: 'profile' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigatorEmpl;