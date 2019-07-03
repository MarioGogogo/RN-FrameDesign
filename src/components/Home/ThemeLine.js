import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../../common/theme';

const ThemeLine = ({ name, textStyle, lineStyle }) => (
  <View style={[styles.lineStyle, lineStyle]}>
    <Text style={[styles.textStyle, textStyle]}>{name}</Text>
  </View>
);

ThemeLine.defaultProps = {
  textStyle: '',
  lineStyle: ''
};



const styles = StyleSheet.create({
  lineStyle: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: theme.color
  }
});

export default ThemeLine;
