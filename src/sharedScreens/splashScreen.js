import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useTheme } from '@react-navigation/native';
import { COLORS } from '../constants';
import LottieView from 'lottie-react-native';
/*  <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/images/logo.png')}
            //source={require('../)}
            style={styles.logo}
            resizeMode="stretch"
            /> */

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          
        <View style={styles.header}>
        <LottieView source={require('../assets/14583-multi-tasking.json')} autoPlay loop />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: COLORS.purple
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: "#fff"
            }]}>" Quand la formation requise est en adéquation avec l'emploi obtenu, la compétence sera au service du progrès "</Text>
            <Text style={styles.text}>Jacques Le Goff</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <LinearGradient
                    colors={[COLORS.blueClair, '#57B8DF']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Commencer</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor:COLORS.purple ,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30,
     // height:300,
      
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 16,
      //fontWeight: 'bold'
      fontFamily:"Cairo-Bold"
  },
  text: {
      color: "#fff",
      marginTop:5,
      marginLeft:200,
      fontFamily:"Cairo-Regular"
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontFamily:"Cairo-SemiBold",
      fontSize: 16,

  }
});