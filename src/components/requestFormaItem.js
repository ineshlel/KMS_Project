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
const RequestItem=props=>{

     
    return (
  
    <View style={styles.itemContainer} >
        <View >
        <Text  style={styles.textName}>{props.name}</Text>
        </View>
    <Text style={styles.textContainer}>10/06/2021</Text>
    
        
        
   
    </View>
 );
};
const styles=StyleSheet.create({

      itemContainer:{
          flexDirection:'column',
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
          height:60,
         
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
        textContainer:{
            marginLeft:'60%',
            color:COLORS.orange,
        }

 
});
export default RequestItem;