package com.library.library.controller;

import com.library.library.model.Book;
import com.library.library.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/get")
public class HomeController {

	@Autowired
	HomeService homeService;

	@GetMapping("/categories")
	public List<Integer> getAllBooks() {
		Integer[] array = {100,300,300};
		return Arrays.asList(array);
	}
	@GetMapping("/records")
	public List<Integer> getAllBks() {
		Integer[] array = {100,300,300};
		return Arrays.asList(array);
	}
}
