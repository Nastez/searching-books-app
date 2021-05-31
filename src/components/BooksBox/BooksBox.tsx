import React, {useEffect} from 'react'
import BookSnippet from './BookSnippet'
import {useDispatch, useSelector} from 'react-redux'
import {requestBooksData} from '../../redux/searchingBooksData-reducer'
import {searchingFormSelector} from '../../redux/searchingForm-selector'

const BooksBox: React.FC = () => {

    const dispatch = useDispatch()

    const titleOfTheBook = useSelector(searchingFormSelector)

    useEffect(() => {
        dispatch(requestBooksData(titleOfTheBook))
    }, [titleOfTheBook])

    return <div>
        <BookSnippet/>
    </div>
}

export default BooksBox