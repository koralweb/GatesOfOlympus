// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ShopScreen from './src/screens/ShopScreen';
import ContactScreen from './src/screens/ContactScreen';
import BookingScreen from './src/screens/BookingScreen';
import ShowScreen from './src/screens/ShowScreen';
import CartScreen from './src/screens/CartScreen';
import {
  faBars,
  faCheckSquare,
  faClose,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(faBars, faClose, faCheckSquare, faShoppingBasket);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
