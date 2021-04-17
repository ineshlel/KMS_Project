import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput}from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const ProgramItem=props=>{

    const[icon,setIcon]=useState(<FontAwesome5 
        name="chevron-down"
        color='#858FE8'
        size={22}
    />);

    const onOpenItemHandler=()=>{
        setIcon(currentIcon=>{return (<FontAwesome5 
            name="chevron-up"
            color='#858FE8'
            size={22}
        />);})

    }

     
    return (
  
    <View style={styles.itemContainer} >
        <View >
        <Text  style={styles.textName}>{props.name}</Text>
        <Text  style={styles.textCountry}>{props.country}</Text>
        </View>
        <View style={styles.downArrow}>
          <FontAwesome5 
                    name="chevron-down"
                    color='#858FE8'
                    size={22}
                />
        </View>
        
        
   
    </View>
 );
};
const styles=StyleSheet.create({

      itemContainer:{
          flexDirection:'row',
          marginHorizontal:30,
          marginVertical:5,
          borderRadius:10,
          borderColor:'#ddd',
          borderWidth:1,
          padding:10,
          width:'82%',
         backgroundColor:'white',
          shadowColor:'black',
          shadowOffset:{width:0,height:2},
          shadowRadius:6,
          shadowOpacity:0.26,
          elevation:12,
         
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
export default ProgramItem;