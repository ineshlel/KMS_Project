import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal}from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const SearchBarProgram=props=>{

     
    return (
  
    <View style={styles.searchContainer} >
        <TextInput style={styles.input}
           placeholder='Search'
           //onChangeText={text=>this.onChangeText(text)}
           />
        <AntDesign style={styles.search}
          name='search1'
          size={20}
          color='#ddd'
        />
   
    </View>
 );
};
const styles=StyleSheet.create({

      searchContainer:{
          flexDirection:'row',
          width:'100',
          
      },
 
      input:{
        borderColor:'#ddd',
        borderWidth:1,
        borderRadius:5,
        padding:7,
        paddingLeft:30,
        margin:15,
        fontSize:16,
        
       },
       search:{
           position:'absolute',
           left:22,
           top:22,
       }
});
export default SearchBarProgram;