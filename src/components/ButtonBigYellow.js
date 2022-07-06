import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class ButtonBigYellow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    // color: '#acb88',
    // textAlign: 'center',
    // width: 323,
    // height: 60,
    // borderRadius: 10,
    // backgroundColor: '#FCE926',
  },
  buttonText: {
    color: '#575761',
    fontSize: 18,
    fontWeight: 'bold',
    // textAlign: 'center',
    // paddingTop: 15,
  },
  container: {
    // width: '100%',
    // width: 200,
    // height: 50,
    
    // width: '92%',
    // height: '12%',
    // alignItems: 'center',
    // textAlign: 'center',
    // backgroundColor: '#FCE926',
    // justifyContent: 'center',
    // borderRadius: 10,
  },
});
