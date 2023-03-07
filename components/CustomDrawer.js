import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Share, Linking, Platform } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import * as StoreReview from 'react-native-store-review'
import { StatusBar } from 'expo-status-bar'
import { useSelector, useDispatch, connect } from 'react-redux'
import { switchMode } from '../reduxStore/ActionsTheme'
import { selectLanguage } from '../reduxStore/ActionsLanguage'

const CustomDrawer = (props) => {
    const { navigation } = props

    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const [mode, setMode] = useState(theme.mode)

    const menu = props.selectedLanguage

    const handleThemeChange = () => { 
        dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
    }

    useEffect(() => { 
        setMode(theme.mode);
    }, [theme]);

    const moveToScreen = (screen) => {
        navigation.navigate(screen)
    }

    const shareTheApp = () => {
        Share.share({ title: 'Blue And Me', message: 'Télécharges l\'application Blue And Me et bénéficie de 1Go gratuit' })
    }
    
    const rateTheApp = () => {

        const IOS_APP_ID = ''
        const ANDROID_APP_ID = ''

        const APP_STORE_LINK = `itms-apps://apps.apple.com/app/id${IOS_APP_ID}?action=write-review`
        const PLAY_STORE_LINK = `market://details?id=${ANDROID_APP_ID}`

        const STORE_LINK = Platform.select({
            ios: APP_STORE_LINK,
            android: PLAY_STORE_LINK,
        })

        Linking.openURL(STORE_LINK)

        if (StoreReview.isAvailable) {
            StoreReview.requestReview()
        }

    }
    
    return (
        <View style={styles.container}>

            <DrawerContentScrollView 
                {...props} 
                contentContainerStyle={{ 
                    backgroundColor: '#0d41e1'
                }}
                style={styles.drawerContainerStyle}
            >
                <ImageBackground 
                    source={require('../assets/images/img/img_bg.png')} 
                    style={styles.img_bg} >
                    <View style={styles.view_infouser}>
                        <Image 
                            source={require('../assets/images/icons/ic_user_ios_gray.png')} 
                            style={styles.icon_user} />
                        <Text style={styles.username}>Uchiha Itachi</Text>
                        <Text style={styles.phone}>620 00 00 00</Text>
                    </View>
                    {/*<Text
                        onPress={() => navigation.closeDrawer()}
                        style={styles.btn_close}
                    >
                        Fermer
                    </Text>*/}
                </ImageBackground>
                
                <View style={mode == 'light' ? styles.bt_container_light : styles.bt_container_dark}>
                    {/*<DrawerItemList {...props} />*/}

                    {/*<TouchableOpacity 
                        onPress={ () => {} }
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_home.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>Accueil</Text>
                        </View>
                    </TouchableOpacity>*/}
                    
                    <TouchableOpacity 
                        onPress={() => moveToScreen('InfoUser')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                        <Image source={ mode == 'light' ? require('../assets/images/icons/ic_user_ios_black.png') : require('../assets/images/icons/ic_user_ios_gray.png') } style={styles.icon} />
                            <Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>{menu.myInfos}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={ mode == 'light' ? require('../assets/images/icons/ic_clock.png') : require('../assets/images/icons/ic_clock_white.png') } style={styles.icon} />
                            <Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>Notifications</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('Plan') }
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                        <Image source={ mode == 'light' ? require('../assets/images/icons/ic_plan.png') : require('../assets/images/icons/ic_plan_white.png') } style={styles.icon} />
                            <Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>{menu.tariffPlan}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('Password')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                        <Image source={ mode == 'light' ? require('../assets/images/icons/ic_password.png') : require('../assets/images/icons/ic_password_white.png') } style={styles.icon} />
                            <Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>{menu.password}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                        <Image source={ mode == 'light' ? require('../assets/images/icons/ic_heraut.png') : require('../assets/images/icons/ic_heraut_white.png') } style={styles.icon} />
                            <Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>{menu.latestOffers}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={shareTheApp}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                        <Image source={ mode == 'light' ? require('../assets/images/icons/ic_share.png') : require('../assets/images/icons/ic_share_white.png') } style={styles.icon} />
                            <Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>{menu.share}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={rateTheApp}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                        <Image source={ mode == 'light' ? require('../assets/images/icons/ic_rank.png') : require('../assets/images/icons/ic_rank_white.png') } style={styles.icon} />
                            <Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>{menu.rate}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                        <Image source={ mode == 'light' ? require('../assets/images/icons/ic_tutorial.png') : require('../assets/images/icons/ic_tutorial_white.png') } style={styles.icon} />
                            <Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>{menu.tutorial}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('AboutUs')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                        <Image source={ mode == 'light' ? require('../assets/images/icons/ic_aboutus.png') : require('../assets/images/icons/ic_aboutus_white.png') } style={styles.icon} />
                            <Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>{menu.aboutUs}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('Language')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                        <Image source={ mode == 'light' ? require('../assets/images/icons/ic_language.png') : require('../assets/images/icons/ic_language_white.png') } style={styles.icon} />
                            <Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>{menu.language}</Text>
                        </View>
                    </TouchableOpacity>

                    {/*<DrawerItem
                        label='Accueil'
                        onPress={() => navigation.navigate('Home')}
                        icon={() => <Image source={require('../assets/images/icons/ic_home.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Mes informations'
                        onPress={() => navigation.navigate('InfoUser')}
                        icon={() => <Image source={require('../assets/images/icons/ic_user_ios_black.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Notifications'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_clock.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Plan tarifaire'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_plan.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Mot de passe'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_password.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Dernières offres'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_heraut.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Partager'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_share.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Noter Blue And Me'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_rank.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Tutoriel'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_tutorial.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='A propos nous'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_aboutus.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Langue'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_language.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />*/}
                </View>
            </DrawerContentScrollView>

            <View style={mode == 'light' ? styles.btl_container_light : styles.btl_container_dark}>
                <TouchableOpacity
                    onPress={handleThemeChange}
                    style={styles.btn}
                >
                    <View style={styles.inner_btn_view}>
                        <Image
                            source={ mode == 'light' ? require('../assets/images/icons/ic_moon.png') : require('../assets/images/icons/ic_moon_light.png') }
                            style={styles.icon} 
                        />
                        { mode == 'light' ?
                            (<Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>{menu.darkMode}</Text>) :
                            (<Text style={styles.text_btn_dark}>{menu.lightMode}</Text>)
                        }
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => moveToScreen('Login') }
                    style={styles.btn}
                >
                    <View style={styles.inner_btn_view}>
                        <Image
                            source={ mode == 'light' ? require('../assets/images/icons/ic_signout.png') : require('../assets/images/icons/ic_signout_light.png') }
                            style={styles.icon} 
                        />
                        <Text style={mode == 'light' ? styles.text_btn_light : styles.text_btn_dark}>{menu.logOut}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />

        </View>
    )
}

const mapStateToProps = state => {
    return {
        selectedLanguage: state.language
    }
}

export default connect(mapStateToProps, { selectLanguage })(CustomDrawer)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerContainerStyle:{
        //flex: 1
    },
    img_bg: {
        flexDirection: 'row',
        padding: 20
    },
    view_infouser: {
        //flex: 1,
        alignItems: 'center'
    },
    /*btn_close: {
        flex: 1,
        color: '#fff',
    },*/
    icon_user: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    username: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    phone: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
    },
    bt_container_light: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingLeft: 20,
    },
    bt_container_dark: {
        flex: 1,
        backgroundColor: '#14213d',
        paddingTop: 5,
        paddingLeft: 20,
    },
    /*drawer_item: {
        marginLeft: -25,
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
    },
    drawer_text: {
    },*/
    btl_container_light: {
        //flex: 1,
        padding: 10,
        paddingLeft: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    btl_container_dark: {
        //flex: 1,
        padding: 10,
        paddingLeft: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#14213d'
    },
    btn: {
        paddingVertical: 12
    },
    inner_btn_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_btn_light: {
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        marginLeft: 15
    },
    text_btn_dark: {
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        marginLeft: 15,
        color: '#fff'
    },
    icon: {
        width: 23,
        height: 23,
    }
})