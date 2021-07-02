import React, { Component } from 'react';
import { LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';

import ExpandableListView from './expandableListView';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import ExpandableListViewRes from './expandableListViewRes';


export default class MyList extends Component {
  
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    
  
    this.intervalID,
    this.state = { 
      array:[],
      //arrayForma:[],
      filteredArray:[],
      search:'',
      
      }
  };

  
  componentDidMount(){
     this.getData();
    // this.getData1();
      }
      componentWillUnmount() {
        
        //clearTimeout(this.intervalID);
      }
   getData=async()=>{
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    fetch(apiConfig.url+'/api/programmes/', {
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

   }
   /*getData1=async()=>{
     console.log('ineeeeeeeeees');
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    fetch(apiConfig.url+'/api/demandes_formateur?statut=A', {
      method: 'GET',
      headers: {
    
        'Authorization':'Bearer ' + DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  
      },
    })
    .then((response)=>response.json())
    .then((json)=>{
        console.log('JSONFORMATEURPROGRAMMES',json)
     this.setState({arrayForma:json})
     //this.intervalID = setTimeout(this.getData.bind(this), 5000);
    })
    .catch((error)=>{
        console.error(error)
        this.setState({arrayForma:[]})
    });

   }  updateLayout1 = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const arrayForma = [...this.state.arrayForma];
    arrayForma[index]['expanded'] = !arrayForma[index]['expanded'];
    this.setState(() => {
      return {
      arrayForma
      }
    });
  }
  {
    this.state.arrayForma.map((item, key) =>
      (
        <ExpandableListViewRes style={styles.myList}
        key={item.id} 
        onClickFunction={this.updateLayout1.bind(this, key)} 
        item={item} />
      ))
  }*/

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
       
        <ScrollView 
         
         contentContainerStyle
         ={{ paddingHorizontal: 10,}}
         >
        
          {
            this.state.array.map((item, key) =>
              (
                <ExpandableListView  style={styles.myList}
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
    flexDirection:'column',
    
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
  },
  myList:{
    marginTop:40,
    position:'relative',

  }
});