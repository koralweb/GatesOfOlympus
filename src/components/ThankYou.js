import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

const ThankYou = ({prod}) => {
  return (
    <ImageBackground style={styles.cont} source={require('../assets/bg.jpg')}>
      <Image source={require('../assets/Vector (1).png')} />
      <Text style={styles.text}>Congrats!</Text>
      <Text style={styles.text}>Table reserved!</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text: {
    fontSize: 45,
    fontWeight: '700',
    color: '#6F3B98',
    alignSelf: 'center',
  },
});

export default ThankYou;
