package com.david.demo.book;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * @author David
 */
@Entity
@Table(name = "book")
@Getter @Setter
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", length = 20)
    private String name;

    @Column(name = "author", length = 30)
    private String author;

    @Column(name = "pub_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate pubDate;

}