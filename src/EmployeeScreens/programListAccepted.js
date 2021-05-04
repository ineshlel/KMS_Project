import React, { Component } from 'react';
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';


import ExpandableListViewAcceptedEmpl from '../components/expandableListViewEmplAccept';
import SearchBarProgram from '../components/searchBarProgram';





export default class ProgramListAcceptedEmpl extends Component {
  
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    
  
   
    this.state = { 
      array:[],
  
      search:'',
      
      }
      this.arrayholder = [];
  }
  
    async componentDidMount(){
      let url='https://api.openbrewerydb.org/breweries';
      fetch(url)
      .then((response)=>response.json())
      .then((json)=>{
          console.log('JSON',json)
       this.setState({array:json});
       this.arrayholder = json; 

      })
      .catch((error)=>{
          console.error(error)
          this.setState({array:[]})
      });
      
  }
  searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({array: newData });  
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

  render() {
    return (
      <View style={styles.container}>
        <View  >
        <SearchBarProgram 
         onSearchFunction={this.searchFilterFunction}        
         />
        </View>
        <ScrollView 
         
         contentContainerStyle={{ paddingHorizontal: 10}}>
          {
            this.state.array.map((item, key) =>
              (
                <ExpandableListViewAcceptedEmpl
                key={item.name} 
                onClickFunction={this.updateLayout.bind(this, key)} 
                item={item} />
              ))
          }
        </ScrollView>
      
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