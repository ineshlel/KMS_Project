import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet ,}from 'react-native';
import StaticInput from '../components/staticInput';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../components/loader';

const InfoFormAccepted=props=>{
  const [title,setTitle]=useState('');
  const [duration,setDuration]=useState('');
  const [description,setDescription]=useState('');
  const[ddebut,setDdebut]=useState();
  const[dfin,setDatefin]=useState();
  const [nomForm,setNomForm]=useState('');
  const [loading, setLoading] = React.useState(false);

  useEffect( async() => {
    setLoading(true);
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    fetch(apiConfig.url+`/api/demandes_formateur/${props.iddm}`, {
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
       setLoading(false);
      setTitle(responseJson.programme_name);
      setDuration(responseJson.programme_duree);
      setDescription(responseJson.programme_desc);
      setDdebut(responseJson.date_debut);
      setDatefin(responseJson.date_fin);
      setNomForm(responseJson.formateur_name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
   

  /*if (loading){
     return ( <Loader loading={loading} /> );
   } else {*/

    return (
      
     <View  style={styles.formContainer}>
        
    
    <StaticInput name='Titre :'
    value={title}
    />
    <StaticInput name='Durée :'
    value={duration}
    />
      <StaticInput name='Date Début:'
    value={ddebut}
    />
      <StaticInput name='Date Fin:'
    value={dfin}
    />
    <StaticInput name='Nom Formateur:'
    value={nomForm}
    />
    <StaticInput name='Description:'
    value={description}
    />
     </View>
     
    
 );
//}
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
export default InfoFormAccepted;