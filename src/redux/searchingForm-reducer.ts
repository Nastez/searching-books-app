import {BaseThunkType, InferActionsTypes} from './redux-store'

const initialState = {
    titleOfTheBook: ''
}

const searchingFormReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SEARCHING_FORM/SET_TITLE_OF_THE_BOOK':
            return {
                ...state,
                titleOfTheBook: action.titleOfTheBook
            }
        default:
            return state
    }

}

export const actions = {
    setTitleOfTheBook: (titleOfTheBook: string) => ({
        type: 'SEARCHING_FORM/SET_TITLE_OF_THE_BOOK',
        titleOfTheBook
    } as const)
}

export default searchingFormReducer

// Types

type InitialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes>