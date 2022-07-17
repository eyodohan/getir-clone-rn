import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Product } from '../../models';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/cartActions';

type CartItemProps = {
  product: Product;
  quantity: number;
  removeFromCart: (product: Product) => void;
};

const { width, height } = Dimensions.get('window');

function index({ product, quantity, removeFromCart }: CartItemProps) {
  return (
    <View style={{ width: '100%', backgroundColor: 'white' }}>
      <View
        style={{
          height: height * 0.13,
          flexDirection: 'row',
          marginHorizontal: width * 0.04,
          alignItems: 'center',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          borderBottomWidth: 0.4,
          borderBottomColor: 'lightgrey',
          width: width * 0.92,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              borderWidth: 0.45,
              padding: 4,
              borderColor: 'lightgrey',
              borderRadius: 8,
            }}
          >
            <Image
              source={{ uri: product.image }}
              style={{
                height: height * 0.09,
                width: height * 0.09,
              }}
            />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                maxWidth: width * 0.46,
              }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: '#848897',
                fontWeight: '600',
              }}
            >
              {product.miktar}
            </Text>
            <Text
              style={{
                color: '#5d3ebd',
                fontWeight: 'bold',
                marginTop: 6,
                fontSize: 15,
              }}
            >
              {'\u20BA'}
              {product.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            shadowOpacity: 0.4,
            shadowColor: 'gray',
            width: width * 0.21,
            borderColor: 'lightgrey',
            borderWidth: 0.5,
            height: height * 0.037,
            borderRadius: 10,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center' }}
            onPress={() => removeFromCart(product)}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              backgroundColor: '#5d3ebd',
              height: height * 0.037,
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 12 }}>
              {quantity}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product: Product) =>
      dispatch(actions.removeFromCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(index);
