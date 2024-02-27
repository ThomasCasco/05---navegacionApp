import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const PersonaScreen = () => {
    const navigator = useNavigation()
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Persona Screen </Text>
    </View>
  )
}
