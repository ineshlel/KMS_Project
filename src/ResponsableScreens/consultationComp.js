import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet , ScrollView,Alert,FlatList}from 'react-native';
import { COLORS } from '../constants';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import SkillItem from '../components/skillItem';




const ConsultationComp=props=>{
 
    const[skills,setSkills]=useState([]);
   
      useEffect(async() => {
        const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
        fetch(apiConfig.url+`/api/compétences_programmes?programme=${props.id_pg}`, {
          method: 'GET',
          headers: {
        
            'Authorization':'Bearer ' + DEMO_TOKEN,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('JSONSkills',responseJson)
            setSkills(responseJson)
          })
          .catch((error) => {
            console.error(error);
            setSkills([])
          });
      }, []);
 
    return (
    <ScrollView>
    <View  style={styles.formContainer}>
    <View style={styles.titleStyle}>
    <Text  style={styles.textStyle2}>Les compétances à developper pour ce programme sont:</Text>
    </View>
    
  
    <View >
    <FlatList
      
         style={{flexGrow: 0}}
            data={skills}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
            <SkillItem 
            value={item.titre}
            />
            
        }
        />
 
    </View>
 
   
     
   
    
    
    
</View>
   </ScrollView> 
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
        padding:10,
        //marginBottom:10
        marginTop:20,
    
      },
      button:{
        width:'90%',
        color:'blue',
        borderRadius:20,
        //marginLeft:60,
        marginTop:20,

      },
      textStyle:{
        fontSize:20,
        color:COLORS.purple,
        justifyContent:'center',
        textAlign:'center',
        
        },
        textStyle2:{
            fontSize:16,fontFamily:"Cairo-Bold",
            color:COLORS.purple,
        },
        titleStyle:{
            marginBottom:10,
        },
        listStyle:{
          margin:5,
          
        },
     
});

export default ConsultationComp;