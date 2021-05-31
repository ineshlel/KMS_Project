import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet }from 'react-native';
import ButtonKms from '../components/buttonV';
import DescriptionInput from '../components/descriptionInput';
import StaticInput from '../components/staticInput';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import DescriptionStaticInput from '../components/descriptionStaticInput';
import { TabRouter } from '@react-navigation/routers';






const InfoFormAdded=(props)=>{

  //const {itemId} = route.params;

  const [title,setTitle]=useState('');
  const [duration,setDuration]=useState('');
  const [description,setDescription]=useState('');

  useEffect( async() => {
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    fetch(apiConfig.url+`/api/programmes/${props.id_pg}`, {
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
    <StaticInput name='Durée :'
    value={duration}
    />
    <DescriptionStaticInput  name='Description: '
    value={description}
    
    />


   
  
    
    
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
export default InfoFormAdded;