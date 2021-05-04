import * as React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { COLORS } from '../constants';


const MyComponent = () => {
  const [checked, setChecked] = React.useState();

  return (
    <View  style={styles.radioContainer}>
      <View  style={styles.radioElement}>
      <RadioButton
        color={COLORS.blueClair}
        uncheckedColor={COLORS.purple}
        value="Responsable"
        status={ checked === 'Responsable' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Responsable')}
      />
      <Text style={styles.textStyle}>Responsable</Text>
      </View>
      <View  style={styles.radioElement}>
      <RadioButton
        color={COLORS.blueClair}
        uncheckedColor={COLORS.purple}
        value="Formateur"
        status={ checked === 'Formateur' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Formateur')}
      />
      <Text  style={styles.textStyle}>Formateur</Text>
      </View>
      <View  style={styles.radioElement}>
      <RadioButton
        color={COLORS.blueClair}
        uncheckedColor={COLORS.purple}
        value="Employé"
        status={ checked === 'Employé' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Employé')}
      />
      <Text style={styles.textStyle}>Employé</Text>
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
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

    }
    
     
});


export default MyComponent;