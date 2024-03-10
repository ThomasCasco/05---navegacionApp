import { type NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles, styles } from '../theme/appTheme'
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../components/shared/PrimaryButton';
import { type RootStacksParams } from '../navigator/StackNavigator';

const products = [
  {id:1 , name: 'carta Charmander'},
  {id:2 , name: 'carta Bulbasaur'},
  {id:3 , name: 'carta Squirtle'},  
  {id:4 , name: 'carta Snorlax'},
  {id:5 , name: 'carta Pikachu'},
];

export const ProductsScreen = () => {

  //que voy a usar aca
  const navigator = useNavigation<NavigationProp<RootStacksParams>>()

  return (
    <View style={globalStyles.container}>
      <Text style={{
        marginBottom: 10,
        fontSize: 20,
        color: 'black'
        }}>Products</Text>

      <FlatList 
      //renderizar la lista de productos
      data={products}
      renderItem={({item}) => (
        <PrimaryButton 
        onPress={() => navigator.navigate('ProductScreen', {id: item.id, name: item.name})}
        label={item.name}
        />
      )}
    />

      <Text style={{
        marginTop: 10,
        fontSize: 20,
        color: 'black'
      }}>Ajustes</Text>
      <PrimaryButton
        onPress={() => {navigator.navigate('SettingsScreen')}}
        label="Settings"
        />
    </View>
  )
}
