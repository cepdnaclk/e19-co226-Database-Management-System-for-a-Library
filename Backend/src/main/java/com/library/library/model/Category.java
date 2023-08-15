package com.library.library.model;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "category")
public class Category implements Serializable {


	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long categoryId;
	
	@NotNull(message = "*Please enter category name")
	@NotBlank(message = "*Please enter category name")
	@Column(name = "name")
	private String name;
	
	@Column(name = "notes")
	@Length(max = 1000, message = "*Must not exceed 1000 characters.")
	private String notes;
	
	@Column()
	private String createDate;
	
//	@JsonIgnore
//	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<Book> books;
	
	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long id) {
		this.categoryId = categoryId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}


//	public List<Book> getBooks() {
//		return books;
//	}

//	public void setBooks(List<Book> books) {
//		this.books = books;
//	}
	
}
