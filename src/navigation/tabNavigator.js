import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/tabBar';
import FlatListPC from '../components/flatListPC';
import HeaderTabs from '../screens/tabBarView';
import Profile from '../components/profile';
import Login from '../screens/login';
import ListCause from '../screens/swipeItem';
import App from '../components/checkBox';
import ThreeTabSelector from '../screens/headerTabs';
import RegistrationResponsable from '../screens/registrationScree';
import AddWork from '../components/addWork';
import listOfWorks from '../components/listOfWorks';
import TabHeader from '../components/tabHeader';
import TwoHeaderTab from '../screens/TwoHeaderTab';
import ListOfWorks from '../components/listOfWorks';
import ThreeTabRegistration from '../components/threeTabsRegistration';
//import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = ({navigation}) => {
  return (

    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={RegistrationResponsable}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Create'
        component={ThreeTabSelector}
        initialParams={{ icon: 'plus' }}
        options={{headerShown: false}}  />
      <Tab.Screen
        name='Profile'
        component={ListOfWorks}
        initialParams={{ icon: 'profile' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigator;
