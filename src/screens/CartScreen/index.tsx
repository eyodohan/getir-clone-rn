import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import CartItem from '../../components/CartItem';
import ProductItem from '../../components/ProductItem';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

import productsGetir from '../../../assets/productsGetir';
import { Product } from '../../models';

function index({
  cartItems,
  route,
}: {
  cartItems: { product: Product; quantity: number }[];
}) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  console.log('hey benim roure parametrelerin : ', route.params);

  const getProductPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.fiyat;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    getProductPrice();
  }, [cartItems]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {cartItems.map((item) => (
          <CartItem
            product={item.product}
            key={item.product.id}
            quantity={item.quantity}
          />
        ))}
        <Text style={{ padding: 15, fontWeight: 'bold', color: '#5d3ebd' }}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces
          style={{ backgroundColor: 'white' }}
        >
          {productsGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: '4%',
          backgroundColor: '#f8f8f8',
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: '#5d3ebd',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#fefefe',
            flex: 1,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -10,
            height: height * 0.06,
          }}
        >
          <Text style={{ color: '#5d3ebd', fontWeight: 'bold', fontSize: 16 }}>
            {'\u20BA'}
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems,
  };
};

export default connect(mapStateToProps, null)(index);
