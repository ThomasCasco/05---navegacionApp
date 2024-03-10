import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { globalStyles, styles } from '../theme/appTheme'
import { RootStacksParams } from '../navigator/StackNavigator'


export const ProductScreen = () => {
    const navigation = useNavigation();
    //recibir parametros y desestructurarlos
    const params = useRoute<RouteProp<RootStacksParams,'Product'>>().params;

    //elegir el orden
    useEffect(() => {
      navigation.setOptions({
        title: params.name
      })
    }, [])
    

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.blackText}>Product</Text>

        <Text style={{color: 'black '}}>
            {params.id} - {params.name}
        </Text>   
    </View>
  )
}
