import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const TypeBox = ({
  item,
  active,
  setCat,
}: {
  item: String;
  active: String;
  setCat: any;
}) => (
  <TouchableOpacity
    onPress={() => setCat(item)}
    style={[
      {
        paddingHorizontal: 10,
        marginRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        height: height * 0.045,
      },
      item === active
        ? { backgroundColor: '#5c3ebc' }
        : { borderColor: '#f0eff7', borderWidth: 1 },
    ]}
  >
    <Text
      style={[
        { fontSize: 12, color: '#7849f7', fontWeight: '600' },
        item === active && { color: 'white' },
      ]}
    >
      {item}
    </Text>
  </TouchableOpacity>
);

function index() {
  const [category, setCategory] = useState<String>('Birlikte iyi gider');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces
      style={{
        width: '100%',
        backgroundColor: 'white',
        height: height * 0.072,
        flexDirection: 'row',
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
      }}
    >
      {['Birlikte iyi gider', 'Çubuk', 'Kutu', 'Külah', 'Çoklu', 'Bar'].map(
        (item) => (
          <TypeBox item={item} active={category} setCat={setCategory} />
        )
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default index;
