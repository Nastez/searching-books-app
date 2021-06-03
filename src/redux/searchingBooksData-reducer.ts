import {BaseThunkType, InferActionsTypes} from './redux-store'
import {searchBookAPI} from '../api/searchBook-api'
import {DocsDataType} from '../types/types'

const initialState = {
    docs: [] as Array<DocsDataType>
}

const searchingBooksDataReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SEARCHING_BOOKS_DATA/SET_SEARCHING_BOOKS_DATA':
            return {
                ...state,
                docs: action.docs
            }
        default:
            return state
    }
}

export const actions = {
    setSearchingBooksData: (docs: Array<DocsDataType>) => ({
        type: 'SEARCHING_BOOKS_DATA/SET_SEARCHING_BOOKS_DATA',
        docs: docs
    } as const)
}

export const requestBooksData = (titleOfTheBook: string): ThunkType => {
    return async (dispatch) => {
        let data = await searchBookAPI.getBooksData(titleOfTheBook)
        dispatch(actions.setSearchingBooksData(data.docs))
    }
}

export default searchingBooksDataReducer

// Types

type InitialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes>