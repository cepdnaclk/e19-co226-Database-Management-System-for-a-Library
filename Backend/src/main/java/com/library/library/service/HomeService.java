package com.library.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class HomeService {
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private BookService bookService;
	
	public Map<String, Long> getTopTilesMap() {
		Map<String, Long> map = new HashMap<String, Long>();
//		map.put("totalMembers", memberService.getTotalCount());
//		map.put("totalStudents", memberService.getStudentsCount());
//		map.put("totalParents", memberService.getParentsCount());
		map.put("totalCategories", categoryService.getTotalCount());
		return map;
	}
	
}
