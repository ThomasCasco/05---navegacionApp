import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { ProductsScreen } from '../screens/ProductsScreen'; 
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ProductScreen } from '../screens/ProductScreen';

export type RootStacksParams = {
  Home: undefined;
  ProductsScreen: {id: number, name: string};
  ProductScreen: undefined;
  SettingsScreen: undefined;
}

const Stack = createStackNavigator<RootStacksParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        elevation: 0
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductsScreen"  component={ProductsScreen} />
      <Stack.Screen name="SettingsScreen"  component={SettingsScreen} />
      <Stack.Screen name="ProductScreen"  component={ProductScreen} />
    </Stack.Navigator>
  );
}