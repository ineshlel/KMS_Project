import React ,{useState}from 'react';

import {View,Text, StyleSheet,  TouchableOpacity,
    }from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../constants';




const LinkItem=props=>{
   return (
   
    <View style={styles.itemContainer} >
        <TouchableOpacity 
    
       // onPress={ WebViewComponent}
      
        >
        <View style={styles.container}>
         <View >
        <Text  style={styles.textName}>{props.name}</Text>
        </View>
     
        <View style={styles.downArrow}>
          <Feather 
                    name="copy"
                    color={COLORS.orange}
                    size={26}
                />
        </View>
      
        </View>
        </TouchableOpacity>
   
       </View>

    
 );
};
const styles=StyleSheet.create({
      container:{
         flex:1,
          flexDirection:'row',
      },
      itemContainer:{
        flexDirection:'column',
          marginHorizontal:10,
          marginTop:20,
         // marginTop:40,
         //marginBottom:5,
          borderRadius:10,
          borderColor:COLORS.purple,
          borderWidth:1,
          padding:8,
          width:'94%',
         backgroundColor:'white',
          shadowColor:'black',
          shadowOffset:{width:0,height:2},
          shadowRadius:6,
          shadowOpacity:0.26,
          elevation:2,
         
          },
       itemStyle:{
           flexDirection:'row',
       },
      textName:{
          fontSize:15,
          fontFamily:'Cairo Regular',
          marginBottom:5,
      },
      textCountry:{
          color:COLORS.orange
      },
      downArrow:{
         // justifyContent:'center',
          //alignItems:'center',
          marginLeft:'90%',
          //marginVertical:25,
          marginBottom:18,
          //marginTop:2,
          position:'absolute'


      },

 
});
export default LinkItem;