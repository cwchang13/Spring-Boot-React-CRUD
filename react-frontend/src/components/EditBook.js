import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import BookService from "../services/BookService";

const EditBook = () => {
    const[name, setName] = useState('');
    const[author, setAuthor] = useState('');
    const[pubDate, setPubDate] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveBook = (e) => {
        e.preventDefault();

        const book = {name, author, pubDate, id};
        if (id) {
            //update
            BookService.updateBook(book)
                .then(response => {
                    console.log('Book data updated successfully', response.data);
                    navigate('/all');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            //create
            BookService.addBook(book)
                .then(response => {
                    console.log("Book added successfully", response.data);
                    navigate("/all");
                })
                .catch(error => {
                    console.log('something went wrong', error);
                })
        }
    }

    useEffect(() => {
        if (id) {
            BookService.getBookById(id)
                .then(book => {
                    setName(book.data.name);
                    setAuthor(book.data.author);
                    setPubDate(book.data.pubDate);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <main>
                <div className="container px-4">
                    <h2 className="mt-4">新增書本</h2>
                    <div className="card mt-4">

                        <div className="card-body">
                            <form>
                                <div className = "form-group">
                                    <label>書名</label>
                                    <input type="text"
                                           placeholder="書名"
                                           name="name"
                                           className="form-control"
                                           onChange={(e) => setName(e.target.value)}
                                           value={name}/>
                                </div>
                                <div className = "form-group">
                                    <label>作者</label>
                                    <input type="text"
                                           placeholder="作者"
                                           name="author"
                                           className="form-control"
                                           onChange={(e) => setAuthor(e.target.value)}
                                           value={author}/>
                                </div>
                                <div className = "form-group">
                                    <label>出版日期</label>
                                    <input type="date"
                                           placeholder="出版日期"
                                           name="pubDate"
                                           className="form-control"
                                           onChange={(e) => setPubDate(e.target.value)}
                                           value={pubDate}/>
                                </div>

                                <button onClick={(e) => saveBook(e)} className="btn btn-success mr-2">儲存</button>
                                <button className="btn btn-danger mr-2">取消</button>
                            </form>


                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default EditBook
