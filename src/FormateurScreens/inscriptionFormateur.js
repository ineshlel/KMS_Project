import React ,{useState}from 'react';
import { ScrollView } from 'react-native';

import {View,Text, StyleSheet ,TextInput,Button,Modal,Alert}from 'react-native';
import ButtonKms from '../components/buttonV';
import Input from '../components/Input';
import AsyncStorage from '@react-native-community/async-storage';
import apiConfig from '../api/config';
import jwt_decode from "jwt-decode";
import DateNaissance from '../components/datenaiss';
import DatePicker from 'react-native-datepicker';
import { COLORS } from '../constants';
import { SafeAreaView } from 'react-native';




const InscriptionFormateur=props=>{
  const [date, setDate] = useState('');
  const [date2, setDate2] = useState('');
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
        "formateur": decoded.user_id,
        "formateur_name": nameForma,
        "programme": props.id_pg,
        "date_debut": date,
        "date_fin": date2,
        "statut": "EA"
      };
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
      fetch(apiConfig.url+'/api/demandes_formateur/', {
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
      <Text style={styles.textStyle}>Proposer des dates à ce programme:</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
      <SafeAreaView style={styles.dateContainer}>
        <Text style={styles.textStyle2}>Date début :</Text>
      <DatePicker
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="choisir date"
          format="YYYY-MM-DD"
          minDate="1960-01-01"
          maxDate="2040-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
         // openToYearSelection={true}
          customStyles={{
            dateIcon: {
              //display: 'none',
             // position: 'absolute',
              right: 0,
              left:6,
              top: 4,
              marginLeft: 0,
              tintColor:COLORS.blueClair,
             height:35,

             
              
              },
            dateInput: {
           
                //width:'90%',
                height:40,
                marginTop:5,
                borderRadius:10,
                //borderWidth:1,
                elevation:1,
                
              
              
            },
          }}
          onDateChange={(date) => {
            setDate(date);
            console.log(date);
          }}
        />
        </SafeAreaView>
        <SafeAreaView style={styles.dateContainer}>
        <Text style={styles.textStyle2}>Date fin :</Text>
      <DatePicker
          date={date2} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="choisir date"
          format="YYYY-MM-DD"
          minDate="1960-01-01"
          maxDate="2040-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
         // openToYearSelection={true}
          customStyles={{
            dateIcon: {
              //display: 'none',
             // position: 'absolute',
              right: 0,
              left:6,
              top: 4,
              marginLeft: 0,
              tintColor:COLORS.blueClair,
             height:35,

             
              
              },
            dateInput: {
           
                //width:'90%',
                height:40,
                marginTop:5,
                borderRadius:10,
                //borderWidth:1,
                elevation:1,
                
              
              
            },
          }}
          onDateChange={(date2) => {
            setDate2(date2);
            console.log(date2);
          }}
        />
        </SafeAreaView>
        </View>

       <View  style={{marginTop:150,marginLeft:15}}>
      <ButtonKms title="S'inscrire"
      onValidate={handleInscription}/>
      </View>
       </View>
     </ScrollView>
    
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
        //padding:10,
        //marginBottom:30,
        marginTop:15,
       
    
      },
      textStyle:{
        fontSize:18,
        fontFamily:"Cairo-SemiBold",
       
    },
    dateContainer:{
      flexDirection:'column',
    },
    textStyle2:{
      fontSize:18,
      fontFamily:"Cairo-Regular",
    }
  
     
});

export default InscriptionFormateur;