import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable,Text, View } from 'react-native'
import { globalStyles } from '../../theme/appTheme'

interface Props {
    onPress: () => void;
    label: string;
}


export const PrimaryButton = ({onPress,label}:Props) => {

  const navigation = useNavigation()

  return (
    <Pressable
        onPress={onPress} 
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>  )
}
