import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,FlatList}from 'react-native';

import ProgramItem from './programItem';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import AddFixedButton from './addFixedButton';
//import axios from 'axios';

//const navigation = useNavigation();

//export default class FlatListPC extends React.Component{
const FlatListPC= ({navigation,props}) =>{

 const[programs,setPrograms]=useState([]);
/* state={
   programs:[],
  
}*/
useEffect(() => {
  fetch('https://api.openbrewerydb.org/breweries')
    .then((response) => response.json())
    .then((responseJson) => {
      setPrograms(responseJson);
     
    })
    .catch((error) => {
      console.error(error);
    });
}, []);
//json hiyya response data
 /*async componentDidMount(){
       let url='https://api.openbrewerydb.org/breweries';
       fetch(url)
       .then((response)=>response.json())
       .then((json)=>{
           console.log('JSON',json)
        this.setState({programs:json})
       })
       .catch((error)=>{
           console.error(error)
           this.setState({programs:[]})
       });
       
   }*/
   /*async componentDidMount(){
     axios.get('https://api.openbrewerydb.org/breweries')
     .then((response)=>{
      this.setState({programs:response.data})
      console.log(response.data);
     });
   }*/
 

    
    
     
    return (
  
    <View style={styles.Container} >
        <FlatList
            data={programs}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
            <ProgramItem
              name={item.name}
              country={item.country}
            />
        }
          />
       <AddFixedButton
        onAdd={() => navigation.navigate('InformationTask')}
       
       />
        
        
   
    </View>
 )
}
const styles=StyleSheet.create({

      Container:{
          flexDirection:'row',
          backgroundColor:'#858FE8',
          
      },
     
 
});

export default FlatListPC;