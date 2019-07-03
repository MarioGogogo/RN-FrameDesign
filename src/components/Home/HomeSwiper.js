import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Swiper from 'react-native-swiper';
import theme from '../../common/theme';
import { width } from '../../common/screen';

const HomeSwiper = ({ imageSources }) => (
  <Swiper autoplay activeDotColor={theme.color} dotColor="#ffffff">
    {
      imageSources.map((v, i) => (
        /* eslint-disable-next-line */
        <View key={i} style={styles.imgWrap}>
          <Image source={v} style={styles.img} />
        </View>
      ))
    }
  </Swiper>
);

const styles = StyleSheet.create({
  imgWrap: {
    flex: 1
  },
  img: {
    width,
    height: 200,
    resizeMode: 'stretch'
  }
});

export default HomeSwiper;
