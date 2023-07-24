import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const ContactScreen = ({navigation}) => {
  return (
    <View style={styles.wrp}>
      <Header navigation={navigation} />
      <View style={styles.cont}>
        <Text style={styles.title}>Επαφές</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>3A Veikou St Makrigyianni 117-42 Athens</Text>
        <Text style={styles.text}>117-42</Text>
        <Text style={styles.text}>+30 210 9235811</Text>
        <Text style={styles.text}>Είσοδος από το πάρκινγκ</Text>
      </View>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/contBg.jpg')}>
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
    flex: 1,
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
    marginTop: 'auto',
  },
});

export default ContactScreen;
