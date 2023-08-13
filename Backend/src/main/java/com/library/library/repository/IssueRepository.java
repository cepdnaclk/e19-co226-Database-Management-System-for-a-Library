package com.library.library.repository;

import com.library.library.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {
//	public List<Issue> findByReturned(Integer returned);
}
