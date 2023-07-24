import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';

const Menu = ({navigation, setMenu}) => {
  const [screenName, setScreenName] = useState(useRoute().name);

  return (
    <ImageBackground style={styles.cont} source={require('../assets/bg.jpg')}>
      {screenName !== 'Home' ? (
        <TouchableOpacity
          style={{marginTop: 40, marginLeft: 10}}
          onPress={() => setMenu(false)}>
          <FontAwesomeIcon color={'white'} size={30} icon={'close'} />
        </TouchableOpacity>
      ) : (
        <View style={{height: 70}} />
      )}
      <Image style={styles.img} source={require('../assets/icon1.png')} />
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
          <Text style={styles.text}>Κύρια σελίδα</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Shop')}>
          <Text style={styles.text}>Κατάστημα</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Booking')}>
          <Text style={styles.text}>Κράτηση τραπεζιού</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Show')}>
          <Text style={styles.text}>Εκπομπές</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Contact')}>
          <Text style={styles.text}>Επαφές</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Cart')}>
          <Text style={styles.text}>Καροτσάκι</Text>
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
    marginBottom: 50,
    marginTop: 30,
  },
});

export default Menu;
