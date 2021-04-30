import axios from "axios";

export default {

    getBooks: function(search) {
        const searchParams = search.toLowerCase();
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchParams}`)
    }
}