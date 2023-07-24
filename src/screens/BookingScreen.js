import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import ThankYou from '../components/ThankYou';
import products from '../mobx/products';

const BookingScreen = ({navigation}) => {
  const [showThankYou, setShowThankYou] = useState(false);
  return (
    <View>
      <Header navigation={navigation} />

      <Text style={styles.title}>Κράτηση τραπεζιού</Text>
      <View style={styles.cont}>
        <Text style={styles.list}>Ονομα</Text>
        <TextInput style={styles.inner} placeholder="Εισάγετε το όνομα σας" />
        <Text style={styles.list}>Επίθετο</Text>
        <TextInput
          style={styles.inner}
          placeholder="Εισαγάγετε το Επώνυμό σας"
        />
        <Text style={styles.list}>Αριθμός κινητού</Text>
        <TextInput
          style={styles.inner}
          placeholder="Πληκτρολόγησε τον αριθμό του τηλεφώνου σου"
        />
        <Text style={styles.list}>Αριθμός πίνακα</Text>
        <TextInput
          style={styles.inner}
          placeholder="Εισαγάγετε τον αριθμό του πίνακα"
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setShowThankYou(true);
          products.clearCart();
        }}>
        <Text style={styles.btnText}>Κράτηση</Text>
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
    height: 35,
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
