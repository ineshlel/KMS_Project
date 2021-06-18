import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/tabBar';

import MyListForma from '../FormateurScreens/listProgramsForma';



import timepicker from '../components/timepicker';
import TimePickerInput from '../components/timepicker';
import AddFixedButton from '../components/addFixedButton';



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
        component={timepicker}
        initialParams={{ icon: 'plus' }}
        options={{headerShown: false}}  />
      <Tab.Screen
        name='Profile'
       //component={ConsignesList}
       component={AddFixedButton}
      // component={timepicker}
        initialParams={{ icon: 'profile' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigatorForma;