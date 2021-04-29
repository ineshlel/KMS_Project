import React, { Component } from 'react';
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';
import AddFixedButton from '../components/addFixedButton';
import ExpandableListView from '../components/expandableListView';
import SearchBarProgram from '../components/searchBarProgram';





export default class MyListForma extends Component {
  
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    
  
   
    this.state = { 
      array:[],
      filteredArray:[],
      search:'',
      
      }
  }
  
    async componentDidMount(){
      let url='https://api.openbrewerydb.org/breweries';
      fetch(url)
      .then((response)=>response.json())
      .then((json)=>{
          console.log('JSON',json)
       this.setState({array:json})
      })
      .catch((error)=>{
          console.error(error)
          this.setState({array:[]})
      });
      
  }

  // enable layout animation, toggle 'expanded' state for index and then update the layout
  updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.array];
    array[index]['expanded'] = !array[index]['expanded'];
    this.setState(() => {
      return {
      array
      }
    });
  }
 /*searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = array.filter(
        function (item) {
          const itemData = item.title
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) ;
      });
      this.setState({filteredArray:[newData]})
      //setFilteredDataSource(newData);
      this.setState({search:text})
     // setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      this.setState({filteredArray:[array]})
      //setFilteredDataSource(masterDataSource);
      this.setState({search:text})
      //setSearch(text);
    }
  }*/

  render() {
    return (
      <View style={styles.container}>
        <View  >
        <SearchBarProgram 

    
          />
        </View>
        <ScrollView 
         
         contentContainerStyle={{ paddingHorizontal: 10}}>
          {
            this.state.array.map((item, key) =>
              (
                <ExpandableListView 
                key={item.name} 
                onClickFunction={this.updateLayout.bind(this, key)} 
                item={item} />
              ))
          }
        </ScrollView>
        <AddFixedButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#F5FCFF',
  },
  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'
  },
  subCategoryText: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },
  categoryText: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 21,
    padding: 10
  },
  categoryView: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0091EA'
  },
  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  }
});