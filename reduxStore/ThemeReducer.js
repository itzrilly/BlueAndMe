import { THEME_CHANGE } from './Constants'

// Initialement nous aurons le mode clair
const initialState = {
    mode: 'light'
}

// Gérer notre action de changement de thème
const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case THEME_CHANGE:
            return {
                ...state,
                mode: action.payload
            }
        default:
            return state
    }
}

export default themeReducer