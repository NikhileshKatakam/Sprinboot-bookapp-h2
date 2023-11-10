package dev.nik.Textbook;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequestMapping("/api/books")
public class BookController {
	
	@Autowired
	private BookRepository bookRepository;
	
	@GetMapping
	public List<Book> getAllbooks()
	{
		return bookRepository.findAll();
	}
	
	@PostMapping
	public Book addBook(@RequestBody Book book)
	{
		System.out.println(book);
		return bookRepository.save(book);
	}
}
