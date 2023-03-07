import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import numeral from 'numeral'
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'

const StatItem = (props) => {
    const theme = useSelector(state => state.theme)

    return (
        <View style={ theme.mode == 'light' ? styles.item_container_light : styles.item_container_dark }>
            <View style={ theme.mode == 'light' ? styles.item_right_light : styles.item_right_dark }>
                <Text style={ theme.mode == 'light' ? styles.icon_title_light : styles.icon_title_dark }>
                    {props.title}
                </Text>
                <Image
                    source={{ uri: props.image }}
                    style={styles.icon}
                />
            </View>

            <View style={ theme.mode == 'light' ? styles.item_left_container_light : styles.item_left_container_dark }>
                { props.qty ? (<Text style={ theme.mode == 'light' ? styles.item_left_text_light : styles.item_left_text_dark }>{numeral(props.qty).format('0,0[.]00')} U</Text>) : null }
                { props.data ? (<Text style={ theme.mode == 'light' ? styles.item_left_text_light : styles.item_left_text_dark }>{props.data}</Text>) : null }
                { props.sms ? (<Text style={ theme.mode == 'light' ? styles.item_left_text_light : styles.item_left_text_dark }>{props.sms}</Text>) : null }
                <View style={styles.view_date}>
                    <Text style={ theme.mode == 'light' ?  styles.validity_date_light : styles.validity_date_dark }>
                        {'\n'}{props.text_validity} {props.date_exp}
                    </Text>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    )
}

export default StatItem

const styles = StyleSheet.create({
    item_container_light: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 7,
        marginBottom: 7,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item_container_dark: {
        flex: 1,
        backgroundColor: '#14213d',
        padding: 7,
        marginBottom: 7,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#fff',
        borderWidth: 0.2
    },
    item_right_light: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff'
    },
    item_right_dark: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#14213d'
    },
    icon_title_light: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 12
    },
    icon_title_dark: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        color: '#fff'
    },
    icon: {
        height: 45,
        width: 45,
        margin: 5
    },
    item_left_container_light: {
        flex: 3,
        backgroundColor: '#fff'
    },
    item_left_container_dark: {
        flex: 3,
        backgroundColor: '#14213d',
    },
    item_left_text_light: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30
    },
    item_left_text_dark: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: '#fff'
    },
    view_date: {
    },
    validity_date_light: {
        fontFamily: 'Montserrat-SemiBold'
    },
    validity_date_dark: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#fff'
    }
})