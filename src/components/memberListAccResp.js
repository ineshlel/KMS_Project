import React, { Component } from 'react';
import { LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';

import ExpandableListViewMember from './expandableListViewMember';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';


export default class MemberListAccResp extends Component {
  
    constructor(props){
        super(props)
          this.intervalID,
         this.state={
           array:[]
            
        }}
        //json hiyya response data
         async componentDidMount(){
          
             this.getDemandes();
            
           }
           componentWillUnmount() {
            clearTimeout(this.intervalID);
          }
        getDemandes=async()=>{
            const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
            fetch(apiConfig.url+`/api/demandes_formateur?statut=A&programme=${this.props.id_pg}`, {
              method: 'GET',
              headers: {
            
                'Authorization':'Bearer '+ DEMO_TOKEN,
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          
              },
            })
               .then((response)=>response.json())
               .then((json)=>{
                   console.log('JSONDEMANDES_ACC',json)
                this.setState({demandes:json})
                this.intervalID = setTimeout(this.getDemandes.bind(this), 5000);
               })
               .catch((error)=>{
                   console.error(error)
                   this.setState({demandes:[]})
                  
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
                <ExpandableListViewMember  style={styles.myList}
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
    /*flexDirection:'column',
    backgroundColor:'white',
    height:400,
    width:320,
   padding:10,
    borderRadius:10,
     margin:10,*/

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