import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from './CategoryScreen';
import BrowseScreen from './BrowseScreen';

const Stack = createStackNavigator();

function BrowseStack() {
  return (
    <Stack.Navigator initialRouteName="Browse">
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen
        name="Browse"
        options={{title: 'Ignition'}}
        component={BrowseScreen}
      />
    </Stack.Navigator>
  )
}

export default BrowseStack;
