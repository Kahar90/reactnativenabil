import {Text, TextInput, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Email from '../svg/033-email.svg';
import Password from '../svg/042-unlock.svg';

export default class TextField extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={this.props.text}
          style={styles.input}></TextInput>
        {/* <Email width={20} height={20} fill="#C6C5C5"></Email> */}
        {this.props.text === 'Email' ? (
          <Email width={20} height={20} fill="#C6C5C5"></Email>
        ) : (
          <Password width={20} height={20} fill="#C6C5C5"></Password>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'flex-start',
    // paddingHorizontal: 10,
    // justifyContent: 'center',
    // width: '100%',
    // marginBottom: 20,
    // height: '10%',
    // borderRadius: 15,
    // backgroundColor: '#FEFFFF',
    // text color #3D3B0F
    width: '92%',
    backgroundColor: '#FEFFFF',
    borderRadius: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    height: '12%',
  },
  input: {
    fontSize: 18,
    width: '100%',
    fontWeight: 'bold',
    flex: 1,
  },
});
