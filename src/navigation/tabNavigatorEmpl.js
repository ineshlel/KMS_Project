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
import ConsignesList from '../EmployeeScreens/consignesList';
import TwoHeaderTabWork from '../EmployeeScreens/twoHeaderTabWork';

import App from '../components/checkBox';
import MyListEmpl from '../EmployeeScreens/listProgramsEmpl';
import ProgramActionsAcceptedEmpl from '../components/programActionsAcceptedEmpl';
import ProgramListAcceptedEmpl from '../EmployeeScreens/programListAccepted';
import Loader from '../components/loader';


//import ProfileNavigator from './ProfileNavigator';

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
      component={App}
        initialParams={{ icon: 'profile' }}
      />
      
    </Tab.Navigator>

  );
};

export default TabNavigatorEmpl;