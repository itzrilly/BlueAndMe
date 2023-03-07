import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import infoData from '../helpers/InfosUser'
//import Header from '../components/Header'
import { connect, useSelector } from 'react-redux'
import { selectLanguage } from '../reduxStore/ActionsLanguage'

const InfoUser = (props) => {

    const lg = props.selectedLanguage

    const theme = useSelector(state => state.theme)

    const [ dataUser, setDataUser ] = useState([])

    userData = () => {
        let item = []

        infoData.map(dUser => {
            item = dUser.user.map(myUser => {
                //Alert.alert('MyUser', JSON.stringify(myUser.firstname))
                return (
                    <View key={myUser.id}>
                        <View style={ theme.mode == 'light' ? styles.img_container_light : styles.img_container_dark }>
                            <Image source={{ uri: myUser.pic_url }} style={styles.picture} />
                        </View>
                        <Text style={ theme.mode == 'light' ?  styles.text_info_container_light : styles.text_info_container_dark }>
                            <Text style={styles.title}>{lg.firstName}: </Text>
                            <Text style={styles.text_info}>{myUser.firstname}</Text>
                        </Text>
                        <Text style={ theme.mode == 'light' ?  styles.text_info_container_light : styles.text_info_container_dark }>
                            <Text style={styles.title}>{lg.lastName}: </Text>
                            <Text style={styles.text_info}>{myUser.lastname}</Text>
                        </Text>
                        <Text style={ theme.mode == 'light' ?  styles.text_info_container_light : styles.text_info_container_dark }>
                            <Text style={styles.title}>{lg.phoneNumber}: </Text>
                            <Text style={styles.text_info}>{myUser.number}</Text>
                        </Text>
                        <Text style={ theme.mode == 'light' ?  styles.text_info_container_light : styles.text_info_container_dark }>
                            <Text style={styles.title}>{lg.gender}: </Text>
                            <Text style={styles.text_info}>{myUser.gender}</Text>
                        </Text>
                        <Text style={ theme.mode == 'light' ?  styles.text_info_container_light : styles.text_info_container_dark }>
                            <Text style={styles.title}>{lg.paymentType}: </Text>
                            <Text style={styles.text_info}>{myUser.payment_type}</Text>
                        </Text>
                        <Text style={ theme.mode == 'light' ?  styles.text_info_container_light : styles.text_info_container_dark }>
                            <Text style={styles.title}>{lg.cityAndQuarter}: </Text>
                            <Text style={styles.text_info}>{myUser.city}, {myUser.quarter}</Text>
                        </Text>
                        <Text style={ theme.mode == 'light' ?  styles.text_info_container_light : styles.text_info_container_dark }>
                            <Text style={styles.title}>{lg.postalAddress}: </Text>
                            <Text style={styles.text_info}>{myUser.postal_adress}</Text>
                        </Text>
                        <Text style={ theme.mode == 'light' ?  styles.text_info_container_light : styles.text_info_container_dark }>
                            <Text style={styles.title}>{lg.idType}: </Text>
                            <Text style={styles.text_info}>{myUser.id_type}</Text>
                        </Text>
                        <Text style={ theme.mode == 'light' ?  styles.text_info_container_light : styles.text_info_container_dark }>
                            <Text style={styles.title}>{lg.idNumber}: </Text>
                            <Text style={styles.text_info}>{myUser.cni_id}</Text>
                        </Text>
                        <Text style={ theme.mode == 'light' ?  styles.text_info_container_light : styles.text_info_container_dark }>
                            <Text style={styles.title}>{lg.contactNumber}: </Text>
                            <Text style={styles.text_info}>{myUser.contact_number}</Text>
                        </Text>
                        <Text style={ theme.mode == 'light' ?  styles.text_info_container_light : styles.text_info_container_dark }>
                            <Text style={styles.title}>E-mail: </Text>
                            <Text style={styles.text_info}>{myUser.email}</Text>
                        </Text>
                    </View>
                )
            })
            setDataUser(item)
        })

        /*return(
            <View>
                <Text>{dataUser}</Text>
            </View>
        )*/
    }

    useEffect(() => {
        userData()
    }, [theme.mode, props.selectedLanguage])

    //userData()

    return (
        <View style={ theme.mode == 'light' ? styles.container_light : styles.container_dark }>
            {/*<SafeAreaView>
                <Header text='Infos abonné' goBack = {() => navigation.goBack()} />
            </SafeAreaView> */}
            {
                dataUser
            }
        </View>
    )
}

const mapStateToProps = state => {
    return {
        selectedLanguage: state.language
    }
}

export default connect(mapStateToProps, { selectLanguage })(InfoUser)

const styles = StyleSheet.create({
    container_light: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#14213d'
    },
    img_container_light: {
        alignItems: 'center',
        width: Dimensions.get('window').width,
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    img_container_dark: {
        alignItems: 'center',
        width: Dimensions.get('window').width,
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: '#14213d'
    },
    picture: {
        height: 200,
        width: 200,
        borderRadius: 120
    },
    text_info_container_light: {
        margin: 10,
        color: '#000'
    },
    text_info_container_dark: {
        margin: 10,
        color: '#fff'
    },
    text_info_container_dark: {
        margin: 10,
        color: '#fff'
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    text_info: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16
    }
})