import { THEME_CHANGE } from './Constants'

// modifier le mode selon ce qu'on a réçu...
export const switchMode = (mode) => {
    return {
        type: THEME_CHANGE,
        payload: mode
    }
}