import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet ,TextInput,TouchableWithoutFeedback,FlatList, ScrollView}from 'react-native';

import MemberItem from './memberItem';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import AddFixedButton from './addFixedButton';
import { COLORS } from '../constants';
//import axios from 'axios';

//const navigation = useNavigation();

export default class MemberList extends React.Component{
//const FlatListPC=props=>{

 //const[programs,setPrograms]=useState([]);
 state={
   programs:[
    {
        id: 1,
        title: 'Formateur 1',
        
    },
    {
        id: 2,
        title: 'Formateur  2',
      
    },
    {
        id: 3,
        title: 'Formateur 3',
       
    },
    {
        id: 4,
        title: 'Formateur 4',
        
    },
    {
        id: 5,
        title: 'Formateur 5',
      
    },
    {
        id: 6,
        title: 'Formateur 6',
      
    },
    {
        id: 7,
        title: 'Formateur 7',
      
    },
    
 
   ]
}
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
 

    
    render(){
     
    return (
    
    <View style={styles.Container} >
        <TouchableWithoutFeedback >
        <FlatList style={{flexGrow: 1}}
            data={this.state.programs}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
            <MemberItem
              name={item.title}
             
            />
            
        }
        />

        </TouchableWithoutFeedback>
      
     
        
        
        
   
    </View>
 )
}}
const styles=StyleSheet.create({

      Container:{
          flexDirection:'column',
          backgroundColor:'white',
          height:400,
          width:320,
          padding:10,
         borderRadius:10,
          margin:10,
         justifyContent:'center',
        // backgroundColor:COLORS.blue,
        
          
      },
     
 
});

//export default FlatListPC;