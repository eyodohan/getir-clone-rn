import React, { useRef, useState } from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function index({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef((viewableItems) => {
    if (viewableItems.viewableItems.length) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        height: height * 0.25,
        paddingTop: 25,
      }}
    >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5}
        snapToAlignment='center'
        decelerationRate='fast'
        data={images}
        style={{ width: width * 0.5, height: height * 0.21 }}
        renderItem={(item) => (
          <Image
            source={{ uri: item.item }}
            style={{ width: width * 0.5, height: height * 0.21 }}
            resizeMode='stretch'
          />
        )}
        viewabilityConfig={viewConfig.current}
        onViewableItemsChanged={onViewRef.current}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 30,
          height: 12,
          justifyContent: 'space-around',
        }}
      >
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: activeIndex === index ? '#5d3ebd' : '#f2f0fd',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
  },
});

export default index;
