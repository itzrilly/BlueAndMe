import { languages } from '../languages/Languages'

const initialState = languages.french

export default (state = initialState, action) => {
    switch(action.type) {
        case 'language_data':
            return action.payload
        default:
            return state
    }
}