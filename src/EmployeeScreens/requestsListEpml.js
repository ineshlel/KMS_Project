import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet ,FlatList, }from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RequestItem from '../components/requestFormaItem';
import { useNavigation } from '@react-navigation/native';


//import axios from 'axios';

//const navigation = useNavigation();
const RequestsListEmpl =(props)=>{
  const navigation = useNavigation();
   /* useEffect(() => {
        fetch('https://api.openbrewerydb.org/breweries')
          .then((response) => response.json())
          .then((responseJson) => {
            setPrograms(responseJson);
           
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);*/
  const[requests,setRequests]=useState(
  [
    {
        id: 1,
        title: 'Demande 1',
        
    },
    {
        id: 2,
        title: 'Demande   2',
      
    },
    {
        id: 3,
        title: 'Demande  3',
       
    },
    {
        id: 4,
        title: 'Demande 4',
    },
    
 
    ]);
 

    

     
    return (
    
    <View style={styles.Container} >
       
        <FlatList
         
         style={{flexGrow: 0}}
            data={requests}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
           <TouchableOpacity onPress={() => navigation.navigate('RequestInfo')}>
             <RequestItem
              name={item.title}/>  
           </TouchableOpacity> 
            
        }
        />

   
      
     
        
        
        
   
    </View>
 )
    }
const styles=StyleSheet.create({

      Container:{
         flex:1,
          flexDirection:'column',
          //backgroundColor:'white',
          //height:400,
       // width:320,
          padding:10,
         borderRadius:10,
          margin:10,
         justifyContent:'center',
        // backgroundColor:COLORS.blue,
        
          
      },
     
 
});
export default RequestsListEmpl;