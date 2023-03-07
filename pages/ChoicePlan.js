import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, Pressable, Dimensions } from 'react-native'
import { connect, useSelector } from 'react-redux'
import { selectLanguage } from '../reduxStore/ActionsLanguage'

const ChoicePlan = (props) => {

    const lg = props.selectedLanguage

    const theme = useSelector(state => state.theme)

    const [ modalVisible, setModalVisible ] = useState(false)

    return (
        <View style={ theme.mode == 'light' ? styles.container_light : styles.container_dark }>
            <View style={styles.title_view}>
                <Text style={styles.title_text}>{lg.newTariffPlan}</Text>
            </View>

            <View style={styles.view}>
                <Text style={ theme.mode == 'light' ?  styles.text_light : styles.text_dark }>{lg.msgChoiceTariffPlan}</Text>
            </View>

            <Pressable 
                onPress={() => setModalVisible(true)}
                style={ theme.mode == 'light' ?  styles.plan_view_light : styles.plan_view_dark }
            >
                <Text style={ theme.mode == 'light' ?  styles.text_info_light : styles.text_info_dark }>1. Basic</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalInnerView}>
                    <View style={ theme.mode == 'light' ? styles.modalView_light : styles.modalView_dark }>
                        <Text style={ theme.mode == 'light' ? styles.modalText_light : styles.modalText_dark }>{lg.confirmMsgPlanChoosen}: <Text style={styles.plan_text}>{'\n'}Blue Classic!</Text></Text>
                        <Pressable
                            style={styles.buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={ theme.mode == 'light' ? styles.textStyle_light : styles.textStyle_dark }>{lg.confirmBtn}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        selectedLanguage: state.language
    }
}

export default connect(mapStateToProps, { selectLanguage })(ChoicePlan)

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
        marginBottom: 30
    },
    title_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    view: {
        alignItems: 'center',
        marginBottom: 25
    },
    text_light: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22,
        padding: 10,
        textAlign: 'center'
    },
    text_dark: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22,
        padding: 10,
        textAlign: 'center',
        color: '#fff'
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
    modalInnerView: {
        flex: 1,
        marginTop: 22,
        justifyContent: 'flex-end'
    },
    modalView_light: {
        height: Dimensions.get('window').height * 1/4,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5
    },
    modalView_dark: {
        height: Dimensions.get('window').height * 1/4,
        backgroundColor: '#14213d',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5
    },
    modalText_light: {
        fontFamily: 'Montserrat-Regular',
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16
    },
    modalText_dark: {
        fontFamily: 'Montserrat-Regular',
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
        color: '#fff'
    },
    plan_text: {
        fontFamily: 'Montserrat-SemiBold',
    },
    buttonClose: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#0d41e1',
    },
    textStyle_light: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },
    textStyle_dark: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    }
})