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
    Image,
    StatusBar,Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import I18n from "../I18n/i18n";
import { RadioButton } from 'react-native-paper';

import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../constants';
import apiConfig from '../api/config';
import Loader from '../components/loader';
//import MyComponent from '../components/radioButton';
//import I18n from "../I18n/i18n";
const SignUp = ({navigation}) => {
    const [loading, setLoading] = React.useState(false);
    const [
      isRegistraionSuccess,
      setIsRegistraionSuccess
    ] = React.useState(false);
    const [data, setData] = React.useState({
        username: '',
        password: '',
        password2:'',
        firstname:'',
        lastname:'',
        email:'',
        role:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const [fdata,setFData]=React.useState({
        poste:'',
        specialité:'',
        entreprise:'',
        user:'',

    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    const textInputChangeFirstName = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                firstname: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                firstname: val,
                check_textInputChange: false
            });
        }
    }
    const textInputChangeLastName = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                lastname: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                lastname: val,
                check_textInputChange: false
            });
        }
    }
    const textInputChangeEmail = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }
    const textInputChangePoste = (val) => {
        if( val.length !== 0 ) {
            setFData({
                ...fdata,
                poste: val,
                check_textInputChange: true
            });
        } else {
            setFData({
                ...fdata,
                poste: val,
                check_textInputChange: false
            });
        }
    }
    const textInputChangeSpe = (val) => {
        if( val.length !== 0 ) {
            setFData({
                ...fdata,
                specialité: val,
                check_textInputChange: true
            });
        } else {
            setFData({
                ...fdata,
                specialité: val,
                check_textInputChange: false
            });
        }
    }
    const textInputChangeEntreprise = (val) => {
        if( val.length !== 0 ) {
            setFData({
                ...fdata,
                entreprise: val,
                check_textInputChange: true
            });
        } else {
            setFData({
                ...fdata,
                entreprise: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const handlePassword2Change = (val) => {
        setData({
            ...data,
            password2: val
        });
    }

   

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };
    const signupHandle =async() => {

        if (data.username.length == 0) {
            Alert.alert('Champ Invalide !', 'Veuillez entrer vos données.', [
                {text: 'Ok'}
            ]);
            return;
          }
          if (data.firstname.length == 0) {
            Alert.alert('Wrong Input!', 'Please fill FirstName', [
                {text: 'Okay'}
            ]);
        
            return;
          }
          if (data.lastname.length == 0) {
            Alert.alert('Wrong Input!', 'Please fill lastName', [
                {text: 'Okay'}
            ]);
            return;
          }
          if (data.email.length == 0) {
            Alert.alert('Wrong Input!','Please fill Email', [
                {text: 'Okay'}
            ]);
            return;
          }
          if (data.password.length == 0) {
            Alert.alert('Wrong Input!','Please fill Password', [
                {text: 'Okay'}
            ]);
            return;
          }
        
          setLoading(true);
        let dataToSend = {
            first_name:data.firstname, 
            last_name:data.lasttname,
             username: data.username,
             email:data.email,
             password: data.password,
             password2: data.password2,
             role:data.role};
        let formBody = [];
        for (let key in dataToSend) {
          let encodedKey = encodeURIComponent(key);
          let encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch(apiConfig.url+'/auth/register/', {
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
            setLoading(false);
            console.log(responseJson);
            
            console.log(
              'Registration Successful. Please Login to proceed'
            );
            console.log(responseJson.user);
            console.log(responseJson["user"]);
           /* setFData({
                ...fdata,
                user:responseJson["user"],
               
            });*/
           fdata.user=responseJson["user"];
            console.log('###########');
            console.log(fdata.user);

          })
          .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
          });
    
        if (fdata.role='F'){
           await  registerFormateur();
        }
        else{
            //registerParticipant();
            console.log('nooooooon')
        }
        setIsRegistraionSuccess(true);
    }
    if (isRegistraionSuccess) {
        return (
          <View
            style={{
              flex: 1,
              //backgroundColor: COLORS.purple,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/images/check.png')}
              style={{
                height: 120,
                resizeMode: 'contain',
                alignSelf: 'center'
              }}
            />
            <Text style={styles.successTextStyle}>
              Inscription avec succés 
            </Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signInNow}
                    onPress={() => navigation.navigate('Login')}
                >
                <LinearGradient
                    colors={[COLORS.blueClair, '#57B8DF']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Se Connecter Maintenant</Text>
                </LinearGradient>
                </TouchableOpacity>

               
            </View>
          </View>
        );
      }

    const registerFormateur= async()=>{
        let dataToSend = {
            poste:fdata.poste, 
            specialite:fdata.specialité,
             entreprise:fdata.entreprise,
             user:fdata.user,
             };
        let formBody = [];
        for (let key in dataToSend) {
          let encodedKey = encodeURIComponent(key);
          let encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
    
         var resp=await fetch(apiConfig.url+'/auth/register_formateur/', {
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
    
            console.log(responseJson);
        setTimeout(() => { signupHandle(), 5000});
       
            console.log(
              'Registration Formateur Successful.'
            );
          })
          .catch((error) => {
            //Hide Loader
           setLoading(true),
            console.error(error);
          });

    }
    const registerParticipant=()=>{
        let dataToSend = {
            poste:fdata.poste, 
            specialite:fdata.specialité,
             entreprise:fdata.entreprise,
             user:fdata.user,
             };
        let formBody = [];
        for (let key in dataToSend) {
          let encodedKey = encodeURIComponent(key);
          let encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
    
        fetch(apiConfig.url+'/auth/register_participant/', {
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
    
            console.log(responseJson);
       
            console.log(
              'Registration Participant Successful.'
            );
          })
          .catch((error) => {
            //Hide Loader
            //setLoading(false);
            console.error(error);
          });

    }
    

    return (
      <View style={styles.container}>
         <Loader loading={loading} />
        <View style={styles.header}>
        <View style={{width:90,height:90,backgroundColor:'white',borderRadius:50}}>
            <Image
           source={require('../assets/images/logokms.png')}
           style={{
             height: 80,
             resizeMode: 'contain',
             alignSelf: 'center'
           }}
         />
         </View> 
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Nom</Text>           
             <View style={styles.action}>
             
                <TextInput 
                    placeholder="Votre nom"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChangeFirstName(val)}
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

            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Prénom</Text>
        <View style={styles.action}>
            
                <TextInput 
                    placeholder="Votre prénom"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChangeLastName(val)}
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
            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Email</Text>
        <View style={styles.action}>
            
                <TextInput 
                    placeholder="Votre email"
                    keyboardType='email-address'
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                    onChangeText={(val) => textInputChangeEmail(val)}
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
            
            


            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Nom Utilisateur</Text>           
             <View style={styles.action}>
           
                <TextInput 
                    placeholder="Votre nom d'utilistateur"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
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


            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Mot De Passe</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Votre mot de passe"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
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

            
            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Confirmation Mot De Passe</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirmer votre mot de passe"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePassword2Change(val)}
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
            <View  style={styles.radioContainer}>
      <View  style={styles.radioElement}>
      <RadioButton
        color={COLORS.blueClair}
        uncheckedColor={COLORS.purple}
        value="Formateur"
        status={ data.role === 'F' ? 'checked' : 'unchecked' }
        onPress={() =>setData({
            ...data,
           role: 'F'
        })}
      />
      <Text  style={styles.textStyle}>Formateur</Text>
      </View>
      <View  style={styles.radioElement}>
      <RadioButton
        color={COLORS.blueClair}
        uncheckedColor={COLORS.purple}
        value="Employé"
        status={ data.role === 'P' ? 'checked' : 'unchecked' }
        onPress={() => setData({
            ...data,
           role: 'P'
        })}
      />
      <Text style={styles.textStyle}>Employé</Text>
      </View>
    </View>
    <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Poste</Text>           
             <View style={styles.action}>
           
                <TextInput 
                    placeholder="Votre poste"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChangePoste(val)}
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
            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Spécialité</Text>           
             <View style={styles.action}>
           
                <TextInput 
                    placeholder="Votre spécialité"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChangeSpe(val)}
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
            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Entreprise</Text>           
             <View style={styles.action}>
           
                <TextInput 
                    placeholder="Nom d'entreprise"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChangeEntreprise(val)}
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
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={signupHandle}
                >
                <LinearGradient
                    colors={[COLORS.blueClair, '#57B8DF']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>S'inscrire</Text>
                </LinearGradient>
                </TouchableOpacity>

               
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor:COLORS.purple
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical:25,
       marginHorizontal:120,
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        marginLeft:10,
        marginRight:10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
       paddingHorizontal: 20,
        paddingBottom:10
     
    },
    text_header: {
        color: '#fff',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
      
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 20
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    signInNow: {
        width: '80%',
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
    radioContainer:{
        // margin:10,
         paddingTop:15,
         //flexDirection:'row',
         //paddingLeft:8,
     },
     radioElement:{
       flexDirection:'row',
       alignItems:'center'
     },
     textStyle:{
       fontSize:18,
       color:'#05375a',
 
     },
     successTextStyle: {
        color: COLORS.purple,
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
      buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
      },
  });