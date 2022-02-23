package com.david.demo.book;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * @author David
 */
@Service
@Transactional(rollbackFor = Exception.class)
@AllArgsConstructor
public class BookServiceImpl implements BookService{

    private final BookRepo bookRepo;

    /**
     * 新增書籍
     *
     * @param book 書籍資訊
     * @return 新增的書籍資訊
     */
    @Override
    public Book addBook(Book book) {
        return bookRepo.save(book);
    }

    /**
     * 刪除書籍
     *
     * @param id 刪除id
     */
    @Override
    public void deleteBook(Long id) {
        bookRepo.deleteById(id);
    }

    /**
     * 修改書籍
     *
     * @param book 書籍資訊
     * @return 修改後書籍資訊
     */
    @Override
    public Book updateBook(Book book) {
        return bookRepo.save(book);
    }

    /**
     * 查詢所有書籍
     *
     * @return 書籍List
     */
    @Override
    public List<Book> findAll() {
        return bookRepo.findAll();
    }

    /**
     * 透過名稱搜尋
     *
     * @param name 書籍名稱
     * @return Optional<Book>書籍資訊
     */
    @Override
    public Optional<Book> getByName(String name) {
        return bookRepo.findByName(name);
    }

    /**
     * 透過Id搜尋
     *
     * @param id 書本Id
     * @return Optional<Book>書籍資訊
     */
    @Override
    public Optional<Book> getById(Long id) {
        return bookRepo.findById(id);
    }
}
