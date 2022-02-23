import React from 'react';
import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import EditBook from "./components/EditBook";
import BookList from "./components/BookList";
import heroImg from './hero-img.png';

function App() {
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="nav nav-pills nav-fill">
                  <li className="nav-item active">
                      <NavLink to="/" className="nav-link">首頁</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="all" className="nav-link">書本列表</NavLink>
                  </li>
              </ul>
          </nav>
          <div className="text-center">
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="all" element={<BookList />}/>
                  <Route path="*" element={<NotFound />}/>
                  <Route path="/add" element={<EditBook />}/>
                  <Route path="/update/:id" element={<EditBook />}/>
              </Routes>

          </div>
      </div>
  );
}

export const Home = () => {
    return (
            <div className="hero mt-lg-5">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <h1>前後端分離練習項目</h1>
                        <h2>利用Spring Boot + React</h2>
                        <h2>可以新增、修改、刪除書籍資料</h2>
                        <a className="btn btn-primary mr-lg-5 mt-4" href="https://hackmd.io/@david0513/r1xiDi1l9">
                            <span>說明文件</span>
                            <i className="bi bi-markdown ml-2" />
                        </a>
                        <a href="https://github.com/cwchang13/Spring-Boot-React-CRUD" className="btn btn-dark mt-4">
                            <span>GitHub 連結</span>
                            <i className="bi bi-github ml-2" />
                        </a>
                    </div>
                    <div className="col-4">
                        <img src={heroImg} alt="插圖"/>
                    </div>
                </div>
            </div>
    )
}

export const NotFound = () => {
    return <div>尚未完成</div>
}

export default App;
