package com.david.demo.book;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @author David
 */
public interface BookRepo extends JpaRepository<Book, Long> {

    /**
     * 透過名稱搜尋書籍
     * @param name 書籍名稱
     * @return 書籍資訊
     */
    Optional<Book> findByName(String name);
}
