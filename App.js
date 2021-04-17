
import React from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

import { I18nManager, SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabBarProvider from './src/contexts/tabBArProvider';

import TabNavigator from './src/navigation/tabNavigator';

import 'react-native-gesture-handler';
import Test from './src/screens/test';
import Login from './src/screens/login';
import ForgotPassword from './src/screens/forgotPassw';
import VerifPassword from './src/screens/verifPassw';
import ProgramList from './src/screens/programList';
import FlatListPC from './src/components/flatListPC';
import ThreeTabSelector from './src/screens/headerTabs';
import ListOfWorks from './src/components/listOfWorks';
import TwoHeaderTab from './src/screens/TwoHeaderTab';


const Stack = createStackNavigator();

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
      <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} 
      options={{headerShown: false}} />
      <Stack.Screen name="TwoHeaderTab" options={{headerShown: false}}  component={TwoHeaderTab} />
      <Stack.Screen name="ForgotPassword" options={{headerShown: false}}  component={ForgotPassword} />
      <Stack.Screen name="VerifPassword"  options={{headerShown: false}} component={VerifPassword} />
      <Stack.Screen name="FlatListPC"  options={{headerShown: false}} component={FlatListPC}/>
      <Stack.Screen name="ListOfWorks"  options={{headerShown: false}} component={ListOfWorks}/>
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
