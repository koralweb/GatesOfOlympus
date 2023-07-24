import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';

const ThankYou = ({prod}) => {
  return (
    <ImageBackground style={styles.cont} source={require('../assets/bg.jpg')}>
      <Image source={require('../assets/Vector (1).png')} />
      <Text style={styles.text}>Συγχαρητήρια!</Text>
      <Text style={styles.text}>Κρατήθηκε το τραπέζι!</Text>
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
    textAlign: 'center',
  },
});

export default ThankYou;
