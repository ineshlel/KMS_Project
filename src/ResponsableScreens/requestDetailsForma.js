import React ,{useState,useCallback}from 'react';

import {View,StyleSheet,Image,Text,TouchableOpacity,SafeAreaView,ScrollView }from 'react-native';
import ButtonKms from '../components/buttonV';

import StaticInput from '../components/staticInput';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import MemberAction from '../components/memberAction';





const RequestDetailsForma=({route})=>{
    const { nameF, ddd,dfd,id_dm,id_pg,id_f,st } = route.params;
    const[acceptationSuccess,setAcceptationSuccess]=useState(false);
    const[initialStatut,setInitialStatut]=useState(st);
  

    const navigation = useNavigation();
   

 const handleAccep=async()=>{
    var dataToSend = {
        "id": id_dm,
        "formateur":id_f,
        "formateur_name": nameF,
        "programme": id_pg,
        "date_debut": ddd,
        "date_fin": dfd,
        "statut": "A"
      };
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');

  const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    const requestOptions = {
        method: 'PUT',
        headers: { 
        'Authorization':'Bearer '+ DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
       body: formBody,
    };
    fetch(apiConfig.url+`/api/demandes_formateur/${id_dm}/`, requestOptions)
        .then(response => response.json())
        .then((responseJson) => {
         console.log(responseJson);
         console.log(responseJson.statut);
         setInitialStatut(responseJson.statut);
         console.log(initialStatut);
         console.log("Statut Is CHANGED TO ACCEPTED /////////////////////////////");
         
        }).catch((error) => {
          console.error(error);
          });
          setAcceptationSuccess(true);
}

if (acceptationSuccess) {
    return(
        <SafeAreaView
            style={{
              flex: 1,
              backgroundColor:'#fff',
              justifyContent: 'center',
           
            }}>
            <Image
              source={require('../assets/images/user.png')}
              style={{
                height: 180,
                resizeMode: 'contain',
                alignSelf: 'center'
              }}
            />
            <Text style={styles.successTextStyle}>
              Formateur Accepté
            </Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signInNow}
                    onPress={() => navigation.navigate('Inscription')}
                >
                <LinearGradient
                    colors={[COLORS.blueClair, '#57B8DF']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Voir la liste des formateurs</Text>
                </LinearGradient>
                </TouchableOpacity>

               
            </View>
          </SafeAreaView>
    );}
const handleRefus=async()=>{
    var dataToSend = {
        "id": id_dm,
        "formateur":id_f,
        "formateur_name": nameF,
        "programme": id_pg,
        "date_debut": ddd,
        "date_fin": dfd,
        "statut": "R"
      };
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');

  const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    const requestOptions = {
        method: 'PUT',
        headers: { 
        'Authorization':'Bearer '+ DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
       body: formBody,
    };
    fetch(apiConfig.url+`/api/demandes_formateur/${id_dm}/`, requestOptions)
        .then(response => response.json())
        .then((responseJson) => {
         console.log(responseJson);
         setInitialStatut(responseJson.statut);
         console.log("Statut Is CHANGED TO ACCEPTED /////////////////////////////")
        }).catch((error) => {
          console.error(error);
          });

}

if(initialStatut=="EA")
   
    {return (
    <ScrollView style={{  backgroundColor:'#fff',}}>
     <View  style={styles.formContainer}>
    <StaticInput name='Nom Formateur:'
    value={nameF}
    //value={JSON.stringify(nameF)}
    />
  
      <StaticInput name='Date Début:'
    //value={props.ddebut}
    value={JSON.stringify(ddd)}
    />
      <StaticInput name='Date Fin:'
    //value={props.dfin}
    value={JSON.stringify(dfd)}
    />
    <StaticInput name='Statut:'
    value={st}
    />
  <View style={styles.buttonContainer}>
   <ButtonKms 
   title='Accepter'
   onValidate={handleAccep}
   />
   <ButtonKms
     title='Refuser'
     onValidate={handleRefus}
   />
   </View>
   </View>
   </ScrollView>
 );}
  else if (initialStatut=="A"){
   return (
     <ScrollView style={{  backgroundColor:'#fff',}}>
       <View  style={styles.formContainer}>
    <StaticInput name='Nom Formateur:'
    value={nameF}
    //value={JSON.stringify(nameF)}
    />
  
      <StaticInput name='Date Début:'
    //value={props.ddebut}
    value={ddd}
    />
      <StaticInput name='Date Fin:'
    //value={props.dfin}
    value={dfd}
    />
    <StaticInput name='Statut:'
    value={st}
    />
    </View>
     
    <View  style={styles.acceptationContainer}>
    <Image
            source={require('../assets/images/user.png')}
            style={{
              height: 100,
              resizeMode: 'contain',
              alignSelf: 'center'
            }}
          />
          <Text style={styles.successTextStyle}>
            Formateur Accepté
          </Text>
      
     <MemberAction
     iddm={id_dm}/>
  </View>
  </ScrollView>
   );}
   else{
     return(
      <ScrollView style={{  backgroundColor:'#fff',}}>
      <View  style={styles.formContainer}>
   <StaticInput name='Nom Formateur:'
   value={nameF}
   //value={JSON.stringify(nameF)}
   />
 
     <StaticInput name='Date Début:'
   //value={props.ddebut}
   value={JSON.stringify(ddd)}
   />
     <StaticInput name='Date Fin:'
   //value={props.dfin}
   value={JSON.stringify(dfd)}
   />
   <StaticInput name='Statut:'
   value={st}
   />
   </View>
    
   <View  style={styles.acceptationContainer}>
   <Image
           source={require('../assets/images/rejected.png')}
           style={{
             height: 100,
             resizeMode: 'contain',
             alignSelf: 'center'
           }}
         />
         <Text style={styles.successTextStyle}>
           Formateur Refusé
         </Text>
 </View>
 </ScrollView>
     );
   }
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
        backgroundColor:'#fff',
         padding:30,
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
    buttonContainer:{
        flexDirection:'column',
       // marginTop:80,
    
    },





    button: {
        alignItems: 'center',
        marginTop: 20
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    signInNow: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    successTextStyle: {
        color: COLORS.purple,
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
      },

    acceptationContainer:{
      marginTop:60,
  backgroundColor:'#fff',

    }    
     
});
export default RequestDetailsForma;