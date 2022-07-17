import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import productsGetir from '../../../assets/productsGetir';

import ProductItem from '../ProductItem';

function index() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text style={{ color: 'grey', fontWeight: 'bold', padding: 14 }}>
        Çubuk
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          flexWrap: 'wrap',
          flex: 1,
          paddingVertical: 10,
        }}
      >
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default index;
