import React, {useEffect} from 'react'
import SearchingFrom from './components/SearchingForm/SearchingForm'
import BooksBox from './components/BooksBox/BooksBox'
import {useDispatch, useSelector} from 'react-redux'
import {searchingFormSelector} from './redux/searchingForm-selector'
/*import {getInitializedStatus} from './redux/app-selector'*/
import {requestBooksData} from './redux/searchingBooksData-reducer'


/*
type ValueType = {
    isInitialized: boolean,
    titleOfTheBook: string,
    books: Array<BookDataType>
}
*/

const App: React.FC = () => {
    const titleOfTheBook = useSelector(searchingFormSelector)
    /*const isInitialized = useSelector(getInitializedStatus)*/

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestBooksData(titleOfTheBook))
    }, [titleOfTheBook])



    /* useEffect(() => {
         dispatch(initializeApp(titleOfTheBook))
     }, [dispatch, titleOfTheBook])


     if (!isInitialized) {
         return <Preloader/>
     }*/
    return <div>
        <SearchingFrom/>
        <BooksBox/>
    </div>

}

export default App
