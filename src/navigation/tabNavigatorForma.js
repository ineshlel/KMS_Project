import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/tabBar';

import MyListForma from '../FormateurScreens/listProgramsForma';



import timepicker from '../components/timepicker';
import TimePickerInput from '../components/timepicker';
import AddFixedButton from '../components/addFixedButton';
import ProfileFormaScreen from '../FormateurScreens/profileForma';
import FilecvPicker from '../components/pickerCV';



//import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigatorForma = ({navigation}) => {
  return (

    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Accueil'
        component={MyListForma}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Calendrier'
        //component={ThreeTabSelector}
        component={timepicker}
        initialParams={{ icon: 'calendar' }}
        options={{headerShown: false}}  />
      <Tab.Screen
        name='Profil'
       //component={FilecvPicker}
      component={ProfileFormaScreen}
      // component={timepicker}
        initialParams={{ icon: 'profile' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigatorForma;