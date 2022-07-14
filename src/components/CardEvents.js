import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Football from '../svg/006-football.svg';
import Arrow from '../svg/056-forward.svg';
import Time from '../svg/058-null.svg';

function CardEvents(props) {
  return (
    <View style={styles.card}>
      <View style={styles.toppart}>
        <View style={{width: '65%'}}>
          <Text style={styles.texth2}>Friday, 21 August 2020 at 8:00 PM</Text>
        </View>
        <View style={styles.time}>
          <Time width={25} height={25} fill="#fff"></Time>
        </View>
      </View>
      <View style={styles.infopart}>
        <View style={styles.matchmain}>
          <Football width={30} height={30} fill="#2093FF"></Football>
          <View>
            <View>
              <Text style={styles.texth1}>Sveila vs Inter Milan</Text>
              <Text style={styles.texth2}>at RheinEnergieStadion, Cologne</Text>
            </View>
          </View>
        </View>
        <Arrow width={25} height={25} fill="#A1A1A1"></Arrow>
      </View>
    </View>
  );
}

export default CardEvents;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 150,
    elevation: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 15,
  },
  infopart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  texth1: {
    marginLeft: 10,
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  texth2: {
    marginLeft: 10,
    color: '#000',
    fontSize: 16,
    fontWeight: 'normal',
  },
  textdate: {
    // // marginLeft: 10,
    // color: '#000',
    // fontSize: 10,
    // fontWeight: 'normal',
  },
  matchmain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  textdate: {
    // marginLeft: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  time: {
    backgroundColor: '#FBAD1B',
    width: '15%',
    height: '65%',
    elevation: 5,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toppart: {
    paddingTop: 10,
    width: '100%',
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spacer: {},
});
