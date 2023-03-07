import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Alert, Button, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import PackageItem from '../components/PackageItem'
//import packages from '../helpers/PackageData'
import allinone  from '../helpers/Aio'
import onlydata from '../helpers/Od'
//import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar'
import { connect, useSelector } from 'react-redux'
import { selectLanguage } from '../reduxStore/ActionsLanguage'

const Service = ( props ) => {

    const lg = props.selectedLanguage

    const [ data, setData ] = useState([])
    const [ press, setPress ] = useState('active')
    const theme = useSelector(state => state.theme)
 
    /*renderItem = () => {
        let items = []

        packages.map(packs => {
            // Alert.alert('Mes forfaits', JSON.stringify(packs))
            items = packs.infoPackage.map(ipack => {
                return ipack
            })
            setData(items)
        })
    }*/

    const renderItem = () => {
        let items0 = []

        allinone.map(packs => {
            // Alert.alert('Mes forfaits', JSON.stringify(packs))
            items0 = packs.infoPackage.map(ipack => {
                return ipack
            })
            setData(items0)
            setPress('inactive')
        })
    }

    const re_renderItem = () => {
        let items1 = []

        onlydata.map(packs => {
            // Alert.alert('Mes forfaits', JSON.stringify(packs))
            items1 = packs.infoPackage.map(ipack => {
                return ipack
            })
            setData(items1)
            setPress('active')
        })
    }
    
    useEffect(() => {
       renderItem()
    }, []) 

  
        
    return(
        <View style={ theme.mode == 'light' ? styles.container_light : styles.container_dark }>

            {/*<View style={styles.title_view}>
                <Text style={styles.title_text}>Choisisez le type de forfait que vous souhaitez activer</Text>
            </View> */}

            <View style={styles.title_view}>
                <Text style={styles.title_text}>{lg.allBlueOffers}</Text>
            </View>

            <View 
                style={styles.top_tabs}
            >
                <TouchableOpacity
                    onPress={renderItem}
                    style={[{backgroundColor: press === 'active' ? '#0d41e1' : 'darkblue', borderTopRightRadius: press === 'active' ? 0 : 50, borderBottomRightRadius: press === 'active' ? 0 : 50}, styles.tab_btn]}
                >
                    <Text style={styles.top_tab_text}>{lg.allInOnePlan}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={re_renderItem}
                    style={[{backgroundColor: press === 'active' ? 'darkblue' : '#0d41e1', borderTopLeftRadius: press === 'active' ? 50 : 0, borderBottomLeftRadius: press === 'active' ? 50 : 0}, styles.tab_btn]}
                >
                    <Text style={styles.top_tab_text}>{lg.onlyInternet}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.flatlist_view}>
                <FlatList
                    data={data}
                    extraData={data}
                    initialNumToRender={4}
                    //renderItem={this.renderItem}
                    renderItem={({item}) => <PackageItem
                            category = {item.category}
                            category_less = {item.category_less}
                            daily = {item.daily}
                            weekly = {item.weekly}
                            monthly = {item.monthly}
                            title = {item.title}
                            price = {item.price}
                            overview = {item.overview}
                            validity = {item.validity}
                            gain={item.gain}
                            ic_facebook = {item.ic_facebook}
                            ic_whatsapp = {item.ic_whatsapp}
                            ic_twitter = {item.ic_twitter}
                            ic_telegram = {item.ic_telegram}
                            ic_instagram = {item.ic_instagram}
                            ic_youtube = {item.ic_youtube}
                            ic_netflix = {item.ic_netflix}
                            all_airtime_network = {item.all_airtime_network}
                            call_flot = {item.call_flot}
                            sms_flot = {item.sms_flot}
                            all_sms_network = {item.all_sms_network}
                            airtime_other_blue = {item.airtime_other_blue}
                            daily_limit = {item.daily_limit}
                            download = {item.download}
                        />
                    }
                    keyExtractor={(item) => item.id}
                    style={styles.flatlist}
                    // keyExtractor={extractKey}
                />
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

export default connect(mapStateToProps, { selectLanguage })(Service)

const styles = StyleSheet.create({
    container_light: {
        backgroundColor: '#ddd',
    },
    container_dark: {
        backgroundColor: '#14213d',
    },
    top_tabs: {
        flexDirection: 'row',
        backgroundColor: '#0d41e1',
        borderTopWidth: 1,
        borderTopColor: 'white',
        //borderBottomWidth: 1,
        //borderBottomColor: 'dodgerblue'
    },
    tab_1: {
    },
    tab_2: {
    },
    top_tab_text: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
        color: '#fff'
    },
    title_view: {
        backgroundColor: '#0d41e1', 
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    flatlist_view: {
        paddingBottom: 330
    },
    flatlist: {
    },
    tab_btn: {
        flex: 1, 
        height: 50, 
        justifyContent: 'center'
    }
})