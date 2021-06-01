import {BaseThunkType, InferActionsTypes} from './redux-store'
import {requestBooksData} from './searchingBooksData-reducer'

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const actions = {
    initializedSuccess: () => ({
        type: 'APP/INITIALIZED_SUCCESS'
    } as const)
}

/*
export const initializeApp = (titleOfTheBook: string): ThunkType => {
    return (dispatch) => {
        let promise = dispatch(requestBooksData(titleOfTheBook))
        Promise.all([promise])
            .then(() => {
                dispatch(actions.initializedSuccess())
            })
    }
}
*/

export default appReducer

// Types

type InitialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes, void>