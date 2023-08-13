package com.library.library.controller;

import com.library.library.model.Book;
import com.library.library.model.Category;
import com.library.library.model.Student;
import com.library.library.service.BookService;
import com.library.library.service.CategoryService;
import com.library.library.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/books")
public class BookController {
	@Autowired
	private BookService bookService;

	@GetMapping
	public List<Book> getAllBooks() {
		return bookService.getAll();
	}


	@PostMapping
	public ResponseEntity<Book> addBook(@RequestBody Book book) {
		Book savedBook = bookService.save(book);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedBook);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book book) {
		Book existingBook = bookService.getBookById(id);
		if (existingBook == null) {
			return ResponseEntity.notFound().build();
		}
		Book updatedBook = bookService.save(book);
		return ResponseEntity.ok(updatedBook);
	}

	@DeleteMapping()
	public ResponseEntity<Long> deleteBook(@RequestBody Map<String, Long> payload) {
		Long id = payload.get("bookId");
		System.out.println(id);
		Book existingBook = bookService.getBookById(id);
		if (existingBook == null) {
			return ResponseEntity.notFound().build();
		}
		bookService.delete(id);
		return new ResponseEntity(id,HttpStatus.OK);
	}
}
