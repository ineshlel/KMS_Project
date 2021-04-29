
import React from 'react';


import { I18nManager, SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabBarProvider from './src/contexts/tabBArProvider';

import TabNavigator from './src/navigation/tabNavigator';

import 'react-native-gesture-handler';

import Login from './src/ResponsableScreens/login';
import ForgotPassword from './src/ResponsableScreens/forgotPassw';
import VerifPassword from './src/ResponsableScreens/verifPassw';
import ProgramList from './src/ResponsableScreens/programList';
import FlatListPC from './src/components/flatListPC';
import ThreeTabSelector from './src/ResponsableScreens/headerTabs';
import ListOfWorks from './src/components/listOfWorks';
import TwoHeaderTab from './src/ResponsableScreens/TwoHeaderTab';
import QCMScreen from './src/ResponsableScreens/qcmScreen';
import RegistrationResponsable from './src/ResponsableScreens/registrationScree';
import { COLORS } from './src/constants';
import InscriptionFormateur from './src/FormateurScreens/inscriptionFormateur';
import ListCourses from './src/FormateurScreens/coursesList';
import CoursePlanification from './src/FormateurScreens/coursePlanification';
import ListOfWorksForma from './src/FormateurScreens/listOfWorksForma';
import QCMForma from './src/FormateurScreens/qcmForma';
import Playquiz from './src/MyQuiz/playQuiz';
import CoursesFormaScreen from './src/FormateurScreens/CoursesFormaScreen';
import AddNewCourse from './src/FormateurScreens/addNewCourse';
import SignUp from './src/ResponsableScreens/signUp';
import RequestInfo from './src/FormateurScreens/requestInfo';


const Stack = createStackNavigator();
const myOptions={
  title:'Travaux',
  headerTintColor:'#fff',
  headerStyle:{
  backgroundColor:COLORS.purple
  }
}
/* <Stack.Screen name="Planification"
       options={({ route }) => ({ title: route.params , headerTintColor:'#fff',
       headerStyle:{
       backgroundColor:COLORS.purple
       }})}    component={CoursePlanification}/>
 */

export default class App extends React.Component {


  render() {
    return (
      <TabBarProvider>
           <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" 
      //"ProgramList"
      //"Login" 
     // "TabNavigator"
    headerShown=' false'
  >
      <Stack.Screen name="Login" options= {{headerShown: false}} component={Login} />
      <Stack.Screen name="SignUp" options= {{headerShown: false}} component={SignUp} />
      <Stack.Screen name="PLayQuiz" options={{...myOptions,title:'QCM'} }  component={Playquiz} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} 
      options={{headerShown: false}} />
      <Stack.Screen name="TwoHeaderTab" options={myOptions}    component={TwoHeaderTab} />
      <Stack.Screen name="ForgotPassword"options={myOptions}   component={ForgotPassword} />
      <Stack.Screen name="VerifPassword" options={myOptions}   component={VerifPassword} />
      <Stack.Screen name="FlatListPC"  options={myOptions}     component={FlatListPC}/>
      <Stack.Screen name="ListOfWorks"   component={ListOfWorks}
       options={myOptions}
       />
       <Stack.Screen name="ListOfWorksForma"   component={ListOfWorksForma}
       options={myOptions}
       />
      <Stack.Screen name="QCMScreen"  options={{...myOptions,title:'QCM'} }   component={QCMScreen}/>
      <Stack.Screen name="QCMForma"  options={{...myOptions,title:'QCM'} }   component={QCMForma}/>
      <Stack.Screen name="Inscription" options={{...myOptions,title:'Inscription'} }      component={RegistrationResponsable}/>
      <Stack.Screen name="InscriptionFormateur" options={{...myOptions,title:'Inscription'} } component={InscriptionFormateur}/>
      <Stack.Screen name="RequestInfo" options={{...myOptions,title:'Détails'} } component={RequestInfo}/>
      <Stack.Screen name="List des cours"
       options={({ route }) => ({ title: route.params , headerTintColor:'#fff',
       headerStyle:{
       backgroundColor:COLORS.purple
       }})}    component={CoursesFormaScreen}/>
        <Stack.Screen name="Planification"   component={CoursePlanification}
       options={{...myOptions,title:'Nom Programme'} } 
       />
       <Stack.Screen name="AddNewCourse"   component={AddNewCourse}
       options={{...myOptions,title:'Nouveau Cours'} } 
       />
      
      </Stack.Navigator>
     </NavigationContainer>
      </TabBarProvider>
    

      //<Login/>
     //<ForgotPassword/>
     //<VerifPassword/>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 18,
  },
});
