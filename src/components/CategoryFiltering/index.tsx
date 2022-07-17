import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import categoriesGetir from '../../../assets/categoriesGetir';
import { Category } from '../../models';

const { width, height } = Dimensions.get('window');

const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 9,
        },
        item.name === active.name && {
          borderBottomColor: '#ffd00c',
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={{ fontSize: 14, color: 'white', fontWeight: '600' }}>
        {item.name}
      </Text>
    </View>
  );
};

function index({ category }: { category: Category }) {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces
      style={{
        width: '100%',
        backgroundColor: '#7849f7',
        height: height * 0.065,
      }}
    >
      {categories.map((item) => (
        <CategoryBox item={item} active={category} key={item.id} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default index;
