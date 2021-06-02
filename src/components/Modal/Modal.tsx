import React from 'react'
import s from './Modal.module.css'
import bookWithoutCover from '../../assets/bookWithoutCover.png'

type BookDataPropsType = {
    authorName: string[],
    title: string,
    isbn: string[],
    publisher: string[],
    publishDate: string[],
    showModal: boolean,
    hideModal: () => void
}

const Modal: React.FC<BookDataPropsType> = ({
                                                authorName,
                                                title,
                                                isbn,
                                                publisher,
                                                publishDate,
                                                showModal,
                                                hideModal
                                            }) => {

    const authorNameArr = authorName === undefined || authorName === null ? <span>No name</span> : authorName.join(', ')

    return <>
        {showModal && (
            <div className={s.modal}>
                <div className={s.modalBox}>
                    <div>
                        {isbn === undefined || isbn === null ?
                            <img src={bookWithoutCover} className={s.bookWithoutCover}/> :
                            <img src={`https://covers.openlibrary.org/b/isbn/${isbn[0]}-L.jpg`}/>}
                    </div>
                    <div className={s.modalText}>
                        <div>{title}</div>
                        <div className={s.modalAuthorNameText}>{authorNameArr}</div>
                        <div>{publishDate[0]}</div>
                        <div>{publisher[0]}</div>
                        <div>ISBN: {isbn === undefined || isbn === null ? <div>No ISBN</div> : isbn[0]}</div>
                    </div>
                </div>
                <button onClick={hideModal}>Close</button>
            </div>
        )}
    </>
}

export default Modal