import axios from 'axios'

const instance = axios.create({
    baseURL: `https://openlibrary.org/`,
})

export const searchBookAPI = {
    getBooksData(titleOfTheBook: string) {
        return instance.get(`search.json?q=${titleOfTheBook}`).then(res => res.data)
    }
}