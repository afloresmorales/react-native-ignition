import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BrowseStack from './screens/BrowseStack/BrowseStack';
import ProfileStack from './screens/ProfileStack/ProfileStack';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="BrowseScreen"
          options={{title: 'Browse'}}
          component={BrowseStack}
        />
        <Tab.Screen
          name="Profile"
          options={{
            title: 'My Profile',
          }}
          component={ProfileStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
