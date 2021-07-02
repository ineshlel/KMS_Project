import React, { useState,useEffect } from 'react'
import { Text, View ,ScrollView,Alert} from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';

import ButtonKms from './buttonV';
import { COLORS } from '../constants';


// Options data must contain 'item' & 'id' keys

/*  <View style={{}} >
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Compétances Comportemental</Text>
      <SelectBox
        label="Choisir compétance"
        options={K_OPTIONS}
        selectedValues={selectedTeams2}
        onMultiSelect={onMultiChange2()}
        onTapClose={onMultiChange2()}
        isMulti
      />
     </View>*/




const K_OPTIONS = [
  {
    item: 'Adaptabilité',
    id:"1",
  },
  {
    item: 'Motivation',
    id: "2",
  },
  {
    item: 'Précision analytique',
    id: "3",
  },
  {
    item: 'Prospectivité',
    id:" 4",
  },
  {
    item: 'Professionnalisme',
    id: "5",
  },
  {
    item: 'intégrité',
    id: 6,
  },
 
  {
    item: 'responsabilité',
    id: 7,
  },
  {
    item: 'polyvalence',
    id: 8,
  },

  {
    item: 'Etude de faisabilité',
    id: 9,
  },
  {
    item: 'Fiabilité',
    id: 10,
  }

]

const CheckBoxApp = ({route}) =>{
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  const [selectedTeams2, setSelectedTeams2] = useState([])
  console.log(route.params);
 // var jsonSelectedTeams ={};
 //const[K_OPTIONS,setK_OPTIONS]=useState([])
 //id: parseInt(team.id),



  const handleValidate=async () => {
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    //const programID=await AsyncStorage.getItem('programID');
    selectedTeams.forEach(team=> {
      console.log('****** TEAM',team);
      //jsonSelectedTeams.push({titre: team.item});
    
    //console.log('---------- Json', jsonSelectedTeams);
    var dataToSend = {
		  titre: team.item,
      programme:route.params,
		};
		var formBody = [];
		for (var key in dataToSend) {
		  var encodedKey = encodeURIComponent(key);
		  var encodedValue = encodeURIComponent(dataToSend[key]);
		  formBody.push(encodedKey + '=' + encodedValue);
		}
		formBody = formBody.join('&');
    
  fetch(apiConfig.url+'/api/compétences_programmes/', {
    method: 'POST',
    body:formBody,
    headers: {
  
      'Authorization':'Bearer ' + DEMO_TOKEN,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',

    },
  })
      .then((response) => response.json())
      .then((responseJson) => {
        
        //setK_OPTIONS(responseJson);
        console.log(responseJson);
        Alert.alert("Le programme Développement de tableaux de bord a été ajouté");
        console.log("////////////");
      })
      .catch((error) => {
        console.error(error);
      });
    }
    )
   
  }
  return (
   
    <View 
    
     style={{flex:1,flexDirection:'column',paddingTop:20,backgroundColor:'#fff'}}>
      
      <View style={{ marginBottom:50,marginHorizontal:10}} >
      <Text style={{ fontSize: 20, paddingBottom: 10,fontFamily:'Cairo-SemiBold',color:COLORS.purple }}>Compétances :</Text>
   
      <SelectBox 
        label="Choisir compétance"
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
    </View>
    <ButtonKms  title='Valider'
    onValidate={handleValidate}
    />
     
     </View>
   
    
  )

  function onMultiChange() {
   return (item) => setSelectedTeams(xorBy(selectedTeams, [item],'id'))
   
   
  }
  function onMultiChange2() {
    return (item) => setSelectedTeams2(xorBy(selectedTeams2, [item], 'id'))
   
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}

export default CheckBoxApp;