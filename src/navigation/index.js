import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import SuccessScreen from '../containers/Success';
import FailureScreen from '../containers/Failure';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      >
        <Tab.Screen name="Success" component={SuccessScreen} />
        <Tab.Screen name="Failure" component={FailureScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
