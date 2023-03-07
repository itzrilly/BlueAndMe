import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image, Alert, FlatList } from 'react-native'
import statData from '../helpers/StatData'
import statDataEng from '../helpers/StatDataEng'
import StatItem from './StatItem'
import { useSelector, connect } from 'react-redux'
import { selectLanguage } from '../reduxStore/ActionsLanguage'

const Stats = (props) => {

    const lg = props.selectedLanguage

    const [ info, setInfo ] = useState([])
    const [ infoEng, setInfoEng ] = useState([])
    const theme = useSelector(state => state.theme)

    const renderItem = () => {
        let items = []

        statData.map(info => {
            // Alert.alert('Mon solde', JSON.stringify(info))
            items = info.infoBalance.map(balance => {
                // Alert.alert('Mon solde', JSON.stringify(balance))
                return balance
            })
            setInfo(items)
        })
    }

    const renderItem1 = () => {
        let items = []

        statDataEng.map(info => {
            // Alert.alert('Mon solde', JSON.stringify(info))
            items = info.infoBalance.map(balance => {
                // Alert.alert('Mon solde', JSON.stringify(balance))
                return balance
            })
            setInfoEng(items)
        })
    }

    useEffect(() => {
        renderItem()
        renderItem1()
    }, [])

    return (
        <View style={ theme.mode == 'light' ? styles.container_light : styles.container_dark }>

            { lg.language == 'Langue' ?
            (<FlatList
                data={info}
                renderItem = { ({item}) => <StatItem
                        title = {item.title}
                        image = {item.image}
                        qty= {item.qty}
                        data={item.data}
                        sms={item.sms}
                        text_validity= {item.text_validity}
                        date_exp = {item.date_exp}
                    />
                }
                keyExtractor={(item) => item.id}
                style={styles.stat_item}
            />) :
            (<FlatList
                data={infoEng}
                renderItem = { ({item}) => <StatItem
                        title = {item.title}
                        image = {item.image}
                        qty= {item.qty}
                        data={item.data}
                        sms={item.sms}
                        text_validity= {item.text_validity}
                        date_exp = {item.date_exp}
                    />
                }
                keyExtractor={(item) => item.id}
                style={[styles.stat_item, { marginBottom: 50 }]}
            />)}

        </View>

    )
}

const mapStateToProps = state => {
    return {
        selectedLanguage: state.language
    }
}

export default connect(mapStateToProps, { selectLanguage })(Stats)

const styles = StyleSheet.create({
    container_light: {
        flex: 1,
        paddingTop: 7,
        backgroundColor: '#ddd'
    },
    container_dark: {
        flex: 1,
        paddingTop: 7,
        backgroundColor: '#14213d',
    },
    stat_item: {
        flex: 1
    }
})