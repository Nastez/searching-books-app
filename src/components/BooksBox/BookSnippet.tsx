import React from 'react'
import s from './BookSnippet.module.css'

const BookSnippet: React.FC = () => {
    return <>
        <div className={s.bookSnippetContainer}>
            <div>
                Изображение книги
                <img/>
            </div>
            <div>
                <div>Автор книги</div>
                <div>Название книги</div>
            </div>
        </div>
    </>
}

export default BookSnippet