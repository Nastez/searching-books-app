import React from 'react'
import s from './Modal.module.css'
import bookWithoutCover from '../../assets/bookWithoutCover.png'
import {BookDataPropsType} from '../../App'

export type ModalDataType = {
    bookDataPropsType: BookDataPropsType,
    onHide: () => void
}

const Modal: React.FC<ModalDataType> = ({bookDataPropsType, onHide}) => {

    const authorNameArr = bookDataPropsType.authorName === undefined || bookDataPropsType.authorName === null ?
        <span>No name</span> : bookDataPropsType.authorName.join(', ')

    return <>
        <div>
            <div className={s.modal}>
                <h1>{bookDataPropsType.title}</h1>
                <div>ISBN: {bookDataPropsType.isbn === undefined || bookDataPropsType.isbn === null ?
                    <div>No ISBN</div> : bookDataPropsType.isbn[0]}</div>
            </div>
            <div className={s.modal}>
                <div className={s.modalBox}>
                    <div>
                        {bookDataPropsType.isbn === undefined || bookDataPropsType.isbn === null ?
                            <img alt='No cover' src={bookWithoutCover} className={s.bookWithoutCover}/> :
                            <img alt='No cover'
                                 src={`https://covers.openlibrary.org/b/isbn/${bookDataPropsType.isbn[0]}-L.jpg`}/>}
                    </div>
                    <div className={s.modalText}>
                        <div>Title: {bookDataPropsType.title}</div>
                        <div className={s.modalAuthorNameText}>Author Name: {authorNameArr}</div>
                        <div>Publish
                            Date: {bookDataPropsType.publishDate === undefined || bookDataPropsType.publishDate === null ?
                                <div>No Publish Date</div> : bookDataPropsType.publishDate[0]}</div>
                        <div>Publish
                            Date: {bookDataPropsType.publisher === undefined || bookDataPropsType.publisher === null ?
                                <div>No Publisher</div> : bookDataPropsType.publisher[0]}</div>
                        <div>ISBN: {bookDataPropsType.isbn === undefined || bookDataPropsType.isbn === null ?
                            <div>No ISBN</div> : bookDataPropsType.isbn[0]}</div>
                    </div>
                </div>
                <button onClick={onHide}>Hide</button>
            </div>

        </div>
    </>
}

export default Modal