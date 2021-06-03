import {Action, applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import searchingFormReducer from './searchingForm-reducer'
import searchingBooksDataReducer from './searchingBooksData-reducer'

let rootReducer = combineReducers({
    searchingBookForm: searchingFormReducer,
    searchingBookData: searchingBooksDataReducer,
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.__store__ = store

export default store

