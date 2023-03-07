import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Header = ({
    goBack,
    text
}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            { !!goBack ? 
                <TouchableOpacity onPress={!!goBack ? goBack : navigation.goBack()}>
                    <Text>GoBack</Text>
                </TouchableOpacity> : <Text  />
            }
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 42,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
})

export default Header