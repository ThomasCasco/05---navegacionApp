import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        color: 'black',
        marginBottom: 10
    }
});

export const globalColors =  {
    primary: '#7037eb',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#ffba08',
    danger: '#ef71d36',
    dark: '#22223b',

    background: '#fff'
}

export const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        backgroundColor: globalColors.background
   },
    primaryButton: {
        backgroundColor: globalColors.primary,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        color: globalColors.background,
        fontSize: 18
    },
    blackText: {
        color: 'black'
    }
    
})
