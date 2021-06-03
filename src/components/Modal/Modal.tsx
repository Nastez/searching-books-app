import React from 'react'
import s from './Modal.module.css'
import bookWithoutCover from '../../assets/bookWithoutCover.png'
import {BookDataPropsType} from '../../App'

export type ModalDataType = {
    bookDataPropsType: BookDataPropsType,
    onHide: () => void
}

const Modal: React.FC<ModalDataType> = ({bookDataPropsType, onHide}) => {
    return <>
        <div className={s.modal}>
            <div onClick={onHide} className={s.onHideButton}></div>
            <div className={s.modalBox}>
                <div className={s.bookCoverBox}>
                    {bookDataPropsType.isbn === undefined || bookDataPropsType.isbn === null ?
                        <img alt='No cover' src={bookWithoutCover} className={s.bookWithoutCover}/> :

                        (bookDataPropsType.isbn.length === 1 ?
                                <img alt='Cover'
                                     src={`https://covers.openlibrary.org/b/isbn/${bookDataPropsType.isbn.flat(1)[0]}-L.jpg`}/> :
                                <img alt='Cover'
                                     src={`https://covers.openlibrary.org/b/isbn/${bookDataPropsType.isbn.flat(1)[1]}-L.jpg`}/>
                        )
                    }
                </div>
                <div className={s.modalText}>
                    <div><span className={s.titles}>Title: </span> {bookDataPropsType.title}</div>
                    <div><span
                        className={s.titles}>Author: </span> {bookDataPropsType.authorName === undefined || bookDataPropsType.authorName === null ?
                        <span>No name</span> : bookDataPropsType.authorName.join(', ')}</div>
                    <div><span className={s.titles}>Publish: </span>
                        Date: {bookDataPropsType.publishDate === undefined || bookDataPropsType.publishDate === null ?
                            <div>No Publish Date</div> : bookDataPropsType.publishDate[0]}</div>
                    <div><span className={s.titles}>Publish
                        Date: </span> {bookDataPropsType.publisher === undefined || bookDataPropsType.publisher === null ?
                        <div>No Publisher</div> : bookDataPropsType.publisher[0]}</div>
                    <div><span
                        className={s.titles}>ISBN: </span> {bookDataPropsType.isbn === undefined || bookDataPropsType.isbn === null ?
                        <div>No ISBN</div> : bookDataPropsType.isbn[0]}</div>
                </div>
            </div>
        </div>
    </>
}

export default Modal