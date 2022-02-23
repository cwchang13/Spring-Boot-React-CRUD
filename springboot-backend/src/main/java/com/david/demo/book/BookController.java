package com.david.demo.book;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * @author David
 */
@RestController
@RequestMapping("/api/book")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class BookController {

    private final BookService bookService;

    @PostMapping("")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        try {
            return new ResponseEntity<>(bookService.addBook(book), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteBook(@PathVariable("id") Long id) {
        try {
            bookService.deleteBook(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("")
    public ResponseEntity<Book> updateBook(@RequestBody Book book) {
        Optional<Book> updateBook = bookService.getById(book.getId());
        if (updateBook.isPresent()) {
            return new ResponseEntity<>(bookService.updateBook(book), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Book>> findAll() {
        List<Book> allBookList = bookService.findAll();
        if (allBookList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(allBookList, HttpStatus.OK);
        }
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Optional<Book>> getByName(@PathVariable("name") String name) {
        Optional<Book> findBook = bookService.getByName(name);
        if (findBook.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(findBook, HttpStatus.OK);
        }
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Optional<Book>> getById(@PathVariable("id") Long id) {
        Optional<Book> findBook = bookService.getById(id);
        if (findBook.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(findBook, HttpStatus.OK);
        }
    }
}
