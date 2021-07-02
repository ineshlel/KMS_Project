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
    const [input, setInput] = useState('');
   /* const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
   

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
          const newData = props.masterDataSource.filter(
            function (item) {
              const itemData = item.title
                ? item.title.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) ;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(props.masterDataSource);
          setSearch(text);
        }
      };*/
  

     
    return (
  
        <SearchBar
         // placeholder={translate('search.searchPlaceholderText')}
         placeholder='Chercher..'
          placeholderTextColor= 'rgba(151, 151, 151, 0.4)'
          //onChangeText={(value) => setInput(value)}
        

         value={input}
         // onChangeText={text=>props.onSearchFunction(text)}
          
         // value={search}
          containerStyle={styles.searchStyle}
          inputStyle={styles.inputStyle}
          inputContainerStyle={styles.inputContainerStyle}
         // showLoading={this.props.loadingMore}
          searchIcon={{color: COLORS.purple, size: 25}}
        />
 );
};
const styles=StyleSheet.create({
       searchStyle: {
        backgroundColor: '#F5F5F5',
        alignSelf: 'center',
        borderBottomWidth: 0,
        borderTopWidth: 0,
        height: 30,
        width: width,
        marginBottom:40,
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