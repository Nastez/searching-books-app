import React from 'react'
import BookSnippet from './BookSnippet'
import {useSelector} from 'react-redux'
import {getDocsData} from '../../redux/booksData-selector'

const BooksBox: React.FC = () => {

    const docs = useSelector(getDocsData)

    return <div>
        {docs.map(d => <BookSnippet authorName={d.author_name}  title={d.title} ia={d.ia} isbn={d.isbn}/>)}
    </div>
}

export default BooksBox