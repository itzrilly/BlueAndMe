import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

const LegalInfos = () => {
    const theme = useSelector(state => state.theme)

    return (
        <ScrollView style={ theme.mode == 'light' ? styles.container_light : styles.container_dark }>

            <View style={ theme.mode == 'light' ? styles.view_container_light : styles.view_container_dark }>
                <Text style={ theme.mode == 'light' ? styles.title_light : styles.title_dark }>Editeur</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }>CAMTEL (Cameroon Telecomunications S.A)</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }>Opérateur public de téléphonie du Cameroun</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }>Siège Social:Boulevard du 20 Mai, Yaoundé - Cameroun</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }>Activité: Télécom</Text>
            </View>

            <View style={ theme.mode == 'light' ? styles.view_container_light : styles.view_container_dark }>
                <Text style={ theme.mode == 'light' ? styles.title_light : styles.title_dark }>Conception et réalisation</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }>CAMTEL (Cameroon Telecomunications S.A)</Text>
            </View>

            <View style={ theme.mode == 'light' ? styles.view_container_light : styles.view_container_dark }>
                <Text style={ theme.mode == 'light' ? styles.title_light : styles.title_dark }>Hébergement</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }>Cameroon Telecomunications S.A</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }>Opérateur public de téléphonie du Cameroun</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }>Siège Social: Boulevard du 20 Mai, Yaoundé - Cameroun</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }>Activité: Télécom</Text>
            </View>

            <View style={ theme.mode == 'light' ? styles.view_container_light : styles.view_container_dark }>
                <Text style={ theme.mode == 'light' ? styles.title_light : styles.title_dark }>Nous contacter</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }>Pour toute information sur l'application Blue And Me, contactez nous via l'application en cliquant sur l'onglet <Text style={styles.semibold}>Support</Text> qui se trouve juste en bas de votre écran principal ou alors contactez le service en appelant gratuitement le <Text style={styles.semibold}>825</Text></Text>
            </View>

            <View style={ theme.mode == 'light' ? styles.view_container_light : styles.view_container_dark }>
                <Text style={ theme.mode == 'light' ? styles.title_light : styles.title_dark }>Information sur la consommation du volume data</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }> Laborum aliqua anim sint deserunt occaecat. Fugiat velit nisi ut officia magna incididunt aliqua aliquip sit tempor duis velit ipsum. Qui ex Lorem sunt sunt fugiat nisi nostrud cupidatat.</Text>
            </View>

            <View style={ theme.mode == 'light' ? styles.view_container_light : styles.view_container_dark }>
                <Text style={ theme.mode == 'light' ? styles.title_light : styles.title_dark }>Protection des données personnelles</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }> Laborum aliqua anim sint deserunt occaecat. Fugiat velit nisi ut officia magna incididunt aliqua aliquip sit tempor duis velit ipsum. Qui ex Lorem sunt sunt fugiat nisi nostrud cupidatat.</Text>
            </View>

            <View style={ theme.mode == 'light' ? styles.view_container_light : styles.view_container_dark }>
                <Text style={ theme.mode == 'light' ? styles.title_light : styles.title_dark }>Programme d'amélioration de l'application</Text>
                <Text style={  theme.mode == 'light' ? styles.text_light : styles.text_dark }>Occaecat fugiat ut ea ex quis ex non mollit ipsum ea pariatur incididunt. Cillum sit incididunt dolore duis irure amet sunt incididunt ad nostrud id eu dolore minim. In incididunt ea fugiat velit duis adipisicing id mollit tempor culpa. Consequat dolore do eu deserunt aute. Laboris fugiat amet mollit pariatur duis proident nostrud.</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container_light: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#14213d'
    },
    view_container_light: {
        padding: 20
    },
    view_container_dark: {
        padding: 20,
        backgroundColor: '#14213d'
    },
    title_light: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        paddingBottom: 10
    },
    title_dark: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        paddingBottom: 10,
        color: '#fff'
    },
    text_light: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        //textAlign: 'justify'
    },
    text_dark: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        //textAlign: 'justify',
        color: '#fff'
    },
    semibold: {
        fontFamily: 'Montserrat-SemiBold'
    }
})

export default LegalInfos
