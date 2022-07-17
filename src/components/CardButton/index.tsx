import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Product } from '../../models';
import * as actions from '../../redux/actions/cartActions';

const { width, height } = Dimensions.get('window');

type cartButtonProps = {
  addItemToCart: (a: product) => void;
  item: Product;
};

function index({ item, addItemToCart }: cartButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => addItemToCart(item)}
      style={{
        width: '100%',
        height: height * 0.11,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          height: height * 0.06,
          width: '90%',
          backgroundColor: '#5d39c1',
          marginTop: -10,
          marginHorizontal: '5%',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontWeight: 'bold', color: 'white' }}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) => {
      dispatch(actions.addToCart({ quantity: 1, product }));
    },
  };
};

export default connect(null, mapDispatchToProps)(index);
