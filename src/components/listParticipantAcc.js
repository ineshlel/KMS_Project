import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet ,TextInput,TouchableWithoutFeedback,FlatList, ScrollView}from 'react-native';


import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import ParticipantItem from './participantItem';

//import axios from 'axios';

//const navigation = useNavigation();

export default class ParticipantListAcc extends React.Component{
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
        fetch(apiConfig.url+`/api/demandes_participant/?demande_formateur=${this.props.iddm}&statut=A`, {
          method: 'GET',
          headers: {
        
            'Authorization':'Bearer '+ DEMO_TOKEN,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      
          },
        })
           .then((response)=>response.json())
           .then((json)=>{
               console.log('JSON-PARTICIPANT-ACCEPTED',json)
               //console.log('DEMANDES------------PARTCIPANT',json[0].demandes_participants)
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
    
    <View style={styles.Container} >
   
        <FlatList
      
         style={{flexGrow: 0}}
            data={this.state.demandes}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
            <ParticipantItem
            name={item.participant_name}
            //form_name={item.formateur_name}
           // prog_name={item.programme_name}
            ddd={item.date_demande}
            //dfd={item.date_fin}
            id_pa={item.participant}
            id_dm={item.demande_formateur}
            id_dmp={item.id}
            //id_pg={item.programme}
            //id_f={item.formateur}
            st={item.statut}
              //onGoDetails={this.navigation.navigate('RequestDetailsForma')}
             
            />
            
        }
        />
    

   
      
     
        
        
        
   
    </View>
 )
}}
const styles=StyleSheet.create({

      Container:{
         //flex:1,
        flexDirection:'column',
         backgroundColor:'white',
         height:400,
         width:320,
        padding:10,
         borderRadius:10,
          margin:10,
        // justifyContent:'center',
        // backgroundColor:COLORS.blue,
        
          
      },
     
 
});