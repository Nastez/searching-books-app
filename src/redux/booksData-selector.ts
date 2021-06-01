import {AppStateType} from './redux-store'

export const getDocsData = (state: AppStateType) => {
    return state.searchingBookData.docs
}