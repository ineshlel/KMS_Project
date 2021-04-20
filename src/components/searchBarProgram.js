import React ,{useState}from 'react';

import {View,Text, StyleSheet ,Dimensions}from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SearchBar } from 'react-native-elements';
import { COLORS } from '../constants';

const{width,height}=Dimensions.get("window");

/* <TextInput style={styles.input}
           placeholder='Search'
           //onChangeText={text=>this.onChangeText(text)}
           />
        <AntDesign style={styles.search}
          name='search1'
          size={20}
          color='#ddd'
        />*/


const SearchBarProgram=props=>{

     
    return (
  
        <SearchBar
         // placeholder={translate('search.searchPlaceholderText')}
         placeholder='Chercher..'
          placeholderTextColor= 'rgba(151, 151, 151, 0.4)'
         // onChangeText={this.updateSearch}
          //value={this.state.input}
          containerStyle={styles.searchStyle}
          inputStyle={styles.inputStyle}
          inputContainerStyle={styles.inputContainerStyle}
         // showLoading={this.props.loadingMore}
          searchIcon={{color: COLORS.purple, size: 25}}
        />
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
       },
       searchStyle: {
        backgroundColor: '#F5F5F5',
        alignSelf: 'center',
        borderBottomWidth: 0,
        borderTopWidth: 0,
        height: 30,
        width: width,
        },
      inputContainerStyle: {
        backgroundColor: '#FFFFFF',
        borderRadius:15,
       // borderColor:COLORS.blueClair,
        //borderWidth:1,
        elevation:8,
      },
      inputStyle: {
        backgroundColor: '#FFFFFF',
        color: '#595959',
      },
});
export default SearchBarProgram;