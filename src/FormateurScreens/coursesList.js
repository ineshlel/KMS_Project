import React, { Component } from 'react';
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';

import ExpandableListViewCourse from '../components/expandableListViewCourse';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import SearchBarProgram from '../components/searchBarProgram';
import AddFixedButton from '../components/addFixedButton';
import { Button } from 'react-native';
import Loader from '../components/loader';




export default class ListCourses extends Component {
  
  constructor(props) {
    super(props);
   
      this.state = { 
      array:[],
      filteredArray:[],
      search:'',
      isLoading:false,

      
      }
  }
  
  async componentDidMount(){
    this.setState({ isLoading: true })
    //console.log('-----------',this.props.route.params)
    //this.getData();
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    fetch(apiConfig.url+`/api/cours_programme?programme=${this.props.route.params}`, {
      method: 'GET',
      headers: {
    
        'Authorization':'Bearer ' + DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  
      },
    })
    .then((response)=>response.json())
    .then((json)=>{
      this.setState({ isLoading:false })
        console.log('JSON',json)
     this.setState({array:json})
     //this.intervalID = setTimeout(this.getData.bind(this), 5000);
    })
    .catch((error)=>{
        console.error(error)
        this.setState({array:[]})
    });
 
     }
     componentWillUnmount() {
       
       //clearTimeout(this.intervalID);
     }
  /*getData=async()=>{
    
   const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
   fetch(apiConfig.url+`/api/cours_programme?programme=${this.props.route.params}`, {
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
    if (this.state.isLoading){
      return ( <Loader loading={this.state.isLoading}/> );
    } else {
    return (
      <View style={styles.container}>
        
          <View  >
        <SearchBarProgram

    
          />
        </View>
        <ScrollView 
         
         contentContainerStyle
         ={{ paddingHorizontal: 10,}}
         >
          {
            this.state.array.map((item, key) =>
              (
                <ExpandableListViewCourse style={styles.myList}
                key={item.id} 
                onClickFunction={this.updateLayout.bind(this, key)} 
                item={item} />
              ))
          }
         
        </ScrollView>
        <AddFixedButton
        idcour={this.props.route.params}/>
      </View>
    );
  }
}}
//console.log(this.state.navigation.getParam('program'));
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