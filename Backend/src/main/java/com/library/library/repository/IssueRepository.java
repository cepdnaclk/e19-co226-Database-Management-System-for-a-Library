package com.library.library.repository;

import com.library.library.model.Issue;
import com.library.library.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {
//	public List<Issue> findByReturned(Integer returned);
}
