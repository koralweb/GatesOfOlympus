import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

const EmptyCart = ({prod}) => {
  return (
    <ImageBackground style={styles.cont} source={require('../assets/bg.jpg')}>
      <Text style={styles.text}>Корзина пустая</Text>
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
    justifyContent: 'center',
  },
  text: {
    color: '#6F3B98',
    fontSize: 45,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default EmptyCart;
