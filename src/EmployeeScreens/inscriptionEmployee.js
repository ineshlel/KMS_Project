import React ,{useState,useEffect}from 'react';
import { ScrollView } from 'react-native';

import {View,Text, StyleSheet,Alert,TextInput}from 'react-native';
import ButtonKms from '../components/buttonV';
import Input from '../components/Input';
import { COLORS } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import apiConfig from '../api/config';
import jwt_decode from "jwt-decode";
import { TabRouter } from '@react-navigation/routers';


/*  <Input   title='Nom de la demande:'/>
      <Input   title='Nom et Prénom:'/>
      <Input   title='Téléphone:'/>
      <Input   title='E-mail:'/>
      <Input   title='Adresse:'/>
      <Input   title='Poste:'/>
      <Input   title="Entreprise:"/>*/

const InscriptionEmployee=({route})=>{
  const [currentDate, setCurrentDate] = useState('');
  const [focus, setFocus] = useState(false); 
  const customStyle=focus?styles.inputFocus : styles.input

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      year + '-' + month + '-' + date 
    
    );
  }, []);
  const  handleInscription=async()=>{
    //setLoading(true);
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    var decoded = jwt_decode(DEMO_TOKEN);
             console.log(decoded);
             console.log(decoded.user_id);
    
    const nameForma = await AsyncStorage.getItem('userName');
    //const id_formateur = await AsyncStorage.getItem('userID');
    console.log(DEMO_TOKEN);
    console.log(nameForma);
    //console.log(id_formateur);
    console.log('****************');
    var dataToSend = {
      "participant": decoded.user_id,
      //"participant_name": nameForma,
      "date_demande":currentDate,
      "statut": "EA",
      "demande_formateur": route.params,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    fetch(apiConfig.url+'/api/demandes_participant/', {
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
          //setLoading(false);
          console.log(responseJson);
          Alert.alert("La demande a été envoyé");
   
         console.log('//////////////////////');
        
        })
        .catch((error) => {
          //Hide Loader
          //setLoading(false);
          console.error(error);
        });
   };
 
   
    return (
     <ScrollView >
      <View  style={styles.formContainer}>
      <View  style={styles.inputContainer}>
    <Text  style={styles.textStyle}>Date de la demande :</Text>
    <TextInput  
      style={customStyle}
      onFocus={()=>setFocus(true)}
    //onChangeText={props.onChange}
     value={currentDate}
    />
    </View>
     
      <ButtonKms title="S'inscrire"
       onValidate={handleInscription}/>
       </View>
     </ScrollView>
    
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
     marginBottom:10},
  
  
      input:{
        width:'90%',
        height:40,
        marginTop:5,
        borderRadius:10,
        //borderWidth:1,
        elevation:2,
  },

  inputFocus:{
    borderWidth:1,
    borderColor:COLORS.purple,
    width:'90%',
    height:40,
    marginTop:5,
    borderRadius:10,
  },
      textStyle:{
          fontSize:18,
          fontFamily:"Cairo-Regular",
         
      },
    
     
});

export default InscriptionEmployee;