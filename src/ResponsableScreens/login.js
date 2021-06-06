import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import jwt_decode from "jwt-decode";

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../constants';
import {AuthContext} from '../contexts/authContext';
import Users from '../models/users';
import Loader from '../components/loader';
import AsyncStorage from '@react-native-community/async-storage';
import apiConfig from '../api/config';
//import Users from  '../models/users';
//import ForgotPassword from './forgotPassw';
//import I18n from "../I18n/i18n";
//import Signin from '../Screens/Signin';
const Login = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        loading:false,
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidUser:true,
        isValidPassword:true,
    });
  

    //const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4  ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 3 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

   

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }
    const loginHandle = () => {

        //const foundUser = Users.filter( item => {
          //  return userName == item.username && password == item.password;
       // } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

       /* if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }*/
        setData({
            ...data,
            loading: true,
        });
        let dataToSend = {username: data.username, password: data.password};
        let formBody = [];
        for (let key in dataToSend) {
          let encodedKey = encodeURIComponent(key);
          let encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
    
        fetch(apiConfig.url+'/auth/signin/', {
          method: 'POST',
          body:formBody,
          headers: {
         
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
    })
          .then((response) => response.json())
          
          .then((responseJson) => {
            //Hide Loader
            console.log("/////////");
            setData({
                ...data,
                loading:false,
            });
            console.log(responseJson);
            
           
           // Alert.alert("User register successfully \n userId: "+responseJson.token);
            
            // If server response message same as Data Matched
            if (responseJson.status_code === 200) {
                Alert.alert("User logged successfully \n userId: "+responseJson.token);
              try {
               AsyncStorage.setItem('userToken', responseJson.token);
              
               var decoded = jwt_decode(responseJson.token);
               console.log(decoded);
               console.log(decoded.user_id);
               AsyncStorage.setItem('userID', decoded.user_id);
               AsyncStorage.setItem('userName', decoded.username);
               console.log("********************");
               logCurrentStorage();
               console.log("####################");
              } catch(e) {
                console.log(e);
              }
             // console.log(responseJson.token);
             
              
              //
             if(decoded.role="F"){
              //navigation.replace('TabNavigatorForma');
               navigation.replace('TabNavigator');
                
             }
             else if (decoded.role="F"){
                navigation.replace('TabNavigatorEmpl');
             }
             else{
                navigation.replace('TabNavigator');
               
             }
              
             
              
             
            } else {
              //setErrortext(responseJson.message);
              console.log('Please check your email id or password');
              Alert.alert("Utilistaeur non trouvé");
            }
          })
          .catch((error) => {
            //Hide Loader
            setData({
                ...data,
                loading:false,
            });
            console.error(error);
          });
    }
    function logCurrentStorage() {
        AsyncStorage.getAllKeys((err, keys) => {
          AsyncStorage.multiGet(keys, (error, stores) => {
            stores.map((result, i, store) => {
              console.log({ [store[i][0]]: store[i][1] });
              return true;
            });
          });
        });
      }

    return (
      <View style={styles.container}>
           <Loader loading={data.loading} />
          <StatusBar backgroundColor= {COLORS.grey}barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Connexion</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather name="lock"color="#05375a"size={20}/>
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)
                    }
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            
            <View>
           <TouchableOpacity   onPress={() => navigation.navigate('ForgotPassword')}>
           <Text style={styles.Fpsswd}>Forgot Password?</Text>
           </TouchableOpacity>
                
                
                </View>
                <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                  //onPress={() => navigation.navigate('TabNavigator')}
                   //onPress={() => navigation.navigate('TabNavigatorEmpl')}
                   //{ ...Users.filter(userToken)  userToken !== null ? (
                  onPress={loginHandle}
                    
                >
                <LinearGradient
                    colors={[COLORS.blueClair, '#57B8DF']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                
                  //onPress={() => navigation.navigate('TabNavigator')}
                 // onPress={() => navigation.navigate('TabNavigatorForma')}
                 onPress={() => navigation.navigate('SignUp')}
                    style={[styles.signIn, {
                        borderColor: COLORS.blueClair,
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: COLORS.blueClair
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: COLORS.purple
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
       marginLeft:60,
        
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        marginLeft:10,
        marginRight:10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
     
    },
    text_header: {
        color: '#fff',
        fontSize: 30,
        marginLeft :20,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    Fpsswd:{
        fontSize:12,
        color:COLORS.blueClair,
        marginStart:200,
        marginTop:10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.blueClair,

    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },

  });