import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {
  
  //hook para usar el navigator mas rapido
  const navigator = useNavigation()
  
  return (
    <View style={styles.globalMargin}>
        <Text> Pagina2Screen </Text>

        <Button 
          title='ir pagina 3'
          onPress={ () => navigator.navigate('Pagina3Screen')}
        />
    </View>
  )
}
