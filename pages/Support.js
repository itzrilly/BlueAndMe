import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { connect, useSelector } from 'react-redux'
import { selectLanguage } from '../reduxStore/ActionsLanguage'

const Support = (props) => {

    // Getting Language for translation
    const lg = props.selectedLanguage

    const theme = useSelector(state => state.theme)
    //const home = props.selectedLanguage
    
    return(
        <ScrollView style={ theme.mode == 'light' ? styles.container_light : styles.container_dark }>
            <View style={styles.title_view}>
                <Text style={styles.title_text}>{lg.help}</Text>
            </View>

            <View style={styles.img_container}>
                <Image
                    source={ require('../assets/images/img/blue_user.png') }
                    style={styles.image_user}
                />
            </View>
        
            <TouchableOpacity style={ theme.mode == 'light' ? styles.item_container_light : styles.item_container_dark }
                onPress={() => {}}
                >
                <View style={styles.r_view}>
                    <Text style={ theme.mode == 'light' ? styles.rv_text_light : styles.rv_text_dark }>Forum</Text>
                    <TouchableOpacity
                        onPress={ () => {} }
                        style={styles.btn_rv_action}
                    >
                        <Text style={ theme.mode == 'light' ? styles.btn_text_light : styles.btn_text_dark }>{lg.consult}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.l_view}>
                    <Image
                        source={ require('../assets/images/icons/ic_assistant.png') }
                        style={styles.icon}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={ theme.mode == 'light' ? styles.item_container_light : styles.item_container_dark }
                onPress={() => {}}
                >
                <View style={styles.r_view}>
                    <Text style={ theme.mode == 'light' ? styles.rv_text_light : styles.rv_text_dark }>FAQ</Text>
                    <TouchableOpacity
                        onPress={ () => {} }
                        style={styles.btn_rv_action}
                    >
                        <Text style={ theme.mode == 'light' ? styles.btn_text_light : styles.btn_text_dark }>{lg.consult}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.l_view}>
                    <Image
                        source={ require('../assets/images/icons/ic_chat_64.png') }
                        style={styles.icon}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[{ marginBottom: 70 }, theme.mode == 'light' ? styles.item_container_light : styles.item_container_dark]}
                onPress={() => {}}
                >
                <View style={styles.r_view}>
                    <Text style={ theme.mode == 'light' ? styles.rv_text_light : styles.rv_text_dark }>{lg.contactUs}</Text>
                    <TouchableOpacity
                        onPress={ () => {} }
                        style={styles.btn_rv_action}
                    >
                        <Text style={ theme.mode == 'light' ? styles.btn_text_light : styles.btn_text_dark }>{lg.call}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.l_view}>
                    <Image
                        source={ require('../assets/images/icons/ic_help.png') }
                        style={styles.icon}
                    />
                </View>
            </TouchableOpacity>

            <StatusBar style="auto" />

        </ScrollView>
    )

}

const mapStateToProps = state => {
    return {
        selectedLanguage: state.language
    }
}

export default connect(mapStateToProps, { selectLanguage })(Support)

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
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    img_container: {
        marginTop: 0
    },
    image_user: {
        width: Dimensions.get('window').width,
        height: 300
    },
    item_container_light: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 11,
        padding: 10,
        borderRadius: 5
    },
    item_container_dark: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#14213d',
        margin: 11,
        padding: 10,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 0.2
    },
    r_view: {
        //flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        width: 140
    },
    rv_text_light:{
        textAlign: 'center',
        fontFamily: 'Montserrat-bold',
        fontSize: 18,
        marginBottom: 20
    },
    rv_text_dark:{
        textAlign: 'center',
        fontFamily: 'Montserrat-bold',
        fontSize: 18,
        marginBottom: 20,
        color: '#fff'
    },
    btn_rv_action: {
        height: 35,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#0d41e1',
        borderWidth: 1,
    },
    btn_text_light: {
        color: '#0d41e1',
        fontFamily: 'Montserrat-bold'
    },
    btn_text_dark: {
        color: '#fff',
        fontFamily: 'Montserrat-bold'
    },
    l_view: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    icon: {
        height: 80,
        width: 80,
        marginRight: 15
    }
})