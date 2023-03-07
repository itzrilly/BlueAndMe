import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import { connect, useSelector } from 'react-redux'
import { selectLanguage } from '../reduxStore/ActionsLanguage'

const Password = (props) => {
    
    const lg = props.selectedLanguage

    const theme = useSelector(state => state.theme)

    return (
        <View style={ theme.mode == 'light' ? styles.container_light : styles.container_dark }>

            <View style={styles.title_view}>
                {/*<Image
                    source={ require('../assets/images/img/password.png') }
                    style={styles.inner_icon}
                />*/}
                <Text style={styles.title_text}>{lg.updatePassword}</Text>
            </View>

            <View style={styles.img_container}>
                <Image
                    source={ require('../assets/images/img/Slide06.jpg') }
                    style={styles.image_user}
                />
            </View>

            <View style={styles.form_view}>
                <TextInput 
                    placeholder={lg.currentPwd}
                    style={ theme.mode == 'light' ? styles.text_input_light : styles.text_input_dark }
                    placeholderTextColor={ theme.mode == 'light' ? '#000' : '#fff' }
                />

                <TextInput 
                    placeholder={lg.newPwd}
                    style={ theme.mode == 'light' ? styles.text_input_light : styles.text_input_dark }
                    placeholderTextColor={ theme.mode == 'light' ? '#000' : '#fff' }
                />

                <TextInput 
                    placeholder={lg.reNewPwd}
                    style={ theme.mode == 'light' ? styles.text_input_light : styles.text_input_dark }
                    placeholderTextColor={ theme.mode == 'light' ? '#000' : '#fff' }
                />

                <View style={styles.btn_container}>
                        <TouchableOpacity
                            onPress={ () => {} }
                            style={styles.btn}
                        >
                            <Text style={styles.text_btn}>{lg.validBtn}</Text>
                        </TouchableOpacity>
                    </View>
            </View>

        </View>
    )
}

const mapStateToProps = state => {
    return {
        selectedLanguage: state.language
    }
}

export default connect(mapStateToProps, { selectLanguage })(Password)

const styles = StyleSheet.create({
    container_light: {
        flex: 1
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#14213d'
    },
    title_view: {
        backgroundColor: '#0d41e1',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'flex-end'
    },
    title_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        //marginTop: 10
    },
    /*inner_icon: {
        width: 100,
        height: 100,
        marginBottom: 10
    },*/
    img_container: {
        marginTop: 0
    },
    image_user: {
        width: Dimensions.get('window').width,
        height: 230
    },
    form_view: {
        margin: 20
    },
    text_input_light: {
        borderBottomWidth: 1,
        borderColor: '#4632A1',
        padding: 10,
        margin: 10,
        fontFamily: 'Montserrat-Regular'
    },
    text_input_dark: {
        borderBottomWidth: 1,
        borderColor: '#4632A1',
        padding: 10,
        margin: 10,
        fontFamily: 'Montserrat-Regular',
        color: '#fff'
    },
    btn_container: {
        marginTop: 20
    },
    btn: {
        backgroundColor: '#0d41e1',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: 'rgba(0,0.1,0,5)',
        shadowOpacity: 0.3,
        elevation: 1

    },
    text_btn: {
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22,
        textTransform: 'uppercase'
    }
})
