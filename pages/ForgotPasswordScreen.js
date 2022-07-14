import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import TextField from '../src/components/TextField';
import ButtonBigYellow from '../src/components/ButtonBigYellow';
import LogoWide from '../src/svg/netflix-2-logo-svgrepo-com.svg';

function ForgotPassword(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <LogoWide width={200} height={200} fill="#C6C5C5"></LogoWide>
      </View>
      <TextField text="Email"></TextField>
      <TouchableOpacity style={styles.button}>
        <ButtonBigYellow text={'Reset my password'}></ButtonBigYellow>
      </TouchableOpacity>
      <Text
        style={styles.text}
        onPress={() => {
          this.props.navigation.navigate('Login');
        }}>
        back to sign in
      </Text>
    </View>
  );
}

export default ForgotPassword;


// export default class ForgotPassword extends Component {
//   componentDidMount() {
//     console.log('ForgotPassword componentDidMount asdasd');
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.logo}>
//           <LogoWide width={200} height={200} fill="#C6C5C5"></LogoWide>
//         </View>
//         <TextField text="Email"></TextField>
//         <TouchableOpacity style={styles.button}>
//           <ButtonBigYellow text={'Reset my password'}></ButtonBigYellow>
//         </TouchableOpacity>
//         <Text
//           style={styles.text}
//           onPress={() => {
//             this.props.navigation.navigate('Login');
//           }}>
//           back to sign in
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02090C',
    flex: 1,
    // height: '100%',
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#8a8f91',
  },
  button: {
    width: '100%',
    width: 200,
    height: 50,
    width: '92%',
    height: '12%',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#FCE926',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
