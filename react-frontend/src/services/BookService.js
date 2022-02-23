import axios from "axios";

const BOOK_API_URL = "http://localhost:8080/api/book";

class BookService {
    getAll() {
        return axios.get(BOOK_API_URL + '/all');
    }

    addBook(book) {
        return axios.post(BOOK_API_URL, book);
    }

    deleteBook(bookId) {
        return axios.delete(BOOK_API_URL + '/' + bookId);
    }

    updateBook(book) {
        return axios.put(BOOK_API_URL, book);
    }

    getBookById(id) {
        return axios.get(BOOK_API_URL + '/id/' + id);
    }
}

export default new BookService()
