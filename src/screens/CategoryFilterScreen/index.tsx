import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CategoryFiltering from '../../components/CategoryFiltering';
import TypeFiltering from '../../components/TypeFiltering';
import ProductsContainer from '../../components/ProductsContainer';
import { Category } from '../../models';

function index(props: any) {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView style={styles.container}>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductsContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default index;
