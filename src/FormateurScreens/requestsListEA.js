import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet ,TextInput,TouchableWithoutFeedback,FlatList, ScrollView}from 'react-native';

import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from "jwt-decode";
import MemberItem from '../components/memberItem';
import RequestItem from '../components/requestFormaItem';
import { SafeAreaView } from 'react-native-safe-area-context';

//import axios from 'axios';

//const navigation = useNavigation();

export default class RequestsListEA extends React.Component{
constructor(props){
super(props)
  this.intervalID,
 this.state={
   demandes:[]
    
}}
//json hiyya response data
 async componentDidMount(){
  
     this.getDemandes();
    
   }
   componentWillUnmount() {
    clearTimeout(this.intervalID);
  }
getDemandes=async()=>{
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    var decoded = jwt_decode(DEMO_TOKEN);
    fetch(apiConfig.url+`/api/demandes_formateur?statut=EA&programme=${this.props.id_pg}&formateur=${decoded.user_id}`, {
      method: 'GET',
      headers: {
    
        'Authorization':'Bearer '+ DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  
      },
    })
       .then((response)=>response.json())
       .then((json)=>{
           console.log('JSONDEMANDES',json)
        this.setState({demandes:json})
        this.intervalID = setTimeout(this.getDemandes.bind(this), 5000);
       })
       .catch((error)=>{
           console.error(error)
           this.setState({demandes:[]})
          
       });

}
 

    
    render(){
     
    return (
    
    <SafeAreaView style={styles.Container} >
   
        <FlatList
      
        // style={{flexGrow: 0}}
            data={this.state.demandes}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
            <RequestItem
              name={item.formateur_name}
              ddd={item.date_debut}
              dfd={item.date_fin}
              id_dm={item.id}
              id_pg={item.programme}
              id_f={item.formateur}
              st={item.statut}
              //onGoDetails={this.navigation.navigate('RequestDetailsForma')}
             
            />
            
        }
        />
    
</SafeAreaView>
 )
}}
const styles=StyleSheet.create({

      Container:{
        flex:1,
        flexDirection:'column',
         //backgroundColor:'white',
         //height:400,
        //width:320,
        padding:10,
         borderRadius:10,
          margin:10,
        // justifyContent:'center',
        // backgroundColor:COLORS.blue,
        
          
      },
     
 
});
