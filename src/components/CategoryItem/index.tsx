import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import { Category } from '../../models';

const { width, height } = Dimensions.get('window');

type categoryItemProps = {
  item: Category;
};

function index({ item }: categoryItemProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CategoryDetails', { category: item })}
      style={{
        width: width * 0.25,
        height: width * 0.24,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Image
        source={{
          uri: item.src,
        }}
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 8 }}
      />
      <Text style={{ fontSize: 12, color: '#616161', fontWeight: '500' }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

export default index;
