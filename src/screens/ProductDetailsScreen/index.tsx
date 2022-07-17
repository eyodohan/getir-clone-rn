import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Product } from '../../models';
import ImageCarousel from '../../components/ImageCarousel';
import DetailBox from '../../components/DetailBox';
import DetailProperty from '../../components/DetailProperty';
import CardButton from '../../components/CardButton';

function index(props) {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);
  console.log('product is ', product);

  if (!product) {
    return <ActivityIndicator color='#5d3ebd' />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <ImageCarousel images={product.images} />
        <DetailBox
          price={product.fiyat}
          name={product.name}
          quantity={product.miktar}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 14,
            color: '#808b99',
            fontWeight: '600',
          }}
        >
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CardButton item={product} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default index;
