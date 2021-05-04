import React ,{useState,useCallback}from 'react';

import {View,Text, StyleSheet }from 'react-native';

import DescriptionInput from '../components/descriptionInput';

import StaticInput from '../components/staticInput';





const InfoCourse=props=>{


  const [time,setTime]=useState();
   
    return (
     <View  style={styles.formContainer}>
    <StaticInput name='Titre :'
    value='Introduction'
    />
    <StaticInput name='Programme :'
    value='Programme Hancho'
    />
    <StaticInput name='Séance :'
    value='2H'
    />
      <StaticInput name='Heure Début:'
    value='8h '
    />
      <StaticInput name='Heure Fin:'
    value='10h '
    />
 <DescriptionInput   title='Description: '/>
     </View>
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
       
       padding:10,
        //marginBottom:30
       // marginRight:20,
    
      },
      inputContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
     marginBottom:10
    
      },
      textStyle:{
        fontSize:12,
        
    },
    input:{
        width:'90%',borderColor:'grey',borderWidth:1,padding:3,marginTop:5,
        
      },
    
     
});
export default InfoCourse;