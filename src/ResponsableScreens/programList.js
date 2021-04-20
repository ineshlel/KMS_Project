import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal, FlatList}from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FlatListPC from '../components/flatListPC';
import HeaderProgram from '../components/header';
import SearchBarProgram from '../components/searchBarProgram';


const ProgramList=props=>{

     
    return (
  
    <View>
     <HeaderProgram  title='List of Programs'/>
     <SearchBarProgram/>
     <FlatListPC/>        
   
    </View>
 );
};
const styles=StyleSheet.create({

     Container:{
          flex:1, 
        
          
      },
 
});
export default ProgramList;