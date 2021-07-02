import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/tabBar';



import MyListEmpl from '../EmployeeScreens/listProgramsEmpl';

import AgendaEv from '../components/calendar';
import EditProfileScreen from '../components/editProfil';
import ProfileScreen from '../components/profileScreen';


const Tab = createBottomTabNavigator();
const TabNavigatorEmpl = ({navigation}) => {
  return (

    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Accueil'
        component={MyListEmpl}
        options={{ tabBarBadge:3 }}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Calendrier'
        //component={ThreeTabSelector}
        component={AgendaEv}
        initialParams={{ icon: 'calendar' }}
        options={{headerShown: false}}  />
      <Tab.Screen
        name='Profil'
      component={ProfileScreen}
       //component={Loader}
     // component={EditProfileScreen}
        initialParams={{ icon: 'profile' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigatorEmpl;