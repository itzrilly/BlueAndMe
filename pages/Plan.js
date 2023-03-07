import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { connect, useSelector } from 'react-redux'
import { selectLanguage } from '../reduxStore/ActionsLanguage'

const Plan = (props) => {
    const navigation = useNavigation()

    const lg = props.selectedLanguage

    const theme = useSelector(state => state.theme)

    return (
        <View style={ theme.mode == 'light' ? styles.container_light : styles.container_dark }>
            <View style={styles.title_view}>
                <Text style={styles.title_text}>{lg.myTariffPlan}</Text>
            </View>

            <TouchableOpacity 
                style={ theme.mode == 'light' ? styles.plan_view_light : styles.plan_view_dark }>
                <Text style={ theme.mode == 'light' ? styles.text_info_light : styles.text_info_dark }>{lg.currentTariffPlan}: 
                    <Text style={styles.text_plan}> ULSERVICE</Text>
                </Text>
                <Image source={ require('../assets/images/icons/ic_plan_detail.png') } style={styles.icon} />
            </TouchableOpacity>
            
            <TouchableOpacity 
                onPress={ () => { navigation.navigate('ChoicePlan') } }
                style={ theme.mode == 'light' ? styles.plan_view_light : styles.plan_view_dark }
            >
                <Text style={ theme.mode == 'light' ? styles.text_info_light : styles.text_info_dark }>{lg.changeTariffPlan}</Text>
                <Image source={ require('../assets/images/icons/ic_right_chevron.png') } style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        selectedLanguage: state.language
    }
}

export default connect(mapStateToProps, { selectLanguage })(Plan)

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
        marginBottom: 5
    },
    title_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    plan_view_light: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    plan_view_dark: {
        backgroundColor: '#14213d',
        padding: 15,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopColor: '#ddd',
        borderBottomColor: '#ddd',
        borderWidth: 0.3
    },
    text_info_light: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        padding: 10,
        textTransform: 'uppercase'
    },
    text_info_dark: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        padding: 10,
        textTransform: 'uppercase',
        color: '#fff'
    },
    text_plan: {
        fontFamily: 'Montserrat-SemiBold',
    },
    icon: {
        height: 23,
        width: 23
    },
})