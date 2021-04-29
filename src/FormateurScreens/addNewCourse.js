import React ,{useState}from 'react';

import {View,Text, StyleSheet ,Dimensions}from 'react-native';
import Input from '../components/Input';
import DoubleSlider from '../components/slider';
import SliderApp from '../components/slider';
import StaticInput from '../components/staticInput';


const AddNewCourse=props=>{
  

    return (
  
    <View  style={styles.container}>
       <Input
        title='Titre Cours: '
       />
       <Input
       title='Jour: '
       />
         <StaticInput  
        name='Choisir Horaire:'
        />
        <View style={styles.sliderContainer}>
        <DoubleSlider/>
        </View>
 
    </View>
 );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        marginTop:20,
        marginHorizontal:10,
    },
    sliderContainer:{
       flex:1,
       //marginLeft:30,
       //marginBottom:50,
    },
    
  
});
export default AddNewCourse;