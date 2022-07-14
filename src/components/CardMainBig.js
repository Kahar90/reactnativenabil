import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import Football from '../../assets/svg/006-football.svg';
import Masks from '../../assets/svg/008-masks.svg';
import QA from '../../assets/svg/025-qa.svg';
import Info from '../../assets/svg/045-info.svg';
import Time from '../../assets/svg/001-calendar.svg';

function CardMainBig(props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {/* Match Text */}
        <View style={styles.matchmain}>
          <Football width={40} height={40} fill="#2093FF"></Football>
          <View>
            <Text style={styles.texth1}>Sveila vs Inter Milan</Text>
            <Text style={styles.texth2}>at RheinEnergieStadion, Cologne</Text>
          </View>
        </View>
        <View style={styles.spacer}></View>

        {/* Image */}

        <Text style={styles.textdate}>Friday, 21 August 2020 at 8:00 PM</Text>
        <View style={styles.image}>
          {/* image goes here */}
          <View style={styles.team}>
            <View style={styles.teammenu}>
              <Text>Sveila</Text>
            </View>
          </View>
          <View style={styles.team}>
            <View style={styles.teammenu}>
              <Text>Inter Milan</Text>
            </View>
          </View>
        </View>

        {/* Status */}

        <View style={styles.status}>
          <Text style={styles.textstatus}>Ready to work</Text>

          <Masks width={35} height={35} fill="#fff"></Masks>
        </View>
        <View style={styles.BSQMenu}>
          <View style={{backgroundColor: '#fff', alignItems: 'center'}}>
            <Text style={styles.bsqtext}>Briefing</Text>
            <View style={styles.bsqcard}>
              <Info width={35} height={35} fill="#000"></Info>
            </View>
          </View>

          <View style={{backgroundColor: '#fff', alignItems: 'center'}}>
            <Text style={styles.bsqtext}>Schedule</Text>
            <View style={styles.bsqcard}>
              <Time width={35} height={35} fill="#000"></Time>
            </View>
          </View>

          <View style={{backgroundColor: '#fff', alignItems: 'center'}}>
            <Text style={styles.bsqtext}>Quiz</Text>
            <View style={styles.bsqcard}>
              <QA width={35} height={35} fill="#000"></QA>
            </View>
          </View>
        </View>
      </View>
      {/* Briefing schedule quiz */}
    </View>
  );
}

export default CardMainBig;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 350,
    height: 350,
    borderRadius: 20,
    elevation: 5,
  },
  texth1: {
    marginLeft: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  texth2: {
    marginLeft: 10,
    color: '#000',
    fontSize: 18,
    fontWeight: 'normal',
  },
  textdate: {
    // marginLeft: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  matchmain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  spacer: {
    marginBottom: 10,
  },
  image: {
    // center
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    marginTop: 20,
    width: 300,
    backgroundColor: '#FEEA25',
    height: 130,
    borderRadius: 20,
  },
  status: {
    flexDirection: 'row',
    width: 230,
    height: 70,
    backgroundColor: '#52C41D',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: -30,
    borderColor: '#fff',
    borderWidth: 5,
    elevation: 5,
  },
  textstatus: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  BSQMenu: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#fff',
    width: 300,
    height: 90,
    borderRadius: 20,
    elevation: 5,
  },
  bsqcard: {
    width: 80,
    height: 50,
    // alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F5F5',
    // backgroundColor: '#000',
    justifyContent: 'center',
    borderRadius: 15,
  },
  bsqtext: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  team: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    borderRadius: 100,
    marginTop: -20,
  },
  teamitem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
