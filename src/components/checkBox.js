import React, { useState,useEffect } from 'react'
import { Text, View ,ScrollView} from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Adaptabilité',
    id: 'JUVE',
  },
  {
    item: 'Motivation',
    id: 'RM',
  },
  {
    item: 'Comp 1',
    id: 'BR',
  },
  {
    item: 'Comp 1',
    id: 'PSG',
  },
  {
    item: 'Comp 1',
    id: 'FBM',
  },
  {
    item: 'Comp 1',
    id: 'MUN',
  },
  {
    item: 'Comp 1',
    id: 'MCI',
  },
  {
    item: 'Comp 1',
    id: 'EVE',
  },
  {
    item: 'Comp 1',
    id: 'TOT',
  },
  {
    item: 'Comp 1',
    id: 'CHE',
  },

]

function CheckBoxApp() {
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  const [selectedTeams2, setSelectedTeams2] = useState([])
  //const[K_OPTIONS,setK_OPTIONS]=useState([])

  /*useEffect(async () => {
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    
  fetch(apiConfig.url+'/api/compétences/', {
    method: 'GET',
    headers: {
  
      'Authorization':'Bearer ' + DEMO_TOKEN,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',

    },
  })
      .then((response) => response.json())
      .then((responseJson) => {
        
        setK_OPTIONS(responseJson);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);*/
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
     <View style={{}} >
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Compétances Comportemental</Text>
      <SelectBox
        label="Choisir compétance"
        options={K_OPTIONS}
        selectedValues={selectedTeams2}
        onMultiSelect={onMultiChange2()}
        onTapClose={onMultiChange2()}
        isMulti
      />
     </View>
     
     </View>
   
    
  )

  function onMultiChange() {
    //console.log(selectedTeams)
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
   
  }
  function onMultiChange2() {
    return (item) => setSelectedTeams2(xorBy(selectedTeams2, [item], 'id'))
   
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}

export default CheckBoxApp;