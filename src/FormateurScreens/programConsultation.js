import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet,ScrollView }from 'react-native';

import StaticInput from '../components/staticInput';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import DescriptionStaticInput from '../components/descriptionStaticInput';







const ProgramConsultation=({route})=>{

  //const {itemId} = route.params;

  const [title,setTitle]=useState('');
  const [duration,setDuration]=useState('');
  const [description,setDescription]=useState('');
  const [min,setMin]=useState('');
  const [max,setMax]=useState('');

  useEffect( async() => {
      console.log(route.params);
      console.log("SSSSSSSSSSSSSSSSSSSSSS");
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    fetch(apiConfig.url+`/api/programmes/${route.params}`, {
      method: 'GET',
      headers: {
    
        'Authorization':'Bearer ' + DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //setFilteredDataSource(responseJson);
       console.log(responseJson);
      setTitle(responseJson.titre);
      setDuration(responseJson.duration);
      setDescription(responseJson.description);
      setMin(responseJson.min);
      setMax(responseJson.max);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
   
    return (
     <ScrollView style={styles.formContainer}>
    <StaticInput name='Titre :'
    value={title}
    />
    <StaticInput name='Durée :'
    value={duration}
    />
    <StaticInput name='Min :'
    value={min}
    />
    <StaticInput name='Max :'
    value={max}
    />

    <DescriptionStaticInput  name='Description: '
    value={description}
    
    />


   
  
    
    
      </ScrollView>
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
       
       padding:10,
       backgroundColor:'#fff',
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
export default ProgramConsultation;