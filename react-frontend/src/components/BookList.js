import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import BookService from "../services/BookService";

const BookList = () => {

    const [books, setBooks] = useState([]);

    const init =() => {
        BookService.getAll()
            .then(response => {
                console.log('Books Data: ', response.data);
                setBooks(response.data);
            })
    }

    useEffect(() => {
        init();
    }, []);

    const deleteBook = (id) => {
      console.log('Delete Book Id: ', id);
      BookService.deleteBook(id)
          .then(response => {
              console.log('Deleted successfully', response.data);
              init();
          })
          .catch(error => {
              console.log('Something went wrong', error);
          })
    }

    return (
        <div>
            <main>
                <div className="container px-4">
                    <h2 className="mt-4">書籍列表</h2>
                    <div className="card mt-4">
                        <div className="card-header text-left clearfix">
                            <i className="bi bi-table mr-2 float-left" />
                            書籍資訊
                            <div className="float-right">
                                <Link to="/add" className="btn btn-success btn-sm" >新增</Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className = "table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>書名</th>
                                    <th>作者</th>
                                    <th>出版日期</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    books.map( book =>
                                            <tr key = {book.id}>
                                                <td> { book.name} </td>
                                                <td> {book.author}</td>
                                                <td> {book.pubDate}</td>
                                                <td>
                                                    <Link to={`/update/${book.id}`} className="btn btn-info mr-3">修改</Link>
                                                    <button className="btn btn-danger mr-3" onClick={() => deleteBook(book.id)}>刪除</button>
                                                </td>
                                            </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )

}

export default BookList
