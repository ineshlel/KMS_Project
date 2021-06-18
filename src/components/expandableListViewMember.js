import React, { Component } from 'react';
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';
import MemberAction from './memberAction';
import MemberItem from './memberItem';
import MemberItemArrow from './memberItemArrow';




export default class ExpandableListViewMember extends Component {

  constructor() {
    super();
    this.state = {
      layoutHeight: 0
    }
  }
 
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layoutHeight: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layoutHeight: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }

  showSelectedCategory = (item) => {
    Alert.alert(item);
  }
  render() {
    return (
      <View style={styles.panelContainer}>
        
        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction}>
         
        
            <MemberItemArrow
              name={this.props.item.formateur_name}
              ddd={this.props.item.date_debut}
              dfd={this.props.item.date_fin}
              id_dm={this.props.item.id}
              id_pg={this.props.item.programme}
              id_f={this.props.item.formateur}
              st={this.props.item.statut}
            />
        

         
        </TouchableOpacity>
        <View style={{ height: this.state.layoutHeight, overflow: 'hidden' }}>
          <MemberAction 
             //idpg={this.props.item.id}
             />
        
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      backgroundColor: '#F5FCFF',
    },
 
  });