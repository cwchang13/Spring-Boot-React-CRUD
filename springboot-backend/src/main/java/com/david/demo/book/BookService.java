package com.david.demo.book;

import java.util.List;
import java.util.Optional;

/**
 * @author David
 */
public interface BookService {

    /**
     * 新增書籍
     * @param book 書籍資訊
     * @return 新增的書籍資訊
     */
    Book addBook(Book book);

    /**
     * 刪除書籍
     * @param id 刪除id
     */
    void deleteBook(Long id);

    /**
     * 修改書籍
     * @param book 書籍資訊
     * @return 修改後書籍資訊
     */
    Book updateBook(Book book);

    /**
     * 查詢所有書籍
     * @return 書籍List
     */
    List<Book> findAll();

    /**
     * 透過名稱搜尋
     * @param name 書籍名稱
     * @return Optional<Book>書籍資訊
     */
    Optional<Book> getByName(String name);

    /**
     * 透過Id搜尋
     * @param id 書本Id
     * @return Optional<Book>書籍資訊
     */
    Optional<Book> getById(Long id);

}
