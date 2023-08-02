package com.library.library.repository;

import com.library.library.model.Book;
import com.library.library.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
//	public List<Book> findByCategory(Category category);
}
