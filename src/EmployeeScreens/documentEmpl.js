import React, {useState,useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import required components
/* */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList
} from 'react-native';



import { COLORS } from '../constants';
import ConsigneItem from '../components/consigneItem';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';




const DocumentCourseEmpl = props => {
  
  const[documents,setDocuments]=useState([]);
 
  useEffect(async() => {
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
   
    fetch(apiConfig.url+`/api/documents_cours?cours=${props.id_c}`, {
      method: 'GET',
      headers: {
    
        'Authorization':'Bearer ' + DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('JSONDocuments',responseJson)
        setDocuments(responseJson)
      })
      .catch((error) => {
        console.error(error);
        setDocuments([])
      });
  }, []);

 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
       
        {/*To multiple single file attribute*/}
     
     
      </View>
      <View>
      <FlatList
      
         style={{flexGrow: 0}}
            data={documents}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
            <ConsigneItem
            id ={item.id}
            name={item.file_name}
            />
            
        }
        />
 
    </View>
   
   
    </SafeAreaView>
  );
};

export default DocumentCourseEmpl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    padding: 12,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  addButton:{
    width:90,
    height:40,
    borderRadius:14,
    backgroundColor:COLORS.blueClair,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
 

},
});