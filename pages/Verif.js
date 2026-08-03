import React, { Component } from 'react'
import {
    Text,
    View,
    Pressable,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import SvgIcon from '../assets/images/SvgIcon';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useNavigation } from '@react-navigation/native';

const Verif = ({ route: { params: {phoneNumber} } }) => {
    const navigation = useNavigation()

    return (
        <KeyboardAvoidingView behavior="position" style={styles.mainCon}>
            <View style={{padding: 20}}>
                <Pressable onPress={() => {} }>
                    <SvgIcon icon={'back'} width={30} height={30} />
                </Pressable>
            </View>
            <View style={{position: 'relative', bottom: 30}}>
                <View style={styles.loginIcon}>
                    <SvgIcon icon={'enterOtp'} width={280} height={280} />
                </View>
                <View style={styles.container}>
                    <View style={styles.loginLblCon}>
                        <Text style={styles.loginLbl}>Entrer le code?</Text>
                    </View>
                    <View style={styles.forgotDes}>
                        <Text style={styles.forgotDesLbl}>
                            Un code à 4 chiffres a été envoyé à
                        </Text>
                        <Text style={styles.forgotDesLbl}>{phoneNumber}</Text>
                    </View>
                    <View style={styles.formCon}>
                        <OTPInputView
                            pinCount={4}
                            autoFocusOnLoad
                            style={{width: '80%', height: 70}}
                            codeInputFieldStyle={{color: '#000'}}
                            onCodeFilled={code =>
                                navigation.navigate('Home')
                            }
                        />
                        <Pressable onPress={() => {}}>
                            <Text style={styles.registerLbl}>Renvoyer le code</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    mainCon: {
        backgroundColor: '#fff',
        flex: 1,
    },
    loginIcon: {
        alignSelf: 'center',
    },
    formCon: {
        alignItems: 'center',
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 50,
    },
    loginLblCon: {
        position: 'relative',
        bottom: 40,
    },
    loginLbl: {
        color: '#000',
        fontSize: 40,
        // fontFamily: Fonts.type.NotoSansExtraBold,
    },
    forgotDes: {
        position: 'relative',
        bottom: 35,
    },
    forgotDesLbl: {
        color: '#000',
        // fontFamily: Fonts.type.NotoSansRegular,
    },
    registerLbl: {
        color: '#0057ff', 
        // fontFamily: Fonts.type.NotoSansSemiBold
    },
});

export default Verif