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

    return <>
        <div>
            {docs.map((data) => (
                <div key={data.key}>
                    <div className={s.bookSnippetContainer} onClick={
                        () => {
                            onItemClick(data.author_name, data.title, data.isbn, data.publisher, data.publish_date)
                        }}>
                        <div>
                            {data.isbn === undefined || data.isbn === null ?
                                <img alt='No cover' src={bookWithoutCover} className={s.bookWithoutCover}/> :
                                <img alt='No cover'
                                     src={`https://covers.openlibrary.org/b/isbn/${data.isbn[0]}-S.jpg`}/>}
                        </div>
                        <div>
                            <div
                                className={s.bookAuthorText}>{data.author_name === undefined || data.author_name === null ?
                                <span>No name</span> : data.author_name.join(', ')}</div>
                            <div className={s.bookTitleText}>{data.title}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>

}

export default BookSnippet

