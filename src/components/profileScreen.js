import React,{useState,useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,

} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from "jwt-decode";
import apiConfig from '../api/config';
import StaticInput from './staticInput';
import { COLORS } from '../constants';


//import Share from 'react-native-share';

//import files from '../assets/filesBase64';

const ProfileScreen = () => {
     
    const[pathimage,setPathimage]=useState();
    const[tdecoded,setTdecoded]=useState({});
    const[fullname,setFullname]=useState();
    const[poste,setPoste]=useState();
    const[entreprise,setEntreprise]=useState();
    const[specialite,setSpecialite]=useState();
    const[tel,setTel]=useState();
    const[avatar,setAvatar]=useState();

    const navigation = useNavigation();
   
  useEffect( async() => {
  
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
     //var decoded = jwt_decode(DEMO_TOKEN);
              // console.log(decoded);
              //${tdecoded.user_id}
               setTdecoded( jwt_decode(DEMO_TOKEN));
               console.log(tdecoded.user_id);
              
    fetch(apiConfig.url+`/auth/participants/${tdecoded.user_id}`, {
      method: 'GET',
      headers: {
    
        'Authorization':'Bearer ' + DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //setFilteredDataSource(responseJson);
       console.log(responseJson);
       setFullname(responseJson.fullname);
       setEntreprise(responseJson.entreprise);
       setPoste(responseJson.poste);
       setSpecialite(responseJson.specialite);
   
  
      })
      .catch((error) => {
        console.error(error);
      });
      fetch(apiConfig.url+`/auth/users/${tdecoded.user_id}`, {
        method: 'GET',
        headers: {
      
          'Authorization':'Bearer ' + DEMO_TOKEN,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //setFilteredDataSource(responseJson);
         console.log("USER",responseJson);
         setTel(responseJson.tel);
         setAvatar(responseJson.avatar);
          
     
    
        })
        .catch((error) => {
          console.error(error);
        });
  },
  
   []);


  return (
    <ScrollView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: avatar,
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{fullname}</Title>
            <Caption style={styles.caption}>{tdecoded.username}</Caption>
          </View>
          <TouchableOpacity  onPress={() => navigation.navigate('EditProfile',  {
          username_:tdecoded.username,
          full_name:fullname,
          telephone:tel,
          eamil_:tdecoded.email,
          poste_:poste,
          entreprise_:entreprise,
          specialite_:specialite,
          avatar_:avatar,
       

          })}>
          <View  style={{marginLeft: 80}}>
          <Feather name="edit" color={COLORS.orange} size={26}/>
          </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color={COLORS.orange}  size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Tunisia</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color={COLORS.orange}  size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{tel}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color={COLORS.orange}  size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{tdecoded.email}</Text>
        </View>
        <StaticInput name='Entreprise :'
    value={entreprise}
    />
    <StaticInput name='Poste :'
   value={poste}
    />
    <StaticInput name='Sp??cialit?? :'
    value={specialite}
    />
      </View>
     

   

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple 
       // onPress={myCustomShare}
        >
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('SplashScreen')}>
          <View style={styles.menuItem}>
            <MaterialIcons name="logout" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Se d??connecter</Text>
          </View>
        </TouchableRipple>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
   fontFamily:'Cairo-Bold',
   color:COLORS.purple,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});