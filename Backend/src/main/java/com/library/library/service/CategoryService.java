package com.library.library.service;

import com.library.library.model.Category;
import com.library.library.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	public Long getTotalCount() {
		return categoryRepository.count();
	}
	
	public List<Category> getAllBySort() {
		return categoryRepository.findAllByOrderByNameAsc();
	}
	
	public List<Category> getAll() {
		return categoryRepository.findAll();
	}
	
	public Category get(Long id) {
		return categoryRepository.findById(id).get();
	}
	
	public Category addNew(Category category) {
		category.setCreateDate(String.valueOf(new Date()));
		return categoryRepository.save(category);
	}
	
	public Category save(Category category) {
		return categoryRepository.save(category);
	}
	
	public void delete(Category category) {
		categoryRepository.delete(category);
	}
	
	public void delete(Long id) {
		categoryRepository.deleteById(id);
	}
	
//	public boolean hasUsage(Category category) {
//		return category.getBooks().size()>0;
//	}
}
