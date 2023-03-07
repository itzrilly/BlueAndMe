import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { selectLanguage } from '../reduxStore/ActionsLanguage'
import { languages } from '../languages/Languages'
import { useSelector } from 'react-redux'

const Language = (props) => {

    // Getting the theme state to switch between dark and light
    const theme = useSelector(state => state.theme)

    // Getting Language for translation
    const lg = props.selectedLanguage
    
    return (
        <View style={ theme.mode == 'light' ? styles.container_light : styles.container_dark }>
            <View style={styles.title_view}>
                <Text style={styles.title_text}>{lg.language}</Text>
            </View>

            <TouchableOpacity
                onPress={() => props.selectLanguage(languages.french)}
                style={ theme.mode == 'light' ? styles.btn_language_light : [ styles.btn_language_dark, { marginBottom: 0, borderBottomWidth: 0 } ] }
            >
                { lg.language == 'Langue' ?
                (<Image source={ theme.mode == 'light' ?  require('../assets/images/icons/ic_checked.png') : require('../assets/images/icons/ic_checked_white.png') } style={styles.icon} />) : null
                }
                <Text style={ theme.mode == 'light' ? styles.textStyle_light : styles.textStyle_dark }>Français</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.selectLanguage(languages.english)}
                style={ theme.mode == 'light' ? styles.btn_language_light : styles.btn_language_dark }
            >
                { lg.language == 'Language' ?
                (<Image source={ theme.mode == 'light' ?  require('../assets/images/icons/ic_checked.png') : require('../assets/images/icons/ic_checked_white.png') } style={styles.icon} />) : null
                }
                <Text style={ theme.mode == 'light' ? styles.textStyle_light : styles.textStyle_dark }>English</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container_light: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#14213d'
    },
    title_view: {
        backgroundColor: '#0d41e1', 
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    title_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    btn_language_light: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn_language_dark: {
        backgroundColor: '#14213d',
        padding: 15,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: '#ddd',
        borderBottomColor: '#ddd',
        borderWidth: 0.3
    },
    textStyle_light: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22,
        padding: 10,
        textTransform: 'uppercase'
    },
    textStyle_dark: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22,
        padding: 10,
        textTransform: 'uppercase',
        color: '#fff'
    },
    icon: {
        height: 30,
        width: 30
    }
})

const mapStateToProps = state => {
    return {
        selectedLanguage: state.language
    }
}

export default connect(mapStateToProps, { selectLanguage })(Language)
