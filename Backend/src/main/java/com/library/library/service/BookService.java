package com.library.library.service;

import com.library.library.common.Constants;
import com.library.library.model.Book;
import com.library.library.model.Category;
import com.library.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepository;

	
	public Long getTotalCount() {
		return bookRepository.count();
	}
	

	public List<Book> getAll() {
		return bookRepository.findAll();
	}
	
	public Book get(Long id) {
		return bookRepository.findById(id).get();
	}

	
	public List<Book> get(List<Long> ids) {
		return bookRepository.findAllById(ids);
	}
	
//	public List<Book> getByCategory(Category category) {
//		return bookRepository.findByCategory(category);
//	}

	
	public Book addNew(Book book) {
		return bookRepository.save(book);
	}
	
	public Book save(Book book) {
		return bookRepository.save(book);
	}

	public void delete(Book book) {
		bookRepository.delete(book);
	}
	
	public void delete(Long id) {
		bookRepository.deleteById(id);
	}
	
	public Book getBookById(Long id) {
		return bookRepository.findById(id).orElse(null);
	}
}
