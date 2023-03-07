import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { connect, useSelector } from 'react-redux'
import { selectLanguage } from '../reduxStore/ActionsLanguage'

const AboutUs = (props) => {
    const navigation = useNavigation()

    const lg = props.selectedLanguage

    const theme = useSelector(state => state.theme)

    return (
        <View style={ theme.mode == 'light' ? styles.container_light : styles.container_dark }>
            <View style={ theme.mode == 'light' ? styles.img_container_light : styles.img_container_dark }>
                <Image
                    source={ require('../assets/images/img/Slide02.jpg') }
                    style={styles.image_user}
                />

                <View style={ theme.mode == 'light' ? styles.view_container_light : styles.view_container_dark }>
                    <Text style={  theme.mode == 'light' ? styles.title_light : styles.title_dark }>Blue And Me</Text>
                    <Text style={ theme.mode == 'light' ? styles.text_info_light :  styles.text_info_dark }>Version: 1.0</Text>
                    <Text style={ theme.mode == 'light' ? styles.text_info_light :  styles.text_info_dark }>Copyright © 2022 CAMTEL</Text>
                </View>

                <TouchableOpacity 
                    onPress={ () => navigation.navigate('LegalInfos') }
                    style={ theme.mode == 'light' ? styles.vs_container_light : styles.vs_container_dark }
                >
                    <Text style={ theme.mode == 'light' ? styles.text_info_title_light : styles.text_info_title_dark }>{lg.legalInfos}</Text>
                    <Image 
                        source={ require('../assets/images/icons/ic_right_chevron.png') } 
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {}}
                    style={ theme.mode == 'light' ? styles.vs_container_light : styles.vs_container_dark }
                >
                    <Text style={ theme.mode == 'light' ? styles.text_info_title_light : styles.text_info_title_dark }>{lg.softwares}</Text>
                    <Image 
                        source={ require('../assets/images/icons/ic_right_chevron.png') } 
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {}}
                    style={ theme.mode == 'light' ? styles.vs_container_light : styles.vs_container_dark }
                >
                    <Text style={ theme.mode == 'light' ? styles.text_info_title_light : styles.text_info_title_dark }>{lg.uGeneralConditions}</Text>
                    <Image 
                        source={ require('../assets/images/icons/ic_right_chevron.png') } 
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {}}
                    style={ theme.mode == 'light' ? styles.vs_container_light : styles.vs_container_dark }
                >
                    <Text style={ theme.mode == 'light' ? styles.text_info_title_light : styles.text_info_title_dark }>{lg.ourEngagments}</Text>
                    <Image 
                        source={ require('../assets/images/icons/ic_right_chevron.png') } 
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        selectedLanguage: state.language
    }
}

export default connect(mapStateToProps, { selectLanguage })(AboutUs)

const styles = StyleSheet.create({
    container_light: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#14213d'
    },
    img_container_light: {
        marginTop: 0,
        backgroundColor: '#fff'
    },
    img_container_dark: {
        marginTop: 0,
        backgroundColor: '#14213d'
    },
    image_user: {
        width: Dimensions.get('window').width,
        height: 220
    },
    view_container_light:{
        backgroundColor: '#fff',
        padding: 20,
        borderColor: '#ddd',
        borderBottomWidth: 1
    },
    view_container_dark:{
        backgroundColor: '#14213d',
        padding: 20,
        borderColor: '#ddd',
        borderBottomWidth: 1
    },
    title_light: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        marginBottom: 10
    },
    title_dark: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        marginBottom: 10,
        color: '#fff'
    },
    text_info_light: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12
    },
    text_info_dark: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#fff'
    },
    vs_container_light: {
        backgroundColor: '#fff',
        padding: 20,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    vs_container_dark: {
        backgroundColor: '#14213d',
        padding: 20,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        height: 23,
        width: 23
    },
    text_info_title_light: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    text_info_title_dark: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: '#fff'
    }
})