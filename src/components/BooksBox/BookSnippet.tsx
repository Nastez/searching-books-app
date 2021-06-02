import React, {useState} from 'react'
import s from './BookSnippet.module.css'
import bookWithoutCover from '../../assets/bookWithoutCover.png'
import Modal from '../Modal/Modal'

type BookDataPropsType = {
    authorName: string[],
    title: string,
    ia: string[],
    isbn: string[],
    publisher: string[],
    publishDate: string[],
    keyValue: string
}

const BookSnippet: React.FC<BookDataPropsType> = ({authorName, title, ia, isbn, publisher, publishDate, keyValue}) => {

    const [modal, setModal] = useState(false)

    const showModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
    }

    const authorNameArr = authorName === undefined || authorName === null ? <span>No name</span> : authorName.join(', ')

    return <>
        <div className={s.bookSnippetContainer} onClick={() => {
            showModal()
        }}>
            <div>
                {isbn === undefined || isbn === null ? <img src={bookWithoutCover} className={s.bookWithoutCover}/> :
                    <img src={`https://covers.openlibrary.org/b/isbn/${isbn[0]}-S.jpg`}/>}
            </div>
            <div>
                <div className={s.bookAuthorText}>{authorNameArr}</div>
                <div className={s.bookTitleText}>{title}</div>
            </div>
        </div>
        <Modal
            showModal={modal}
            hideModal={() => hideModal()}

            authorName={authorName}
            title={title}
            isbn={isbn}
            publisher={publisher}
            publishDate={publishDate}/>
    </>
}

export default BookSnippet