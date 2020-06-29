import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {isEmpty} from 'ramda';
import {saveValue} from '../../redux/actions';
import {useDispatch} from 'react-redux';

function BrowseScreen({navigation}) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const navigateToCategory = () => {
    dispatch(saveValue(value));
    navigation.navigate('Category');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text> Welcome</Text>
      <View style={{marginVertical: 10}}>
        <TextInput
          placeholder="Enter text here"
          onChangeText={(text) => setValue(text)}
        />
      </View>
      <TouchableOpacity
        disabled={isEmpty(value)}
        onPress={navigateToCategory}
        style={{marginVertical: 10}}>
        <Text>Click to go to Category Screen.</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BrowseScreen;
