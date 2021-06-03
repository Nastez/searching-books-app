import React from 'react'
import {useSelector} from 'react-redux'
import {getDocsData} from '../../redux/booksData-selector'
import s from './BookSnippet.module.css'
import bookWithoutCover from '../../assets/bookWithoutCover.png'

type PropsType = {
    onItemClick: (
        authorName: string[],
        title: string,
        isbn: string[],
        publisher: string[],
        publishDate: string[]
    ) => void
}


const BookSnippet: React.FC<PropsType> = ({onItemClick}) => {

    const docs = useSelector(getDocsData)
    debugger
    return <>
        <div className={s.snippetsContainer}>
            {docs.map((data) => (
                <div key={data.key}>
                    <div className={s.bookSnippetContainer} onClick={
                        () => {
                            onItemClick(data.author_name, data.title, data.isbn, data.publisher, data.publish_date)
                        }}>
                        <div className={s.bookCard}>
                            {data.isbn === undefined || data.isbn === null ?
                                <img alt='No cover' src={bookWithoutCover}/> :
                                <img alt='Cover'
                                     src={`https://covers.openlibrary.org/b/isbn/${data.isbn.flat(1)[0]}-M.jpg`}/>}
                        </div>
                        <div className={s.bookSnippetTextContainer}>
                            <div
                                className={s.bookAuthorText}>Author
                                name: {data.author_name === undefined || data.author_name === null ?
                                    <span>No name</span> : data.author_name.join(', ')}</div>
                            <div>Title: {data.title}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
}

export default BookSnippet

