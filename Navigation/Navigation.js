import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from '../pages/Login'
import Home from '../pages/Home'
// import Product from '../pages/Product'
import Option from '../pages/Option'
import Support from '../pages/Support'
import Menu from '../pages/Menu'
import Service from '../pages/Service'
import InfoUser from '../pages/InfoUser'
import Password from '../pages/Password'
import AboutUs from '../pages/AboutUs'
import LegalInfos from '../pages/LegalInfos'
import Plan from '../pages/Plan'
import ChoicePlan from '../pages/ChoicePlan'
import Language from '../pages/Language'
import CustomDrawer from '../components/CustomDrawer'
import { useSelector } from 'react-redux'

const BlueStack = createNativeStackNavigator()
const BlueTab = createBottomTabNavigator()
const BlueDrawer = createDrawerNavigator()
const BlueStackHome = createNativeStackNavigator()
const BlueStackOption = createNativeStackNavigator()

const BlueStackHomeNavigator = () => {
    return (
        <BlueStackHome.Navigator
            screenOptions={{
                tabBarShowLabel: false
            }}
        >
            <BlueStackHome.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <BlueStackHome.Screen
                name='InfoUser'
                component={InfoUser}
                options={{ headerShown: true, headerTitle: "Infos sur l'abonné" }}
            />
            <BlueStackHome.Screen
                name='Password'
                component={Password}
                options={{ headerShown: true, headerTitle: "Mot de passe" }}
            />
        </BlueStackHome.Navigator>
    )
}

const BlueStackOptionNavigator = () => {
    return (
        <BlueStackOption.Navigator
            screenOptions={{
                tabBarShowLabel: false
            }}
        >
            <BlueStackOption.Screen
                name='Option'
                component={Option}
                options={{ headerShown: false }}
            />
            <BlueStackOption.Screen
                name='Service'
                component={Service}
                options={{ headerShown: true, headerTitle: '' }}
            />
            {/*<BlueStackOption.Screen
                name='Plan'
                component={Plan}
                options={{ headerShown: true, headerTitle: '' }}
            />
            <BlueStackOption.Screen
                name='ChoicePlan'
                component={ChoicePlan}
                options={{ headerShown: true, headerTitle: '' }}
            />*/}
        </BlueStackOption.Navigator>
    )
}

const BlueTabNavigator = (props) => {
    const navigation = useNavigation()
    const theme = useSelector(state => state.theme)
    const lg = useSelector(state => state.language)
    
    return (
        <BlueTab.Navigator initialRouteName='Accueil' screenOptions={ { 
            tabBarStyle:{
                shadowColor: 'rgba(0,0.0,0,1)',
                showLabel: { width: 0, height: 0 },
                shadowOpacity: 0.1,
                shadowRadius: 30,
                elevation: 10,
                backgroundColor: theme.mode == 'light' ? '#fff' : '#14213d',
                position: 'absolute'
            },
            tabBarShowLabel: false
        }}>
            <BlueTab.Screen name='Accueil' component={BlueStackHomeNavigator} options = {{
                headerShown: false,
                tabBarIcon: ({ focused }) => <View style={{ alignItems: 'center', width: '100%', height: '100%', padding: 5, borderTopColor: focused ? 'dodgerblue' : '', borderTopWidth: focused ? 2 : 0 }}>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_home_blue.png')}
                                style={styles.icon} />
                        ) : (
                            theme.mode == 'light' ?
                            (<Image 
                                source={require('../assets/images/icons/ic_home.png')}
                                style={styles.icon} />)
                            :
                            (<Image 
                                source={require('../assets/images/icons/ic_home_light.png')}
                                style={styles.icon} />)
                        )}
                        <Text style={ theme.mode == 'light' ? styles.title_light : styles.title_dark }>
                            {lg.language == 'Langue' ? 'Accueil' : 'Home'}
                        </Text>
                    </View>
            }} />
            {/*
            <BlueTab.Screen name='Produit' component={Product} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <View style={{ alignItems: 'center', width: '100%', height: '100%', padding: 5, borderTopColor: focused ? 'dodgerblue' : '', borderTopWidth: focused ? 2 : 0 }}>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_product_blue.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_product.png')}
                                style={styles.icon} />
                        )}
                        <Text style={styles.title}>Produit</Text>
                    </View>
            }} />
            */}
            <BlueTab.Screen name='Service' component={BlueStackOptionNavigator} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <View style={{ alignItems: 'center', width: '100%', height: '100%', padding: 5, borderTopColor: focused ? 'dodgerblue' : '', borderTopWidth: focused ? 2 : 0 }}>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_service_blue.png')}
                                style={styles.icon} />
                        ) : (
                            theme.mode == 'light' ?
                            (<Image 
                                source={require('../assets/images/icons/ic_service.png')}
                                style={styles.icon} />)
                            :
                            (<Image 
                                source={require('../assets/images/icons/ic_service_light.png')}
                                style={styles.icon} />)
                        )}
                        <Text style={ theme.mode == 'light' ? styles.title_light : styles.title_dark }>Service</Text>
                    </View>
            }} />
            <BlueTab.Screen name='Support' component={Support} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <View style={{ alignItems: 'center', width: '100%', height: '100%', padding: 5, borderTopColor: focused ? 'dodgerblue' : '', borderTopWidth: focused ? 2 : 0 }}>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_support_blue.png')}
                                style={styles.icon} />
                        ) : (
                            theme.mode == 'light' ?
                            (<Image 
                                source={require('../assets/images/icons/ic_support.png')}
                                style={styles.icon} />)
                            :
                            (<Image 
                                source={require('../assets/images/icons/ic_support_light.png')}
                                style={styles.icon} />)
                        )}
                        <Text style={ theme.mode == 'light' ? styles.title_light : styles.title_dark }>Support</Text>
                    </View>
            }} />
            <BlueTab.Screen name='Menu' component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ alignItems: 'center', width: '100%', height: '100%',  padding: 5, borderTopColor: focused ? 'dodgerblue' : '', borderTopWidth: focused ? 2 : 0 }}> 
                            { focused ? (
                                <Image 
                                    source={require('../assets/images/icons/ic_menu_blue.png')}
                                    style={styles.icon} />
                            ) : (
                                theme.mode == 'light' ?
                                (<Image 
                                    source={require('../assets/images/icons/ic_menu.png')}
                                    style={styles.icon} />)
                                :
                                (<Image 
                                    source={require('../assets/images/icons/ic_menu_light.png')}
                                    style={styles.icon} />)
                            )}
                            <Text style={ theme.mode == 'light' ? styles.title_light : styles.title_dark }>Menu</Text>
                    </TouchableOpacity>
            }} />
        </BlueTab.Navigator>
    )
}

const BlueDrawerNavigator = () => {
    return (
        <BlueDrawer.Navigator 
            drawerContent={
                props => <CustomDrawer { ...props } />
            }
            screenOptions={{
                headerShown: false,
                /*drawerActiveBackgroundColor: '#0d41e1',
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 15
                }*/
            }}
        >
            <BlueDrawer.Screen name="Accueil" component={BlueTabNavigator} />
                {/*options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_home_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_home.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />*
            <BlueDrawer.Screen name="Mes informations" component={InfoUser}
                style={{ backgroundColor: 'yellow' }}
                options={{
                    headerShown: false,
                    drawerIcon: ({ focused }) => 
                    <View> 
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_user_ios_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_user_ios_black.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
            <BlueDrawer.Screen name="Notifications" component={Support} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_clock_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_clock.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
            <BlueDrawer.Screen name="Plan tarifaire" component={Menu} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_plan_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_plan.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
            <BlueDrawer.Screen name="Mot de passe" component={Menu} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_password_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_password.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
            <BlueDrawer.Screen name="Dernières offres" component={Service} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_heraut_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_heraut.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
            <BlueDrawer.Screen name="Partager" component={Menu} 
                /*options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_share_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_share.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
             <BlueDrawer.Screen name="Noter Blue And Me" component={Menu} 
                /*options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_rank_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_rank.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
             <BlueDrawer.Screen name="Tutoriel" component={Menu} 
                /*options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_tutorial_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_tutorial.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
             <BlueDrawer.Screen name="A propos nous" component={Menu} 
                    options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_aboutus_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_aboutus.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
             <BlueDrawer.Screen name="Langue" component={Menu} />
                    options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_language_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_language.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />*/}
        </BlueDrawer.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <BlueStack.Navigator initialRouteName='Login'>
                <BlueStack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />
                <BlueStack.Screen
                    name='Home'
                    component={BlueDrawerNavigator}
                    options={{ headerShown: false }}
                />
                {/*<BlueStack.Screen
                    name='Product'
                    component={Product}
                    options={{ headerShown: false }}
                />*/}
                <BlueStack.Screen
                    name='Support'
                    component={Support}
                    options={{ headerShown: false }}
                />
                <BlueStack.Screen
                    name='Menu'
                    component={Menu}
                    options={{ headerShown: false }}
                />
                <BlueStack.Screen
                    name='AboutUs'
                    component={AboutUs}
                    options={{ headerShown: true, headerTitle: '' }}
                />
                <BlueStack.Screen
                    name='LegalInfos'
                    component={LegalInfos}
                    options={{ headerShown: true, headerTitle: 'Informations légales' }}
                />
                <BlueStack.Screen
                    name='Plan'
                    component={Plan}
                    options={{ headerShown: true, headerTitle: '' }}
                />
                <BlueStack.Screen
                    name='ChoicePlan'
                    component={ChoicePlan}
                    options={{ headerShown: true, headerTitle: '' }}
                />
                <BlueStack.Screen
                    name='Language'
                    component={Language}
                    options={{ headerShown: true, headerTitle: '' }}
                />
            </BlueStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({
    icon: {
      width: 23,
      height: 23
    },
    title_light: {
        fontSize: 10,
        marginTop: 3
    },
    title_dark: {
        fontSize: 10,
        marginTop: 3,
        color: '#fff'
    }
})