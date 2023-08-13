package com.library.library.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "issue")
public class Issue implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "issueId")
	private Long issueId;
	
	@NotNull
	@Column(name = "issue_date")
	private String issueDate;
	
	@Column(name = "notes")
	private String notes;
	
	@Column(name = "expected_return_date")
	private String expectedReturnDate;
	
	@Column(name = "returned")
	private String status;

//	@JsonIgnore
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "nic")
	private Student student;

//	@JsonIgnore
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "bookId")
	private Book book;

	// Parameterized constructor
	public Issue(String issueDate, String expectedReturnDate, String status, String notes, Book book, Student student) {
		this.issueDate = issueDate;
		this.expectedReturnDate = expectedReturnDate;
		this.status = status;
		this.notes = notes;
		this.book = book;
		this.student = student;
	}

	// Default constructor (if needed)
	public Issue() {
	}
	
	public Long getIssueId() {
		return issueId;
	}

	public void setIssueId(Long id) {
		this.issueId = id;
	}

	public String getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(String issueDate) {
		this.issueDate = issueDate;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getExpectedReturnDate() {
		return expectedReturnDate;
	}

	public void setExpectedReturnDate(String expectedReturnDate) {
		this.expectedReturnDate = expectedReturnDate;
	}

	public Student getStudent() {
		return student;
	}


	public Book getBook() {
		return book;
	}


	public String getStatus() {
		return status;
	}

	public void setStatus(String returned) {
		this.status = returned;
	}
	
}
