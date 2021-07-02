import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/tabBar';

import ThreeTabSelector from '../ResponsableScreens/headerTabs';


import ProgramList from '../ResponsableScreens/programList';
import CheckBoxApp from '../components/checkBox';
import Dashboard from '../components/downloadFile';
import ListCause from '../components/swipeListe';
import InfoForm from '../ResponsableScreens/InfoForm';
import { COLORS } from '../constants';


//import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const myOptions={
  title:'Nouveau programme',
  headerTintColor:'#fff',
  headerStyle:{
  backgroundColor:COLORS.purple
  }
}
const TabNavigator = ({navigation}) => {
  return (

    <Tab.Navigator 
   
    tabBar={props => <TabBar {...props} />}>
   
      <Tab.Screen
        name='Accueil'
        component={ProgramList}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
  
        name='Create'
        component={InfoForm}
        //component={HeaderTabsForma}
        initialParams={{ icon: 'plus' }}
        options={myOptions}  />
      <Tab.Screen
        name='Profil'
      component={ListCause}
       //component={Dashboard}
      //component={MemberListAccResp}
        initialParams={{ icon: 'profile' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigator;
