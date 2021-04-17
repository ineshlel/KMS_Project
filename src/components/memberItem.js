import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput}from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../constants';

/* <View style={styles.downArrow}>
          <FontAwesome5 
                    name="chevron-down"
                    color='#858FE8'
                    size={22}
                />
        </View>*/

//<Text  style={styles.textCountry}>{props.country}</Text>
const MemberItem=props=>{

     
    return (
  
    <View style={styles.itemContainer} >
        <View >
        <Text  style={styles.textName}>{props.name}</Text>
        </View>
    
        
        
   
    </View>
 );
};
const styles=StyleSheet.create({

      itemContainer:{
          flexDirection:'row',
          marginHorizontal:25,
          marginVertical:5,
          borderRadius:10,
          borderColor:COLORS.purple,
          borderWidth:1,
          padding:10,
          width:'85%',
          backgroundColor:'white',
          shadowColor:'black',
          shadowOffset:{width:0,height:2},
          shadowRadius:6,
          shadowOpacity:0.26,
          elevation:8,
         
          },
       itemStyle:{
           flexDirection:'row',
       },
      textName:{
          fontSize:15,
          //fontWeight:'bold',
          marginBottom:5,
      },
      textCountry:{
          color:'gray'
      },
      downArrow:{
         // justifyContent:'center',
          //alignItems:'center',
          marginLeft:'92%',
          marginVertical:20,
          position:'absolute'


      },

 
});
export default MemberItem;