import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import StaticInput from './staticInput';
/*             <View  style={styles.timeContainer}>
        <StaticInput name='Heure Début: '
        value={oneMarkerValue}/>
        <StaticInput name='Heure Fin: '
        value={twoMarkerValue}/>
           
        </View>
                     
        <View  style={styles.timeContainer}>
        <View ><Text>Heure Début: {props.oneMarkerValue}h</Text></View> 
        <View ><Text>Heure Fin: {props.twoMarkerValue}h</Text></View>          
        </View>
          <LabelBase
                    position={oneMarkerLeftPosition}
                    value={textTransformer(oneMarkerValue)}
                />
        {twoMarkerValue ? 
                    <LabelBase 
                        position={twoMarkerLeftPosition}
                        value={textTransformer(twoMarkerValue)}
                    /> : null
                }
*/
const width = 50;

function LabelBase(props)
{
    const { position, value } = props;

    return (
        <View
            style={[
                styles.sliderLabel,
                {
                    left: position - width / 2,
                },
            ]}>
            <Text style={styles.sliderLabelText}>{value}</Text>
        
      
         
        </View>
    );
}

export default function SliderCustomLabel(textTransformer: (value: number) => string)
{
    return function (props)
    {
        const {
            oneMarkerValue,
            twoMarkerValue,
            oneMarkerLeftPosition,
            twoMarkerLeftPosition,
        } = props;
        
        console.log({props, oneMarkerLeftPosition, twoMarkerLeftPosition});
        console.log('*************************');
        return (
            <View>
        
        <LabelBase
                    position={oneMarkerLeftPosition}
                    value={textTransformer(oneMarkerValue)}
                />
        {twoMarkerValue ? 
                    <LabelBase 
                        position={twoMarkerLeftPosition}
                        value={textTransformer(twoMarkerValue)}
                    /> : null
                }
       
             </View>
             
        );
    };
}

const styles = StyleSheet.create({
    sliderLabel: {
        position: 'absolute',
        justifyContent: 'center',
        top: 30,
        width: width,
        height: width,
    },
    sliderLabelText: {
        textAlign: 'center',
        lineHeight: width,
       
    },

    timeContainer:{
        flexDirection:'column',
       // marginBottom:30,
    }
});