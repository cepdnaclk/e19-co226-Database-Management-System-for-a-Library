package com.library.library.service;

import com.library.library.common.Constants;
import com.library.library.model.Member;
import com.library.library.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MemberService {

	@Autowired
	private MemberRepository memberRepository;
	
	@Autowired
	private IssueService issueService;
	
	public Long getTotalCount() {
		return memberRepository.count();
	}
	
	public Long getParentsCount() {
		return memberRepository.countByType(Constants.MEMBER_PARENT);
	}
	
	public Long getStudentsCount() {
		return memberRepository.countByType(Constants.MEMBER_STUDENT);
	}
	
	public List<Member> getAll() {
		return memberRepository.findAllByOrderByFirstNameAscMiddleNameAscLastNameAsc();
	}
	
	public Member get(Long id) {
		return memberRepository.findById(id).get();
	}
	
	public Member addNew(Member member) {
		member.setJoiningDate( new Date() );
		return memberRepository.save( member );
	}
	
	public Member save(Member member) {
		return memberRepository.save( member );
	}
	
	public void delete(Member member) {
		memberRepository.delete(member);
	}
	
	public void delete(Long id) {
		memberRepository.deleteById(id);
	}

	
}
