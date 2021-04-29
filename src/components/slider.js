import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import SliderCustomLabel from "./sliderCustomLabel";
import { COLORS } from "../constants";


const textTransformerTimes = (value) => {
  return value === 0
    ? "12am"
    : (value < 13 ? value : value - 12) + (value < 12 ? "am" : "pm");
};
const TIME = {  min: 0,  max: 24 }
const SliderPad = 12;




const DoubleSlider = ({}) => {
  const { min, max } = TIME;
  const [width, setWidth] = useState(280);
  const [selected, setSelected] = useState(null);

  if (!selected) {
    setSelected([min, max]);
  }

  // Callbacks
  const onLayout = (event) => {
    setWidth(event.nativeEvent.layout.width - SliderPad * 2);
  };
  const onValuesChangeFinish = (values) => {
    setSelected(values);
  };

  return (
    <View onLayout={onLayout} style={styles.wrapper}>
        <MultiSlider
          min={min}
          max={max}
          allowOverlap
          values={selected}
          sliderLength={width}
          onValuesChangeFinish={onValuesChangeFinish}
          enableLabel={true}
          customLabel={SliderCustomLabel(textTransformerTimes)}
          trackStyle={{
            height: 10,
            borderRadius: 8,
          }}
          markerOffsetY={3}
          selectedStyle={{
            backgroundColor:COLORS.purple,
          }}
          unselectedStyle={{
            backgroundColor: COLORS.grey,
          }}
        />
       
    </View>
    
  );
}


/*export default function SliderApp() {
  return (
    <View style={{ flex: 1 }}>
      <DoubleSlider /> 
     
    </View>
  )
}
   <View ><Text>Heure Début: h</Text></View> 
        <View ><Text>Heure Fin: {props.twoMarkerValue}h</Text></View>    
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    margin: SliderPad * 2,
    
    justifyContent: "center",
    alignItems: "center",
  },
 
});
export default DoubleSlider;