package com.library.library.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "book")
public class Book implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "bookId", columnDefinition = "BIGINT default 0") // Example default value is 0
	private Long bookId;


//	@NotNull(message = "*Please enter book title")
//	@NotBlank(message = "*Please enter book title")
	@Column(name = "bookTitle")
	private String bookTitle;
	
//	@NotNull(message = "*Please enter book tag")
//	@NotBlank(message = "*Please enter book tag")
	@Column(name = "bookEdition")
	private String bookEdition;
	
//	@NotNull(message = "*Please enter book authors")
//	@NotBlank(message = "*Please enter book authors")
	@Column(name = "bookAuthor")
	private String bookAuthor;
	
	@Column(name = "publisherName")
	private String publisherName;

	@ManyToOne(fetch= FetchType.EAGER )
	@JoinColumn()
////	@NotNull(message = "*Please select category")
	private Category category;

	public Book(Long bookId, String bookTitle, String bookEdition, String bookAuthor, String publisherName, Category category) {
		this.bookId = bookId;
		this.bookTitle = bookTitle;
		this.bookEdition = bookEdition;
		this.bookAuthor = bookAuthor;
		this.publisherName = publisherName;
		this.category = category;
	}

	public Book() {

	}

	public Long getBookId() {
		return bookId;
	}

	public void setBookId(Long id) {
		this.bookId = id;
	}

	public String getBookTitle() {
		return bookTitle;
	}

	public void setBookTitle(String title) {
		this.bookTitle = title;
	}

	public String getBookEdition() {
		return bookEdition;
	}

	public void setBookEdition(String tag) {
		this.bookEdition = tag;
	}

	public String getBookAuthor() {
		return bookAuthor;
	}

	public void setBookAuthor(String authors) {
		this.bookAuthor = authors;
	}

	public String getPublisherName() {
		return publisherName;
	}

	public void setPublisherName(String publisher) {
		this.publisherName = publisher;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	
}
