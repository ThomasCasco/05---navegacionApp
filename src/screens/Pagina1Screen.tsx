import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'


interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Pagina1Screen </Text>

        <Button 
          title='Ir Pagina2'
          onPress={() => navigation.navigate('Pagina2Screen')}
        />  

        <Text>Navegar con argumentos</Text>

        <TouchableOpacity
          onPress = {() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Thomas'
          })}
        >
          <Text style={styles.title} >Pedro</Text>
        </TouchableOpacity>

        

    </View>
  )
}
