import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { connect } from 'react-redux';
import { Product } from '../models';
import * as actions from '../redux/actions/cartActions';

const Stack = createStackNavigator();

const { width, height } = Dimensions.get('window');

function MyStack({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  cartItems: { product: Product; quantity: number }[];
  clearCart: () => void;
}) {
  const tabHiddenRoutes = ['ProductDetails', 'CartScreen'];

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log('route name is ', routeName);

    if (tabHiddenRoutes.includes(routeName)) {
      console.log('kapat ', routeName);
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      console.log('Aç ', routeName);
      navigation.setOptions({ tabBarStyle: { display: 'true' } });
    }
  }, [navigation, route]);

  const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      const price = (total += cartItem.product.fiyat);
      setTotalPrice(price);
    });
  };

  useEffect(() => {
    getProductsPrice();
  }, [cartItems, navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require('../../assets/getirlogo.png')}
              style={{ width: 70, height: 30 }}
            />
          ),
          headerStyle: { backgroundColor: '#5c3ebc' },
        }}
      />
      <Stack.Screen
        name='CategoryDetails'
        component={CategoryFilterScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerTitle: () => (
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
              Ürünler
            </Text>
          ),
          headerStyle: { backgroundColor: '#5c3ebc' },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('CartScreen')}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: 'white',
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={require('../../assets/cart.png')}
                style={{ width: 23, height: 23, marginLeft: 6 }}
              />
              <View
                style={{ height: 33, width: 4, backgroundColor: 'white' }}
              />
              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: '#f3effe',
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{ color: '#5d3ebd', fontWeight: 'bold', fontSize: 12 }}
                >
                  {'\u20Ba'}
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#5c3ebc',
          },
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerLeft: () => (
            <Ionicons
              name='close'
              size={24}
              color='white'
              style={{ paddingLeft: 12 }}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <Foundation
              name='heart'
              size={24}
              color='#32177a'
              style={{ paddingRight: 12 }}
            />
          ),
        }}
        name='ProductDetails'
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        name='CartScreen'
        component={CartScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: '#5c3ebc' },
          headerTitle: () => (
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <Ionicons
              name='close'
              size={26}
              color='white'
              onPress={navigation.goBack}
              style={{ paddingLeft: 10 }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name='trash'
              size={26}
              color='white'
              onPress={() => clearCart()}
              style={{ paddingRight: 10 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems,
  };
};

function HomeNavigator({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  clearCart: () => void;
}) {
  return (
    <MyStack
      navigation={navigation}
      route={route}
      cartItems={cartItems}
      clearCart={clearCart}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
