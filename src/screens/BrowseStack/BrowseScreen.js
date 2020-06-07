import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';

function BrowseScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text> Welcome</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Category')} style={{marginVertical: 10}}>
        <Text>Click to go to Category Screen.</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BrowseScreen;
