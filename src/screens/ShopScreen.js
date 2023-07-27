import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import products from '../mobx/products';
import Product from '../components/Product';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ShopScreen = ({navigation}) => {
  const renderProducts = () => {
    return products.list.map(prod => {
      return <Product key={prod.productTitle} prod={prod} />;
    });
  };
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.cont}>
          <TouchableOpacity
            onPress={() => navigation.push('Cart')}
            style={styles.pantry}>
            <FontAwesomeIcon
              color={'white'}
              size={30}
              icon={'shopping-basket'}
              style={styles.pantryIcon}
            />
            <Text style={styles.list}>Ντουλάπι</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.push('Show')}
            style={styles.points}>
            <Image
              style={styles.img}
              source={require('../assets/pointer.png')}
            />
            <Text style={styles.list}>Πόντοι</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Τι είναι ζεστό</Text>
        {renderProducts()}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  pantry: {
    flexDirection: 'row',
    width: 140,
    height: 70,
    backgroundColor: '#00839B',
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  points: {
    flexDirection: 'row',
    width: 140,
    height: 70,
    backgroundColor: '#6F3B98',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  title: {
    margin: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
  img: {
    width: 30,
    height: 30,
  },
});

export default ShopScreen;
