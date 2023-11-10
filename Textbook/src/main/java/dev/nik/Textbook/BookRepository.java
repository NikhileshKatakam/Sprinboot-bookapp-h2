package dev.nik.Textbook;

import dev.nik.Textbook.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
