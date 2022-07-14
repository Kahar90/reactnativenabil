import {Text, TextInput, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Email from '../../assets/svg/033-email.svg';
import Password from '../../assets/svg/042-unlock.svg';

function TextField(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.text}
        style={styles.input}></TextInput>
      {/* <Email width={20} height={20} fill="#C6C5C5"></Email> */}
      {props.text === 'Email' ? (
        <Email width={20} height={20} fill="#C6C5C5"></Email>
      ) : (
        <Password width={20} height={20} fill="#C6C5C5"></Password>
      )}
    </View>
  );
}

export default TextField;

    


const styles = StyleSheet.create({
  container: {
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
