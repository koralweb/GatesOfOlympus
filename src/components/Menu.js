import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Menu = ({navigation, setMenu}) => {
  return (
    <ImageBackground style={styles.cont} source={require('../assets/bg.jpg')}>
      <TouchableOpacity onPress={() => setMenu(false)}>
        <FontAwesomeIcon color={'white'} size={30} icon={'close'} />
      </TouchableOpacity>
      <Image style={styles.img} source={require('../assets/icon1.png')} />
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.push(`Home`)}>
          <Text style={styles.text}>Главная</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push(`Shop`)}>
          <Text style={styles.text}>Магазин</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push(`Booking`)}>
          <Text style={styles.text}>Бронирование</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push(`Show`)}>
          <Text style={styles.text}>Трансляции</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push(`Contact`)}>
          <Text style={styles.text}>Контакты</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push(`Cart`)}>
          <Text style={styles.text}>Корзина</Text>
        </TouchableOpacity>
      </View>
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
  item: {
    alignSelf: 'center',
    width: '90%',
  },
  text: {
    fontSize: 20,
    backgroundColor: 'white',
    textAlign: 'center',
    marginBottom: 15,
    borderRadius: 20,
    padding: 10,
    color: 'black',
  },
  img: {
    width: '90%',
    height: 150,
    alignSelf: 'center',
    marginBottom: 80,
    marginTop: 80,
  },
});

export default Menu;
