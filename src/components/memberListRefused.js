import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet ,TextInput,TouchableWithoutFeedback,FlatList, ScrollView}from 'react-native';

import MemberItem from './memberItem';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';

//import axios from 'axios';

//const navigation = useNavigation();

export default class MemberListRefused extends React.Component{
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
        fetch(apiConfig.url+`/api/demandes_formateur?statut=R&programme=${this.props.id_pg}`, {
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
    
    <View style={styles.Container} >
   
        <FlatList
      
         style={{flexGrow: 0}}
            data={this.state.demandes}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
            <MemberItem
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