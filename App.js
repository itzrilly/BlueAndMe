import React, { Fragment, useEffect } from 'react'
import { SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import configureStore from './reduxStore/Store'

const store = configureStore()

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <Provider store={store}>
      <Fragment>
        { Platform.OS === 'ios' && <StatusBar barStyle='dark-content' /> }
        <SafeAreaView style={styles.container}>
          <Navigation />
        </SafeAreaView>
      </Fragment>
    </Provider>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default App;
