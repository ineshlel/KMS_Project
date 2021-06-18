import React ,{useState,createRef}from 'react';

import {View,Text, StyleSheet ,Alert}from 'react-native';
import ButtonKms from '../components/buttonV';
import DescriptionInput from '../components/descriptionInput';
import Input from '../components/Input';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../components/loader';
import CapacityInput from '../components/capacityInput';







const InfoForm=props=>{
  

  const[titrepg,setTitrepg]=useState('');
  const[durationpg,setDurationpg]=useState('');
  const[minpg,setMinpg]=useState();
  const[maxpg,setMaxpg]=useState();
  const[descriptionpg,setDescriptionpg]=useState('');
  const[loading,setLoading]=useState(false);

  const titrepgRef = createRef();
  const durationpgRef = createRef();
  const descriptionpgRef = createRef();

 

  const handleValidateButton=async()=>{
    setLoading(true);
  var dataToSend = {
    titre: titrepg,
    duration: durationpg,
    description:descriptionpg,
    min:minpg,
    max:maxpg,
  };
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
  console.log(DEMO_TOKEN);
  //console.log(await AsyncStorage.getItem('userToken'));
  console.log('****************');
  //console.log(token);

  fetch(apiConfig.url+'/api/programmes/', {
      method: 'POST',
      body: formBody,
      headers: {
    
        'Authorization':'Bearer ' + DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        AsyncStorage.setItem('programID',JSON.stringify(responseJson.id));
        Alert.alert("Le programme  "+responseJson.titre+" a été ajouté");
        //titrepgRef.current.clear();
        //descriptionpgRef.current.clear();
       // durationpgRef.current.clear();
      setTitrepg("");
       console.log('//////////////////////');
      
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  


}
const submitHandler = () => { //runs on submit and sets the state to nothing.
  setTitrepg('')
 }

   
    return (
     <View  style={styles.formContainer}>
        <Loader loading={loading} />
      <Input title='Titre :'
       onChange={(titrepg) => setTitrepg(titrepg)}
       onsubmit={ titrepgRef.current &&
        titrepgRef.current.focus()}
      />
      <Input title='Durée :'
      onChange={(durationpg) => setDurationpg(durationpg)}
      //onsubmit={submitHandler}
      />
      <CapacityInput
       title='Capacité :'
       onChange={(minpg) => setMinpg(minpg)}
       onChange2={(maxpg) => setMaxpg(maxpg)}
      />
      <DescriptionInput   title='Description: '
       onChange={(descriptionpg) => setDescriptionpg(descriptionpg)}
       onsubmit={ descriptionpgRef.current &&
        descriptionpgRef.current.focus()}
      />
      

   
      <ButtonKms  title='Valider'
      onValidate={handleValidateButton}
      
      />
    
    
      </View>
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
       
        padding:20,
        //marginBottom:30
    
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

export default InfoForm;