package com.library.library.service;

import com.library.library.common.Constants;
import com.library.library.model.Issue;
import com.library.library.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class IssueService {

	@Autowired
	private IssueRepository issueRepository;
	
	public List<Issue> getAll() {
		return issueRepository.findAll();
	}
	
	public Issue get(Long id) {
		return issueRepository.findById(id).get();
	}
	
//	public List<Issue> getAllUnreturned() {
//		return issueRepository.findByReturned( Constants.BOOK_NOT_RETURNED );
//	}
	
	public Issue addNew(Issue issue) {
		issue.setIssueDate( "1970-01-01" );
		issue.setStatus( Constants.BOOK_NOT_RETURNED );
		return issueRepository.save(issue);
	}
	
	public Issue save(Issue issue) {
		return issueRepository.save(issue);
	}
	

}
