import React, { useState,useEffect } from 'react'
import { Text, View ,ScrollView} from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';

import ButtonKms from './buttonV';


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
    item: 'Comp 1',
    id: "3",
  },
  {
    item: 'Comp 2',
    id:" 4",
  },
  {
    item: 'Comp 3',
    id: "5",
  },
 /* {
    item: 'Comp 1',
    id: 6,
  },
  {
    item: 'Comp 1',
    id: 7,
  },
  {
    item: 'Comp 1',
    id: 8,
  },
  {
    item: 'Comp 1',
    id: 9,
  },
  {
    item: 'Comp 1',
    id: 10,
  }*/,

]

const CheckBoxApp = () =>{
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  const [selectedTeams2, setSelectedTeams2] = useState([])
 // var jsonSelectedTeams ={};
 //const[K_OPTIONS,setK_OPTIONS]=useState([])
 //id: parseInt(team.id),



  const handleValidate=async () => {
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    const programID=await AsyncStorage.getItem('programID');
    selectedTeams.forEach(team=> {
      console.log('****** TEAM',team);
      //jsonSelectedTeams.push({titre: team.item});
    
    //console.log('---------- Json', jsonSelectedTeams);
    var dataToSend = {
		  titre: team.item,
      programme:programID,
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
    
     style={{flex:1,flexDirection:'column',paddingTop:20}}>
      
      <View style={{ marginBottom:50,marginHorizontal:10}} >
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Compétances Techniques</Text>
   
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