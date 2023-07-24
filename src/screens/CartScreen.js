import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import products from '../mobx/products';
import Product from '../components/Product';
import {observer} from 'mobx-react-lite';
import EmptyCart from '../components/EmptyCart';

const CartScreen = ({navigation}) => {
  const renderProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => {
        return <Product key={prod.title} prod={prod} />;
      });
  };
  return (
    <>
      <Header navigation={navigation} />
      {products.list.some(el => el.added) ? (
        <View>
          <Text style={styles.title}>Корзина</Text>
          <ScrollView>{renderProducts()}</ScrollView>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Оформить заказ</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <EmptyCart />
      )}
    </>
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
  btn: {
    alignSelf: 'center',
    width: '70%',
    height: 40,
    backgroundColor: '#6F3B98',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
  },
});

export default observer(CartScreen);
