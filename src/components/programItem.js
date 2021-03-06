import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput}from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { COLORS } from '../constants';


const ProgramItem=props=>{

    const[icon,setIcon]=useState(<FontAwesome5 
        name="chevron-down"
        color={COLORS.blueClair}
        size={22}
    />);

    const onOpenItemHandler=()=>{
        setIcon(currentIcon=>{return (<FontAwesome5 
            name="chevron-up"
            color={COLORS.blueClair}
            size={22}
        />);})

    }

     
    return (
    <View>
    <View style={styles.itemContainer} >
        <View >
        <Text  style={styles.textName}>{props.name}</Text>
        <Text  style={styles.textCountry}>{props.duration}</Text>
        </View>
        <View style={styles.downArrow}>
          <FontAwesome5 
                    name="chevron-down"
                    color={COLORS.blueClair}
                    size={22}
                />
        </View>
        </View>
        <View style={styles.suppicon}>
          
        </View>
        
        </View>   
 );
};
const styles=StyleSheet.create({

      itemContainer:{
          flexDirection:'row',
          marginHorizontal:15,
          marginVertical:5,
         // marginTop:40,
         //marginBottom:5,
          borderRadius:10,
          borderColor:'#ddd',
          borderWidth:1,
          padding:10,
          width:'90%',
         backgroundColor:'white',
          shadowColor:'black',
          shadowOffset:{width:0,height:2},
          shadowRadius:6,
          shadowOpacity:0.26,
          elevation:4,
         
          },
       itemStyle:{
           flexDirection:'row',
       },
      textName:{
          fontSize:15,
          fontWeight:'bold',
          marginBottom:5,
      },
      textCountry:{
          color:COLORS.orange
      },
      downArrow:{
         // justifyContent:'center',
          //alignItems:'center',
          marginLeft:'90%',
         
          marginVertical:20,
          position:'absolute'


      },
      suppicon:{
        top:6,

        marginLeft:'92%',
        marginVertical:20,
        position:'absolute'

      }

 
});
export default ProgramItem;