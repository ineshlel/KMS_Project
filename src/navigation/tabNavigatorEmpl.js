import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/tabBar';



import MyListEmpl from '../EmployeeScreens/listProgramsEmpl';

import ProgramListAcceptedEmpl from '../EmployeeScreens/programListAccepted';
import Loader from '../components/loader';
import CheckBoxApp from '../components/checkBox';
import Dashboard from '../components/downloadFile';
import LoginScreen from '../ResponsableScreens/loginExample';


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
        name='Create'
        //component={ThreeTabSelector}
        component={ProgramListAcceptedEmpl}
        initialParams={{ icon: 'plus' }}
        options={{headerShown: false}}  />
      <Tab.Screen
        name='Profile'
       //component={ConsignesList}
       //component={Loader}
      component={LoginScreen}
        initialParams={{ icon: 'profile' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigatorEmpl;