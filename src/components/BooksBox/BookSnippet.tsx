import React from 'react'
import s from './BookSnippet.module.css'

type BookDataPropsType = {
    authorName: string[],
    title: string,
    ia: string[],
    isbn: string[]
}

const BookSnippet: React.FC<BookDataPropsType> = ({authorName, title, ia, isbn}) => {

    return <>
        <div className={s.bookSnippetContainer}>
            <div>
                {isbn === undefined || null ? <div>Пусто</div> :
                    <img src={`https://covers.openlibrary.org/b/isbn/${isbn[0]}-S.jpg`}/>}
            </div>
            <div>
                <div className={s.bookAuthorText}>{authorName}</div>
                <div className={s.bookTitleText}>{title}</div>
            </div>
        </div>
    </>
}

export default BookSnippet