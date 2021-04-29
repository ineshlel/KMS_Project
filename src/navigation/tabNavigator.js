import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/tabBar';

import ThreeTabSelector from '../ResponsableScreens/headerTabs';
import MyList from '../components/expandableList';
import SearchBarProgram from '../components/searchBarProgram';
import InscriptionFormateur from '../FormateurScreens/inscriptionFormateur';
import TwoHeaderTabFormateur from '../FormateurScreens/TwoHeaderTabFormateur';
import ProgramListAccepted from '../FormateurScreens/listProgramAccepted';
import ListCourses from '../FormateurScreens/coursesList';
import MyListForma from '../FormateurScreens/listProgramsForma';
import SliderApp from '../components/slider';
import DoubleSlider from '../components/slider';
import HeaderTabsForma from '../FormateurScreens/headerTabsForma';
import Playquiz from '../MyQuiz/playQuiz';
import MyComponent from '../components/radioButton';


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
        //component={ThreeTabSelector}
        component={HeaderTabsForma}
        initialParams={{ icon: 'plus' }}
        options={{headerShown: false}}  />
      <Tab.Screen
        name='Profile'
     //component={MyComponent}
       component={TwoHeaderTabFormateur}
        initialParams={{ icon: 'profile' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigator;
