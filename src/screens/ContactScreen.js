import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import Header from '../components/Header';

const ContactScreen = ({navigation}) => {
  return (
    <View style={styles.wrp}>
      <Header navigation={navigation} />
      <View style={styles.cont}>
        <Text style={styles.title}>Contacts</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Adress</Text>
        <Text style={styles.text}>Index</Text>
        <Text style={styles.text}>Mobail number</Text>
        <Text style={styles.text}>Data</Text>
      </View>
      <ImageBackground source={require('../assets/contBg.jpg')}>
        <Image style={styles.img} source={require('../assets/icon1.png')} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    alignItems: 'center',
  },
  wrp: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
    color: 'black',
  },
  item: {
    width: '90%',
    marginLeft: 15,
    alignSelf: 'center',
  },
  text: {
    fontSize: 15,
    backgroundColor: 'silver',
    marginBottom: 30,
    borderRadius: 10,
    padding: 10,
  },
  img: {
    width: '90%',
    height: 180,
    alignSelf: 'center',
    marginTop: 170,
  },
});

export default ContactScreen;
