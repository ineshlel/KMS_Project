import React, { useState } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'


// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Comp 1',
    id: 'JUVE',
  },
  {
    item: 'Comp 1',
    id: 'RM',
  },
  {
    item: 'Comp 1',
    id: 'BR',
  },
  {
    item: 'Comp 1',
    id: 'PSG',
  },
  {
    item: 'Comp 1',
    id: 'FBM',
  },
  {
    item: 'Comp 1',
    id: 'MUN',
  },
  {
    item: 'Comp 1',
    id: 'MCI',
  },
  {
    item: 'Comp 1',
    id: 'EVE',
  },
  {
    item: 'Comp 1',
    id: 'TOT',
  },
  {
    item: 'Comp 1',
    id: 'CHE',
  },

]

function CMPVForma() {
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  return (
    <View  >
      
      <View style={{ height: 40,flex:1}} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Compétances Techniques</Text>
      <SelectBox
        label="Choisir compétance"
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
    
     
     </View>
    
  )

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}
/*const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
     
});*/

export default CMPVForma;