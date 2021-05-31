import {AppStateType} from './redux-store'

export const searchingFormSelector = (state: AppStateType) => {
    return state.searchingBookForm.titleOfTheBook
}