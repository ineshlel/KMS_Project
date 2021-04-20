import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/tabBar';

import ThreeTabSelector from '../ResponsableScreens/headerTabs';
import MyList from '../components/expandableList';
import SearchBarProgram from '../components/searchBarProgram';
//import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = ({navigation}) => {
  return (

    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={MyList}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Create'
        component={ThreeTabSelector}
        initialParams={{ icon: 'plus' }}
        options={{headerShown: false}}  />
      <Tab.Screen
        name='Profile'
        component={SearchBarProgram}
        initialParams={{ icon: 'profile' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigator;
