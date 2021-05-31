import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,TouchableOpacity, FlatList}from 'react-native';

import MyList from '../components/expandableList';
import SearchBarProgram from '../components/searchBarProgram';
import { COLORS } from '../constants';



const ProgramList=props=>{
 
 
    return (
  
    <View style={styles.Container}>
       <View  >
     <SearchBarProgram/>
      </View>
     <View style={styles.Container}><MyList/></View>
   
  
     </View>
 );
};
const styles=StyleSheet.create({

     Container:{
          flex:1, 
          },
      
 
});
export default ProgramList;