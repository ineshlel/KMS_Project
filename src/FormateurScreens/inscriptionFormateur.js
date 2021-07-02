import React ,{useState,useEffect}from 'react';
import { ScrollView } from 'react-native';

import {View,Text, StyleSheet ,Alert,TouchableOpacity,Image}from 'react-native';
import ButtonKms from '../components/buttonV';
import Input from '../components/Input';
import AsyncStorage from '@react-native-community/async-storage';
import apiConfig from '../api/config';
import jwt_decode from "jwt-decode";
import DateNaissance from '../components/datenaiss';
import DatePicker from 'react-native-datepicker';
import { COLORS } from '../constants';
import { SafeAreaView } from 'react-native';
import StaticInput from '../components/staticInput';
import DocumentPicker from 'react-native-document-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const InscriptionFormateur=props=>{
  const [date, setDate] = useState('');
  const [date2, setDate2] = useState('');
  const[tdecoded,setTdecoded]=useState();
  const[fullname,setFullname]=useState();
  const[poste,setPoste]=useState();
  const[entreprise,setEntreprise]=useState();
  const[specialite,setSpecialite]=useState();

  useEffect( async() => {
  
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
     //var decoded = jwt_decode(DEMO_TOKEN);
              // console.log(decoded);
              //${tdecoded.user_id}
               setTdecoded( jwt_decode(DEMO_TOKEN));
               console.log(tdecoded.user_id);
              
    fetch(apiConfig.url+`/auth/formateurs/${tdecoded.user_id}`, {
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
       setFullname(responseJson.fullname);
       setEntreprise(responseJson.entreprise);
       setPoste(responseJson.poste);
       setSpecialite(responseJson.specialite);
   
  
      })
      .catch((error) => {
        console.error(error);
      });
  },
  
   []);
   const [singleFile, setSingleFile] = useState('');


   const selectOneFile = async () => {
     //Opening Document Picker for selection of one file
     try {
       const res = await DocumentPicker.pick({
         type: [DocumentPicker.types.allFiles],
      
       });
       //Printing the log realted to the file
       console.log('res : ' + JSON.stringify(res));
       console.log('URI : ' + res.uri);
       console.log('Type : ' + res.type);
       console.log('File Name : ' + res.name);
       console.log('File Size : ' + res.size);
       //Setting the state to show single file attributes
       setSingleFile(res);
     } catch (err) {
       //Handling any exception (If any)
       if (DocumentPicker.isCancel(err)) {
         //If user canceled the document selection
         alert('Canceled from single doc picker');
       } else {
         //For Unknown Error
         alert('Unknown Error: ' + JSON.stringify(err));
         throw err;
       }
     }
   };
 
    const  handleInscription=async()=>{
      //setLoading(true);
      const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
      
      const nameForma = await AsyncStorage.getItem('userName');
      //const id_formateur = await AsyncStorage.getItem('userID');
      console.log(DEMO_TOKEN);
   
      //console.log(id_formateur);
      console.log('****************');
      var dataToSend = {
        "formateur": tdecoded.user_id,
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
      <StaticInput
       name='Nom et Prénom :'
      value={fullname}

      />
      <StaticInput
       name='Email :'
     // value={tdecoded.email}

      />
      <StaticInput
       name='Poste :'
       value={poste}

      />
      <StaticInput
       name='Spécialité :'
       value={specialite}

      />
      <StaticInput
       name='Entreprise:'
       value={entreprise}

      />
      <Text style={styles.textStyle}>Proposer des dates à ce programme:</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,}}>
    
        
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
        <Text style={styles.textStyle}>Remettre CV :</Text>
        <View style={styles.containercv}>
        {/*To show single file attribute*/}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={selectOneFile}>
          {/*Single file selection button*/}
          <Text style={{marginRight: 10, fontSize: 16}}>
          {singleFile.name ? singleFile.name : ''}
             

          </Text>
         <View  style={styles.imageIconStyle}>
         <MaterialIcons
               name="attach-file"
               color={COLORS.blueClair}
               size={20}
                />
         </View>
        </TouchableOpacity>
        </View>

       <View  style={{marginTop:20,marginLeft:15}}>
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

      containercv:{
        marginTop:5,
      },
      textStyle:{
        fontSize:18,
        fontFamily:"Cairo-Regular",
        color:COLORS.purple,
        marginTop:8,
       
    },
    dateContainer:{
      flexDirection:'column',
      paddingHorizontal:10,
    },
    textStyle2:{
      fontSize:18,
      fontFamily:"Cairo-Regular",
    },
    buttonStyle: {
      alignItems: 'center',
      flexDirection: 'row',
     // backgroundColor: '#DDDDDD',
     borderBottomWidth:1,
     borderBottomColor:COLORS.blueClair,
      padding: 5,
      marginRight:60,
      marginLeft:40,
    },
 
  
     
});

export default InscriptionFormateur;