package com.library.library.controller;

import com.library.library.common.Constants;
import com.library.library.model.Book;
import com.library.library.model.Category;
import com.library.library.model.Issue;
import com.library.library.model.Student;
import com.library.library.repository.IssueRepository;
import com.library.library.service.BookService;
import com.library.library.service.CategoryService;
import com.library.library.service.IssueService;
import com.library.library.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@CrossOrigin("*")
@RestController
@RequestMapping("/Borrowers")
public class IssueController {

	@Autowired
	private IssueRepository issueRepository;

	@Autowired
	private BookService bookService;

	@Autowired
	private StudentService studentService;

	@GetMapping
	public List<Issue> getAllIssues() {
		return issueRepository.findAll();
	}

	@PostMapping
	public ResponseEntity<Issue> createIssue(@RequestBody Map<String, String> payload) {
		String a=payload.get("issueDate");
		String b=payload.get("expectedReturnDate");
		String c=payload.get("status");
		String d=payload.get("notes");
		Book e=bookService.getBookById(Long.parseLong(payload.get("bookId")));
		Student f=studentService.getStudentByNic(Long.parseLong(payload.get("nic")));
		Issue savedIssue = issueRepository.save(new Issue(a,b,2,d,e,f));
		return new ResponseEntity<Issue>(savedIssue, HttpStatus.CREATED);
	}

}

