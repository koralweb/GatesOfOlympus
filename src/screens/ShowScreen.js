import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import translationsList from '../data/translationsList';

const ShowScreen = ({navigation}) => {
  const renderItems = () => {
    return translationsList
      .filter(el => el.date >= new Date().getDate())
      .map(item => (
        <View style={styles.cart}>
          <Text style={styles.list}>{item.liga}</Text>
          <Text style={styles.comand}>{item.team1}</Text>
          <Text style={styles.comand}>{item.team2}</Text>
          <View style={styles.inner}>
            <Image style={styles.img} source={require('../assets/timer.png')} />
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.time}>{item.date}.07.2023</Text>
          </View>
        </View>
      ));
  };

  return (
    <View>
      <Header navigation={navigation} />
      <Text style={styles.title}>Let`s get started!</Text>

      <Text style={styles.desc}>Sports broadcasts</Text>
      <ScrollView>
        <View key={Math.random()} style={styles.cont}>
          {renderItems()}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  title: {
    fontSize: 35,
    fontWeight: '800',
    marginBottom: 20,
    color: '#6F3B98',
    alignSelf: 'center',
  },
  desc: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    color: '#6F3B98',
    marginLeft: 30,
  },
  cart: {
    width: '45%',
    height: 180,
    backgroundColor: 'silver',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  list: {
    fontSize: 20,
    fontWeight: '500',
    color: '#6F3B98',
    marginBottom: 5,
    padding: 5,
  },
  comand: {
    fontSize: 15,
    color: 'black',
  },
  inner: {
    flexDirection: 'row',
    marginTop: 5,
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  time: {
    fontSize: 15,
    color: 'black',
    marginRight: 15,
  },
});

export default ShowScreen;
