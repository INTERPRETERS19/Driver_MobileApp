import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const Menu = () => (
  <View style={styles.container}>
    // eslint-disable-next-line prettier/prettier
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{width: '100%', height: '100%'}}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default Menu;
