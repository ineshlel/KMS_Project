import React ,{useState,createRef}from 'react';

import {View,Text, StyleSheet ,Alert,TouchableOpacity}from 'react-native';
import ButtonKms from '../components/buttonV';
import DescriptionInput from '../components/descriptionInput';
import Input from '../components/Input';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../components/loader';
import CapacityInput from '../components/capacityInput';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';






const InfoForm=props=>{
  

const navigation = useNavigation();

  

  const[titrepg,setTitrepg]=useState('');
  const[durationpg,setDurationpg]=useState('');
  const[minpg,setMinpg]=useState();
  const[maxpg,setMaxpg]=useState();
  const[descriptionpg,setDescriptionpg]=useState('');
  const[loading,setLoading]=useState(false);


 

  const handleValidateButton=async()=>{
    //setLoading(true);
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
       // setLoading(false);
        console.log(responseJson);
        navigation.navigate('Competance',responseJson.id)
        //AsyncStorage.setItem('programID',JSON.stringify(responseJson.id));
        //Alert.alert("Le programme  "+responseJson.titre+" a été ajouté");
      
       console.log('//////////////////////');
      
      })
      .catch((error) => {
        //Hide Loader
        //setLoading(false);
        console.error(error);
        Alert.alert(error);
      });
  


}


   
    return (
     <ScrollView style={styles.formContainer}>
      
      <Input title='Titre :'
       onChange={(titrepg) => setTitrepg(titrepg)}
     
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
     
      />
      
      <TouchableOpacity onPress={handleValidateButton}>
        <View  style={styles.button}>
            <Text style={styles.textStyle}>Suivant</Text>
            
        </View>
        </TouchableOpacity>
   
    
    
    
      </ScrollView>
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
       
        padding:20,
        //marginBottom:30
        backgroundColor:'white'
    
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
      button:{
        width:'90%',
        height:40,
         borderRadius:15,
        //marginLeft:60,
        marginTop:60,
        marginLeft:6,
        backgroundColor:COLORS.orange,
        justifyContent:'center',
        alignItems:'center',
        //position: 'absolute',
        //top: 100,
        //paddingTop: 5,
        
    },
    textStyle:{
        fontSize:18,
        color:'#fff',
        fontFamily:"Cairo-Bold",
        

    },
    
     
});

export default InfoForm;