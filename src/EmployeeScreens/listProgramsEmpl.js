import React, { Component } from 'react';
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';


import SearchBarProgram from '../components/searchBarProgram';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import ExpandableListViewAcceptedEmpl from '../components/expandableListViewEmplAccept';
import ExpandableListViewEmpl from '../components/expandableListViewEmlp';


/* {
            this.state.array.map((item, key) =>
            (
              <ExpandableListViewAccepted style={styles.myList}
              key={item.id} 
              onClickFunction={this.updateLayout2.bind(this, key)} 
              item={item} />
            ))
          } */


export default class MyListForma extends Component {
  
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    
  
   
    this.state = { 
      array:[],
      arrayAccepted:[],
      filteredArray:[],
      search:'',
      
      }
  }
  
    async componentDidMount(){
      const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
      fetch(apiConfig.url+'/api/demandes_formateur/getdemandes_participant/?date_debut__gte=2021-06-05&participant=19', {
        method: 'GET',
        headers: {
      
          'Authorization':'Bearer ' + DEMO_TOKEN,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    
        },
      })
      .then((response)=>response.json())
      .then((json)=>{
          console.log('JSON',json)
       this.setState({array:json})
       //this.intervalID = setTimeout(this.getData.bind(this), 5000);
      })
      .catch((error)=>{
          console.error(error)
          this.setState({array:[]})
      });
      fetch(apiConfig.url+'/api/demandes_formateur/getmesdemandes_participant?date_fin__gte=2021-06-18&participant=19', {
        method: 'GET',
        headers: {
      
          'Authorization':'Bearer ' + DEMO_TOKEN,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    
        },
      })
      .then((response)=>response.json())
      .then((json)=>{
          console.log('JSONAccepted',json)
       this.setState({arrayAccepted:json})
       //this.intervalID = setTimeout(this.getData.bind(this), 5000);
      })
      .catch((error)=>{
          console.error(error)
          this.setState({arrayAccepted:[]})
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
  updateLayout2 = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const arrayAccepted = [...this.state.arrayAccepted];
    arrayAccepted[index]['expanded'] = !arrayAccepted[index]['expanded'];
    this.setState(() => {
      return {
      arrayAccepted
      }
    });
  }

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
            this.state.arrayAccepted.map((item, key) =>
            (
              <ExpandableListViewAcceptedEmpl  style={styles.myList}
              key={item.id} 
              onClickFunction={this.updateLayout2.bind(this, key)} 
              item={item} />
            ))
          }
          {
            this.state.array.map((item, key) =>
              (
                <ExpandableListViewEmpl style={styles.myList}
                key={item.id} 
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