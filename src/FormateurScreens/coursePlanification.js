import React ,{useState}from 'react';

import {View,Text, StyleSheet ,Dimensions}from 'react-native';
import DateInput from '../components/dateInput';
import DoubleSlider from '../components/slider';
import SliderApp from '../components/slider';
import StaticInput from '../components/staticInput';


const CoursePlanification=props=>{
  

    return (
  
    <View  style={styles.container}>
        <StaticInput  
        name='Titre Programme:'
        value='Programme 1'/>
         <StaticInput  
        name='Titre Cours:'
        value='Cours introduction'/>
        <DateInput  title='Date:'/>
        <StaticInput  
        name='Jour:'
        value='03/04/2021'/>
         <StaticInput  
        name='Choisir Horaire:'
        />
        <StaticInput  
        name='Choisir Horaire:'
        />
        <View style={styles.sliderContainer}>
        <DoubleSlider/>
        </View>
        <View style={{height:200}}>

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
export default CoursePlanification;