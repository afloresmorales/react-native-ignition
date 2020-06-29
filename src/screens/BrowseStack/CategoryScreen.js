import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

function CategoryScreen() {
  const value = useSelector((state) => state.browser.value);
  return (
    <View>
      <Text>{`You entered this value: ${value}`}</Text>
    </View>
  );
}

export default CategoryScreen;
