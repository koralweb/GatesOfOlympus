import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import ThankYou from '../components/ThankYou';

const BookingScreen = ({navigation}) => {
  const [showThankYou, setShowThankYou] = useState(false);
  return (
    <View>
      <Header navigation={navigation} />

      <Text style={styles.title}>Table reservation</Text>
      <View style={styles.cont}>
        <Text style={styles.list}>First name</Text>
        <TextInput
          style={styles.inner}
          placeholder="Enter your Ferst name"></TextInput>
        <Text style={styles.list}>Last name</Text>
        <TextInput
          style={styles.inner}
          placeholder="Enter your Last name"></TextInput>
        <Text style={styles.list}>Mobaile number</Text>
        <TextInput
          style={styles.inner}
          placeholder="Enter your Mobaile number"></TextInput>
        <Text style={styles.list}>Table namber</Text>
        <TextInput
          style={styles.inner}
          placeholder="Enter your Table namber"></TextInput>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setShowThankYou(true)}>
        <Text style={styles.btnText}>Reservation</Text>
      </TouchableOpacity>

      {showThankYou && <ThankYou navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
    color: 'black',
    alignSelf: 'center',
  },
  cont: {
    alignSelf: 'center',
    width: '80%',
  },
  list: {
    fontSize: 20,
    fontWeight: '500',
    color: '#6F3B98',
    marginBottom: 10,
    marginTop: 10,
  },
  inner: {
    backgroundColor: 'silver',
    borderRadius: 15,
    paddingLeft: 10,
  },
  btn: {
    width: '80%',
    height: 45,
    backgroundColor: '#6F3B98',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    alignContent: 'center',
    marginTop: 7,
  },
});

export default BookingScreen;
