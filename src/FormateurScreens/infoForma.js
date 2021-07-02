import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet }from 'react-native';
import DescriptionStaticInput from '../components/descriptionStaticInput';

import StaticInput from '../components/staticInput';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../components/loader';
import jwt_decode from "jwt-decode";
  






const InfoForma=props=>{


  
  const [title,setTitle]=useState('');
  const [duration,setDuration]=useState('');
  const [description,setDescription]=useState('');
  const[ddebut,setDdebut]=useState();
  const[dfin,setDatefin]=useState();
  const[loading,setLoading]=useState(false);
 

  useEffect( async() => {
    setLoading(true);
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    var decoded = jwt_decode(DEMO_TOKEN);
var userId=decoded.user_id;
    fetch(apiConfig.url+`/api/demandes_formateur/?date_fin__gte=2021-06-05&formateur=${userId}&statut=A&programme=${props.id_pg}`, {
      method: 'GET',
      headers: {
    
        'Authorization':'Bearer ' + DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //setFilteredDataSource(responseJson);
        setLoading(false);
       console.log(responseJson);
      setTitle(responseJson[0].programme_name);
      setDuration(responseJson[0].programme_duree);
      setDescription(responseJson[0].programme_desc);
      setDdebut(responseJson[0].date_debut);
      setDatefin(responseJson[0].date_fin);
  
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
   
  if (loading){
    return ( <Loader loading={loading} /> );
  } else {

   return (
     <View  style={styles.formContainer}>
    <StaticInput name='Titre :'
    value={title}
    />
    <StaticInput name='Durée :'
    value={duration}
    />
    <StaticInput  name='Date début :'
    value={ddebut}
    />
    <StaticInput
    name='Date fin :'
    value={dfin}
    />
    <DescriptionStaticInput  name='Description: '
    value={description}
    
    />


   
  
    
    
      </View>
 );
};}
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
       backgroundColor:'#fff',
       padding:20,
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
export default InfoForma;