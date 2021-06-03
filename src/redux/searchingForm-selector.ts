import {AppStateType} from './redux-store'

export const getTitleOfTheBook = (state: AppStateType) => {
    return state.searchingBookForm.titleOfTheBook
}