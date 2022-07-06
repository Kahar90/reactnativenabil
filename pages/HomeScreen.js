import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Email from '../src/svg/033-email.svg';
import CardMainBig from '../src/components/CardMainBig';
import TabChoose from '../src/components/TabChoose';
import CardEvents from '../src/components/CardEvents';
import Categories from '../src/components/Categories';
import BottomNavigationBar from '../src/components/BottomNavigationBar';

export default class HomeScreen extends Component {
  render() {
    return (
      
        <View style={styles.container}>
          <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headertext}>Coming up next</Text>
              {/* place holder for image */}
              <Email width={20} height={20} fill={'#000'}></Email>
            </View>
            {/* Body */}
            <View style={styles.body}>
              <CardMainBig></CardMainBig>
              <View style={styles.spacer}></View>
              <TabChoose></TabChoose>
              <Categories></Categories>
              <CardEvents></CardEvents>
              <CardEvents></CardEvents>
              <CardEvents></CardEvents>
              <CardEvents></CardEvents>
              <CardEvents></CardEvents>
              <View style={{paddingTop: 50}}></View>
            </View>

          </ScrollView>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FEFFFF',

    flexDirection: 'row',
    // justify content space between
    justifyContent: 'space-between',
  },
  headertext: {
    // text color #3D3B0F
    color: '#3D3B0F',
    // font size 18
    fontSize: 30,
    // font weight bold
    fontWeight: 'bold',
  },
  body: {
    // flex 1
    flex: 1,
    // center
    alignItems: 'center',
    // padding top 20
    paddingTop: 20,
  },
  spacer: {
    // flex: 1,
    // height: '10%',
    paddingTop: 80,
  },
});
