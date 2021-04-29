import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal, FlatList}from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import SearchBarProgram from '../components/searchBarProgram';
import ExpandableListViewAccepted from '../components/expandableListViewAccepted';
import ProgramItemAccepted from '../components/programItemAccepted';


//<SearchBarProgram/>
const ProgramListAccepted=props=>{

     
    return (

    <View style={styles.container}>
       <SearchBarProgram/>
       <ProgramItemAccepted/>
      <ProgramItemAccepted/>
    </View>
  
 );
};
const styles=StyleSheet.create({

     Container:{
          flex:1, 
          padding:10,
          flexDirection:'column',
        
          
      },
 
});
export default ProgramListAccepted;