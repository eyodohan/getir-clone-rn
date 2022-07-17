import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

type DetailBoxProps = {
  price: number;
  name: string;
  quantity: string;
};

function index({ price, name, quantity }: DetailBoxProps) {
  return (
    <View
      style={{ width: '100%', alignItems: 'center', backgroundColor: 'white' }}
    >
      <Text
        style={{
          color: '#5d3ebd',
          fontWeight: 'bold',
          marginTop: 12,
          fontSize: 20,
        }}
      >
        {'\u20BA'}
        {price}
      </Text>
      <Text style={{ fontWeight: '600', fontSize: 16, marginTop: 12 }}>
        {name}
      </Text>
      <Text
        style={{
          color: '#848897',
          fontWeight: '600',
          marginTop: 6,
          marginBottom: 18,
        }}
      >
        {quantity}
      </Text>
    </View>
  );
}

export default index;
