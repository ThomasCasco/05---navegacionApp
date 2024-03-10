import React from 'react'
import {  type NavigationProp,NavigatorScreenParams, useNavigation } from '@react-navigation/native'
import { Pressable,Text, View } from 'react-native'
import { globalStyles } from '../theme/appTheme'
import { PrimaryButton } from '../components/shared/PrimaryButton'
import type { RootStacksParams } from '../navigator/StackNavigator'

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStacksParams>>()

  return (
    <View style={globalStyles.container}>

       <PrimaryButton
        onPress= {() => navigation.navigate('ProductsScreen')}
        label="Productos"
       />
       <PrimaryButton 
       onPress= {() => navigation.navigate('SettingsScreen')}
       label="Settings"
       />

    </View>
  )
}
