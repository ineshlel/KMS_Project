
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabBarProvider from './src/contexts/tabBArProvider';

import TabNavigator from './src/navigation/tabNavigator';

import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


import Login from './src/ResponsableScreens/login';
import ForgotPassword from './src/ResponsableScreens/forgotPassw';
import VerifPassword from './src/ResponsableScreens/verifPassw';

import FlatListPC from './src/components/flatListPC';

import ListOfWorks from './src/components/listOfWorks';
import TwoHeaderTab from './src/ResponsableScreens/TwoHeaderTab';
import QCMScreen from './src/ResponsableScreens/qcmScreen';

import { COLORS } from './src/constants';
import InscriptionFormateur from './src/FormateurScreens/inscriptionFormateur';
import ListCourses from './src/FormateurScreens/coursesList';
import CoursePlanification from './src/FormateurScreens/coursePlanification';
import ListOfWorksForma from './src/FormateurScreens/listOfWorksForma';
import QCMForma from './src/FormateurScreens/qcmForma';
import Playquiz from './src/MyQuiz/playQuiz';

import AddNewCourse from './src/FormateurScreens/addNewCourse';
import SignUp from './src/ResponsableScreens/signUp';
import RequestInfo from './src/FormateurScreens/requestInfo';
import ListOfWorksEmpl from './src/EmployeeScreens/listOfWorksEmpl';
import TwoHeaderTabForma from './src/FormateurScreens/twoHeaderTabFormaReunion';
import HeaderTabsForma from './src/FormateurScreens/headerTabsForma';
import TabNavigatorEmpl from './src/navigation/tabNavigatorEmpl';
import TabNavigatorForma from './src/navigation/tabNavigatorForma';
import TwoHeaderTabFormateur from './src/FormateurScreens/TwoHeaderTabFormateur';
import TwoHeaderTabEmployee from './src/EmployeeScreens/twoHeaderTabEmployee';
import PlayquizForma from './src/FormateurScreens/MyQuizForma/playQuizForma';
import HeaderTabCourse from './src/FormateurScreens/headerTabCourse';
import HeaderTabCourseEmpl from './src/EmployeeScreens/headerTabCourseEmpl';
import InfoFormEmpl from './src/EmployeeScreens/InfoFormEmpl';
import HeaderTabEmpl from './src/EmployeeScreens/headersTabEmpl';
import TwoHeaderTabWork from './src/EmployeeScreens/twoHeaderTabWork';


import InfoFormAdded from './src/ResponsableScreens/infoFormAdded';
import HeadersTabConsult from './src/ResponsableScreens/headersTabConsultation';
import RequestDetailsForma from './src/ResponsableScreens/requestDetailsForma';
import ThreeTabRegistration from './src/components/threeTabsRegistration';
import ProgramConsultation from './src/FormateurScreens/programConsultation';
import InscriptionEmployee from './src/EmployeeScreens/inscriptionEmployee';
import ThreeTabRegistrationEmpl from './src/components/threeTabRegistrationEmpl';
import ListCoursesEmpl from './src/EmployeeScreens/CoursesListEmpl';
import EditProfileScreen from './src/components/editProfil';
import RequestDetailsEmpl from './src/ResponsableScreens/requestDetailsEmpl';
import SplashScreen from './src/sharedScreens/splashScreen';
import EditProfileFormaScreen from './src/FormateurScreens/editProfilForma';
import CheckBoxApp from './src/components/checkBox';


const Stack = createStackNavigator();
 const myOptions={
 title:'Développement de tableaux de bord',
  headerTintColor:'#fff',
  headerStyle:{
  backgroundColor:COLORS.purple,
  //fontSize:12,
  
  },
  headerTitleStyle: {
    fontSize: 16,
  },
}

/* <Stack.Screen name="Planification"
       options={({ route }) => ({ title: route.params , headerTintColor:'#fff',
       headerStyle:{
       backgroundColor:COLORS.purple
       }})}    component={CoursePlanification}/>
 */

 const App = () => {
   
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':  
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
       
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },

  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  /*  <AuthContext.Provider value={authContext}>  
   { loginState.userToken !== null ? (
   )
   :
     <RootStackScreen/>
          </AuthContext.Provider>
   } */
 
return (


 
    
      <TabBarProvider>
  
       <NavigationContainer>
      
         
          <Stack.Navigator initialRouteName="SplashScreen" 
          //"ProgramList"
          //"Login" 
         // "TabNavigator"
        headerShown=' false'
      >
          <Stack.Screen name="Login" options= {{headerShown: false}} component={Login} />
          <Stack.Screen name="SplashScreen" options= {{headerShown: false}} component={SplashScreen}/>
          <Stack.Screen name="SignUp" options= {{headerShown: false}} component={SignUp} />
          <Stack.Screen name="EditProfile"  options={{...myOptions,title:'Modifier profile'} } component={EditProfileScreen} />
          <Stack.Screen name="EditProfileForma"  options={{...myOptions,title:'Modifier profile'} } component={EditProfileFormaScreen} />
          <Stack.Screen name="InfoFormAdded" options= {{headerShown: false}} component={InfoFormAdded} />
          <Stack.Screen name="HeaderTabsConsultation" options={({ route }) => ({ title: route.params.titre , headerTintColor:'#fff',
           headerStyle:{
           backgroundColor:COLORS.purple
           }})}  component={HeadersTabConsult} />
          <Stack.Screen name="PLayQuizForma" options={{...myOptions,title:'QCM'} }  component={PlayquizForma} />
          <Stack.Screen name="PLayQuiz" options={{...myOptions,title:'QCM'} }  component={Playquiz} />
          <Stack.Screen name="Competance" options={{...myOptions,title:'CMPV'} }  component={CheckBoxApp} />
          <Stack.Screen name="TabNavigator" component={TabNavigator}  options={{headerShown: false}} />
          <Stack.Screen name="TabNavigatorEmpl" component={TabNavigatorEmpl}  options={{headerShown: false}} />
          <Stack.Screen name="TabNavigatorForma" component={TabNavigatorForma}  options={{headerShown: false}} />
          <Stack.Screen name="RequestDetailsForma" component={RequestDetailsForma}  options={{...myOptions,title:'Details'} }  />
          <Stack.Screen name="RequestDetailsEmpl" component={RequestDetailsEmpl}  options={{...myOptions,title:'Details'} }  />
          <Stack.Screen name="TwoHeaderTab" options={myOptions}    component={TwoHeaderTab} />
          <Stack.Screen name="TwoHeaderTabForma" options={myOptions}    component={TwoHeaderTabForma} />
          <Stack.Screen name="TwoHeaderTabFormateur" options={{...myOptions,title:'Développement de tableaux de bord'} }   component={TwoHeaderTabFormateur} />
          <Stack.Screen name="TwoHeaderTabEmployee" options={{...myOptions,title:'Inscription'} }   component={TwoHeaderTabEmployee} />
          <Stack.Screen name="TwoHeaderTabWork" options={{...myOptions,title:'Travaux'} }   component={TwoHeaderTabWork} />
          <Stack.Screen name="HeaderTabsForma" options={{...myOptions,title:'Développement de tableaux de bord'} }  component={HeaderTabsForma} />
          <Stack.Screen name="HeaderTabEmpl" options={{...myOptions,title:'Programme'} }  component={HeaderTabEmpl} />
          <Stack.Screen name="HeaderTabCourse" options={{...myOptions,title:'Objectifs TB'} }  component={HeaderTabCourse} />
          <Stack.Screen name="HeaderTabCourseEmpl" options={{...myOptions,title:'Cours'} }  component={HeaderTabCourseEmpl} />
          <Stack.Screen name="ForgotPassword"options={myOptions}   component={ForgotPassword} />
          <Stack.Screen name="VerifPassword" options={myOptions}   component={VerifPassword} />
          <Stack.Screen name="FlatListPC"  options={myOptions}     component={FlatListPC}/>
          <Stack.Screen name="ListOfWorks"   component={ListOfWorks} options={myOptions} />
          <Stack.Screen name="ListOfWorksForma"   component={ListOfWorksForma}options={myOptions}/>
          <Stack.Screen name="ListOfWorksEmpl"   component={ListOfWorksEmpl}options={myOptions}/>
          <Stack.Screen name="QCMScreen"  options={{...myOptions,title:'Développement de tableaux de bord'} }   component={QCMScreen}/>
          <Stack.Screen name="QCMForma"  options={{...myOptions,title:'QCM'} }   component={QCMForma}/>
          <Stack.Screen name="Inscription" options={{...myOptions,title:'BPR'} }      component={ThreeTabRegistration}/>
          <Stack.Screen name="liste des participants"  options={{...myOptions,title:'liste des participants'} }   component={ThreeTabRegistrationEmpl}/>
          <Stack.Screen name="InscriptionFormateur" options={{...myOptions,title:'Inscription'} } component={InscriptionFormateur}/>
          <Stack.Screen name="InscriptionParticipant" options={{...myOptions,title:'Inscription'} } component={InscriptionEmployee}/>
          <Stack.Screen name="RequestInfo" options={{...myOptions,title:'Détails'} } component={RequestInfo}/>
          <Stack.Screen name="List des cours"
           options={{...myOptions,title:'Développement de tableaux de bord'} }   component={ListCourses}/>
            <Stack.Screen name="ProgramConsultation"
           options={{...myOptions,title:'Développement de tableaux de bord'} }   component={ProgramConsultation}/>
          
           <Stack.Screen name="CoursesScreenEmpl" options={{...myOptions,title:'BPR'} } component={ListCoursesEmpl}/>
            <Stack.Screen name="Planification"   component={CoursePlanification}
           options={{...myOptions,title:'Nouveau cours'} } 
           />
           <Stack.Screen name="AddNewCourse"   component={AddNewCourse}
           options={{...myOptions,title:'Nouveau Cours'} } 
           />
           <Stack.Screen name="InfoFormEmpl" options={{...myOptions,title:'Programme'} }  component={InfoFormEmpl} />
          
          </Stack.Navigator>
          
        
     </NavigationContainer>
     

      </TabBarProvider>
     
   
    
    

      //<Login/>
     //<ForgotPassword/>
     //<VerifPassword/>
    );
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
export default App;

