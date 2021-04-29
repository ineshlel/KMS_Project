import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import ListCourses from './coursesList';
import SearchBarProgram from '../components/searchBarProgram';
import AddFixedButton from '../components/addFixedButton';

const CoursesFormaScreen=({props})=>{

  const navigation = useNavigation();

     
    return (
        <View style={styles.container}>
           <View  >
        <SearchBarProgram  />
        </View>
        <ListCourses/>
        <TouchableOpacity onPress={() =>navigation.navigate("Planification") } >
         <AddFixedButton/>
         </TouchableOpacity>
        </View>
     
 );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    


    },
    
     
});
export default CoursesFormaScreen;