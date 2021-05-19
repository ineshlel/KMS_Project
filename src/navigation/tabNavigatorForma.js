import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/tabBar';

import MyListForma from '../FormateurScreens/listProgramsForma';

import HeaderTabsForma from '../FormateurScreens/headerTabsForma';


import CheckBoxApp from '../components/checkBox';


//import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigatorForma = ({navigation}) => {
  return (

    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={MyListForma}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Create'
        //component={ThreeTabSelector}
        component={HeaderTabsForma}
        initialParams={{ icon: 'plus' }}
        options={{headerShown: false}}  />
      <Tab.Screen
        name='Profile'
       //component={ConsignesList}
       //component={TwoHeaderTabWork}
       component={CheckBoxApp}
        initialParams={{ icon: 'profile' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigatorForma;