import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions, TextInput, Image, Button, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()

    const [toggleCheckBox, setToggleCheckBox] = useState(0)
    const [decimalInput, setDecimalInput] = useState('')

    const validator = /^[+-]?\d*(?:[.,]\d*)?$/;

    function onNumberInputChange(text){
        if (validator.test(text)){
            text = text.replace(",",".")
            setDecimalInput(text);
            // console.log(text.slice(0, 3))
            if(text.slice(0, 3) === '620'){
                console.log('Good Number')
            }else{
                console.log('Bad Number')
            }
        }
        else{
            setDecimalInput(text.substring(0, text.length - 1));
        }
    }

    return(
        <ScrollView 
            style={styles.scroll_container} 
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}>

           <ImageBackground
                source={require('../assets/images/bg/blue_woman.png')}
                style={styles.img_background}
           >
            <Text style={styles.brand_view_text}>And Me</Text>
           </ImageBackground>
           
           <View style={styles.bottom_view}>
                <View style={styles.radius_view}>
                    <Text style={styles.welcome_text} >Bienvenue!</Text>
                    {/* Form Inputs View */}
                    <View style={styles.login_view}>
                        <TextInput 
                            placeholder='Numéro de service' 
                            style={styles.text_input}
                            keyboardType = 'numeric'
                            maxLength={9}
                            value = {decimalInput}
                            onChangeText={(text) => {
                                setDecimalInput(text);
                                onNumberInputChange(text);
                            }}
                        />
                        <TextInput 
                            secureTextEntry={true} 
                            style={styles.text_input} 
                            placeholder='Mot de passe' 
                        />
                        <View style={styles.check_code}>
                            <TextInput
                                style={styles.text_input_code} 
                                placeholder='Code de vérification' 
                                maxLength={4}
                            />
                            <Image
                                source={ require('../assets/images/icons/lg_code.png') }
                                style={styles.img_code}
                            />
                        </View>
                    </View>

                    <View style={styles.forgot_pw_view}>
                        <View style={styles.checkbox_container}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />
                            <Text style={styles.label}>Se souvenir de moi</Text>
                        </View>
                        <View style={styles.forgot_pw_container}>
                            <TouchableOpacity
                                onPress={() => {}}
                            >
                                <Text style={styles.label}>Mot de passe oublié ?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Login Button */}
                    <View style={styles.lg_btn_container}>
                        <TouchableOpacity
                            onPress={ () => navigation.navigate('Home') }
                            style={styles.btn_login}
                        >
                            <Text style={styles.text_lg_btn}>Se connecter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    scroll_container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    img_background: {
        height: Dimensions.get('window').height / 2.5
    },
    bottom_view: {
        flex: 1.5,
        backgroundColor: '#fff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    brand_view_text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 200,
        marginLeft: 50,
        fontFamily: 'Montserrat-Bold'
    },
    radius_view: {
        padding: 40
    },
    welcome_text: {
        color: '#000',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        // color: '#0d41e1'
        fontFamily: 'Montserrat-Bold'
    },
    login_view: {
        marginTop: 10
    },
    text_input: {
        borderBottomWidth: 1,
        borderColor: '#4632A1',
        padding: 10,
        margin: 10,
        fontFamily: 'Montserrat-Regular'
    },
    forgot_pw_view: {
        height: 50,
        marginTop: 20,
        flexDirection: 'row'
    },
    check_code: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text_input_code: {
        flex: 2,
        borderBottomWidth: 1,
        borderColor: '#4632A1',
        padding: 10,
        margin: 10,
        fontFamily: 'Montserrat-Regular'
    },
    img_code: {
        flex: 1
    },
    checkbox_container: {
        flexDirection: "row",
        marginBottom: 20
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12
    },
    lg_btn_container: {
        marginTop: 5,
        backgroundColor: 'transparent'
    },
    btn_login: {
        backgroundColor: '#0d41e1',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: 'rgba(0,0.1,0,5)',
        shadowOpacity: 0.3,
        elevation: 1

    },
    text_lg_btn: {
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20
    }
})

export default Login