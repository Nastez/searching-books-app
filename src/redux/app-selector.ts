import {AppStateType} from './redux-store'

export const getInitializedStatus = (state: AppStateType) => {
    return state.app.initialized
}