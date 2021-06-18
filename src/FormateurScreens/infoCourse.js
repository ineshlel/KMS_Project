import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet }from 'react-native';


import DescriptionStaticInput from '../components/descriptionStaticInput';

import StaticInput from '../components/staticInput';
import AsyncStorage from '@react-native-community/async-storage';
import apiConfig from '../api/config';





const InfoCourse=props=>{


  
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [startHour,setStartHour]=useState();
  const [endHour,setEndHour]=useState();
  const[date,setDate]=useState();
  useEffect( async() => {
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    fetch(apiConfig.url+`/api/cours_programme/${props.id_c}`, {
      method: 'GET',
      headers: {
    
        'Authorization':'Bearer ' + DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //setFilteredDataSource(responseJson); substring(0,5)
       console.log(responseJson);
      setTitle(responseJson.titre);
      setStartHour(responseJson.startHour);
      setEndHour(responseJson.endHour);
      setDate(responseJson.date);
      setDescription(responseJson.description)

      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
   
    return (
     <View  style={styles.formContainer}>
    <StaticInput name='Titre :'
    value={title}
    />
    <StaticInput name='Jour :'
    value={date}
    />
   
      <StaticInput name='Heure Début :'
    value={startHour}
    />
      <StaticInput name='Heure Fin :'
    value={endHour}
    />
 <DescriptionStaticInput name='Description:'
 value={description}/>
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