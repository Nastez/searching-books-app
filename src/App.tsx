import React, {useEffect, useState} from 'react'
import SearchingFrom from './components/SearchingForm/SearchingForm'
import {useDispatch, useSelector} from 'react-redux'
import {requestBooksData} from './redux/searchingBooksData-reducer'
import Modal from './components/Modal/Modal'
import BookSnippet from './components/BookSnippet/BookSnippet'
import {getTitleOfTheBook} from './redux/searchingForm-selector'

export type ModalDataType = {
    showModal: boolean,
    bookDataPropsType: BookDataPropsType | null
}

export type BookDataPropsType = {
    authorName: string[] | null,
    title: string | null,
    isbn: string[] | null,
    publisher: string[] | null,
    publishDate: string[] | null
}

const App: React.FC = () => {
    const titleOfTheBook = useSelector(getTitleOfTheBook)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestBooksData(titleOfTheBook))
    }, [dispatch, titleOfTheBook])

    const [showModalData, setShowModal] = useState<ModalDataType>({
        showModal: false,
        bookDataPropsType: {
            authorName: null,
            title: null,
            isbn: null,
            publisher: null,
            publishDate: null
        }
    })

    const onItemClick = (
        authorName: string[],
        title: string,
        isbn: string[],
        publisher: string[],
        publishDate: string[]
    ) => {
        setShowModal({
            showModal: true,
            bookDataPropsType: {
                authorName: authorName,
                title: title,
                isbn: isbn,
                publisher: publisher,
                publishDate: publishDate
            }
        })
    }

    const hideModal = () => {
        setShowModal({
            showModal: false,
            bookDataPropsType: null
        })
    }

    return <div>
        <SearchingFrom/>
        <BookSnippet onItemClick={onItemClick}/>
        {
            showModalData.showModal && showModalData.bookDataPropsType !== null &&
            <Modal bookDataPropsType={showModalData.bookDataPropsType} onHide={hideModal}/>
        }
    </div>
}

export default App
