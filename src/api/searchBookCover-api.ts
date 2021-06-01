import axios from 'axios'

const instance = axios.create({
    baseURL: `https://covers.openlibrary.org/b/`,
})

export const searchBookCoverAPI = {
    getBookCover() {
       return instance.get(`IA/9780618343997-M.jpg`).then(res => res.data)
    }
}