import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import ButtonBigYellow from '../src/components/ButtonBigYellow';
import TextField from '../src/components/TextField';
import LogoThin from '../src/svg/react-logo-svgrepo-com.svg';

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <LogoThin width={100} height={100} fill="#C6C5C5"></LogoThin>
      </View>
      <TextField text="Email"></TextField>
      <TextField text="Password"></TextField>
      {/* <ButtonBigYellow
        navigation={props.navigation}
        text={'Sign In With Email'}></ButtonBigYellow> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <ButtonBigYellow
          navigation={props.navigation}
          text={'Sign In With Email'}></ButtonBigYellow>
      </TouchableOpacity>
      <Text
        style={styles.textgrey}
        onPress={() => {
          props.navigation.navigate('ForgotPassword');
        }}>
        I forgot my password
      </Text>
      <Text style={styles.textyellow}>
        Are you an Event Manager?{' '}
        <Text style={styles.textgrey}>Click here.</Text>
      </Text>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02090C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textgrey: {
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#8a8f91',
  },
  textyellow: {
    // paddingTop: 30,
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FCE926',
  },
  logo: {
    paddingBottom: 30,
  },
  button: {
    // width: '100%',
    // width: 200,
    // height: 50,

    width: '92%',
    height: '12%',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#FCE926',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

// const navigateToHome = (navigation) => {
//   console.log('navigateToHome');
//   navigation.navigate('Home');
// }
