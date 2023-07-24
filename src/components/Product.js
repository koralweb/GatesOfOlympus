import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import products from '../mobx/products';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {observer} from 'mobx-react-lite';

const Product = ({prod}) => {
  return (
    <View key={prod.title} style={styles.cont}>
      <View>
        <Image style={styles.image} source={prod.image} />
      </View>
      <View style={styles.desc}>
        <Text style={styles.title}>{prod.title}</Text>
        <View style={styles.wrp}>
          <Text style={styles.price}>{Math.round(prod.price)}€</Text>
          {prod.added ? (
            <TouchableOpacity onPress={() => products.removeProduct(prod.id)}>
              <FontAwesomeIcon
                color={'white'}
                size={30}
                icon={'check-square'}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => products.addProduct(prod.id, 1)}>
              <Text style={styles.add}>Add +</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    width: '90%',
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#6F3B98',
  },
  image: {
    width: 200,
    height: 180,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    color: 'white',
    width: 130,
    height: 80,
    fontSize: 18,
    paddingTop: 10,
  },
  wrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  price: {
    color: 'white',
    fontSize: 15,
  },
  desc: {
    marginLeft: 10,
  },
  add: {
    color: 'white',
    fontSize: 15,
  },
  checked: {},
});

export default observer(Product);
