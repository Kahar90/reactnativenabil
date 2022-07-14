import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Football from '../svg/006-football.svg';
import Camera from '../svg/036-camera.svg';

function TabChoose(props) {
  return (
    <View style={styles.box}>
      <View style={styles.card}>
        <View style={styles.cardmenuselected}>
          <Football width={30} height={30} fill="#000"></Football>
          <Text style={styles.cardtext}>YOUR EVENTS</Text>
        </View>
        <View style={styles.cardmenuunselected}>
          {/* <Text style={styles.cardtext}></Text> */}
          <Camera
            width={30}
            height={30}
            fill="#000"
            style={{fill: '#828182'}}></Camera>
        </View>
      </View>
    </View>
  );
}

export default TabChoose;

const styles = StyleSheet.create({
  box: {
    // flexdirection:'row',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: '#FEFFFF',
    elevation: 5,
    borderRadius: 15,
    height: 80,
    width: '92%',
    marginBottom: 20,
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
  },
  cardmenuselected: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FDEB25',
    borderRadius: 15,
    width: 240,
    height: 60,
  },
  cardmenuunselected: {
    height: 60,
    width: 100,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#F4F6F5',
  },
  cardtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 10,
  },
});
