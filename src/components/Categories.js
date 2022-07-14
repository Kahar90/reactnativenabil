import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Arrow from '../svg/056-forward.svg';
import Recent from '../svg/067-sync.svg';

function Categories(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textevents}>Events</Text>
      <View style={{width: '28%'}}></View>
      <View style={styles.pastevents}>
        <Recent width={20} height={20} fill="#3EA3FF"></Recent>
        <View style={styles.spacer}></View>
        <Text style={styles.textpastevents}>past events</Text>
        <View style={styles.spacer}></View>
        <Arrow width={20} height={20} fill="#3EA3FF"></Arrow>
      </View>
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textevents: {
    fontSize: 20,
    color: '#3D3B0F',
    fontWeight: 'bold',
  },
  pastevents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textpastevents: {
    fontSize: 20,
    color: '#3EA3FF',
    fontWeight: 'bold',
  },
  spacer: {
    width: 10,
  },
});
