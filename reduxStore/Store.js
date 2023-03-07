import { legacy_createStore, combineReducers } from 'redux'
import themeReducer from './ThemeReducer'
import languageReducer from './LanguageReducer'

// Mettre en place un reducer général
const rootReducer = combineReducers({
    theme: themeReducer,
    language: languageReducer
})

// Créer un store avec le reducer
const configureStore = () => {
    return legacy_createStore(rootReducer)
}

// Exporter le store configuré
export default(configureStore)