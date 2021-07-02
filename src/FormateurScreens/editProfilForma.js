import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  
} from 'react-native';

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';
import { COLORS } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from "jwt-decode";
import apiConfig from '../api/config';


const bs = React.createRef();
const fall = new Animated.Value(1);
const EditProfileFormaScreen = ({route}) => {
 
 //const participant=route.params;
 const {   username_,full_name, telephone, eamil_, poste_, entreprise_, specialite_,avatar_} = route.params;
console.log(route.params);
    const[username,setUsername]=useState(username_);
    const[tel,setTel]=useState(telephone);
    const[avatar,setAvatar]=useState();
    const[tdecoded,setTdecoded]=useState({});
    const[email,setEmail]=useState(eamil_);
    const[fullname,setFullname]=useState();
    const[poste,setPoste]=useState();
    const[entreprise,setEntreprise]=useState();
    const[specialite,setSpecialite]=useState();
  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const {colors} = useTheme();
 
  

  const takePhotoFromCamera = () => {
      
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
    
      bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
     cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log("HHHHHHHHHH",image.path);
      setImage(image.path);
      setAvatar(image.path);
    
   bs.current.snapTo(1);
    });
  }
  const handleSubmitButton=async()=>{

    //setLoading(true);
    const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
    setTdecoded( jwt_decode(DEMO_TOKEN));
    console.log(tdecoded.user_id);
    console.log(avatar);
    console.log(username,email,tel)
    /*const dataup = new FormData();
        dataup.append('avatar', avatar);
        dataup.append('username', username );
        dataup.append('first_name',"ilef");
        dataup.append('last_name',"hlel");
        dataup.append('email',email);
        dataup.append('tel',tel);*/

  var dataToSend = {
    "username":username ,
    "first_name": "ilef",
    "last_name": "hlel",
    "email": email,
    //"avatar":avatar,
    "tel":tel,
  };
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');


  fetch(apiConfig.url+`/auth/update_profile/${tdecoded.user_id}`, {
      method: 'PUT',
      body:formBody ,
      headers: {
    
        'Authorization':'Bearer '+ DEMO_TOKEN,
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
  
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
       // setLoading(false);
        console.log(responseJson);
     
        Alert.alert("Le profile a été modifié");
      
      
      })
      .catch((error) => {
        //Hide Loader
       // setLoading(false);
        console.error(error);
      });
  


}

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Importer Photo</Text>
        <Text style={styles.panelSubtitle}>Choisir Votre Photo de Profil</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Prendre Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choisir de Votre Galerie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Fermer</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

 

  return (
    <ScrollView>
        <View style={styles.container}>
      <BottomSheet
       ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() =>bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100,borderColor:"#777777",borderBottomWidth:1}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    marginTop:60,
                    marginLeft:60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#777777"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#777777',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
           {full_name}
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="UserName"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={username => setTel(username)}
            defaultValue={username}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={tel => setTel(tel)}
            defaultValue={tel}
 
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            onChangeText={email => setTel(email)}
            defaultValue={email}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" color={colors.text} size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
    
        <TouchableOpacity style={styles.commandButton} onPress={handleSubmitButton}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
    </ScrollView>
  );
};

export default EditProfileFormaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: COLORS.blueClair,
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});