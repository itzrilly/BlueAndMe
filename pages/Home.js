import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Slider from '../components/Slider'
import Stats from '../components/Stat'

const Home = () => {


    return(
        <SafeAreaView style={styles.container}>
            <Slider />
            <Stats />
        </SafeAreaView>
    )

}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd'
    }
})