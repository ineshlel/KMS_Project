import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TouchableOpacity}from 'react-native';

import { useNavigation } from '@react-navigation/native';

import SearchBarProgram from '../components/searchBarProgram';
import ListCoursesEmpl from './CoursesListEmpl';


const CoursesScreenEmpl=({props})=>{

  const navigation = useNavigation();

     
    return (
        <View style={styles.container}>
           <View  >
        <SearchBarProgram  />
        </View>
        <ListCoursesEmpl/>
        </View>
     
 );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    


    },
    
     
});
export default CoursesScreenEmpl;