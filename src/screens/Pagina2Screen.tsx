import { useNavigation } from '@react-navigation/native'
import React,{useEffect} from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {
  
  //hook para usar el navigator mas rapido
  const navigator = useNavigation()
  
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Volver?'
    })
  }, [])
  
  
  return (
    <View style={styles.globalMargin}>
        <Text style = {styles.title}> Pagina2Screen </Text>

        <Button 
          title='ir pagina 3'
          onPress={ () => navigator.navigate('Pagina3Screen')}
        />
    </View>
  )
}
