import { StackActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles, styles } from '../theme/appTheme'
import { PrimaryButton } from '../components/shared/PrimaryButton'


export const SettingsScreen = () => {
    const navigator = useNavigation()
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.blackText}>Settings Screen</Text>

        <PrimaryButton
        label="Regresar"
        onPress={() => navigator.goBack()}
        />

        <PrimaryButton
        label="Regresar Home"
        onPress={() => navigator.dispatch(StackActions.popToTop())}
        />

    </View>
  )
}
