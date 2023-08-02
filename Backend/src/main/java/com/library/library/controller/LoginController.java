package com.library.library.controller;

import com.library.library.model.User;
import com.library.library.service.CategoryService;
import com.library.library.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class LoginController {

	@Autowired
	private UserService userService;

	@PostMapping("member/login")
	public ResponseEntity<User> getLoginDetails(@RequestBody User l) {
		System.out.println("getbook controller function got input as " + l);
		ResponseEntity<User> re=null;
		if(l.getPassword()==userService.getByUsername(l.getUsername()).getPassword())
			re =new ResponseEntity<User>(l,HttpStatus.OK);
		else
			re =new ResponseEntity<User>(l, HttpStatus.NOT_FOUND);

		return re;



	}
	@PostMapping("member/adminlogin")
	public ResponseEntity<User> getAdminLoginDetails(@RequestBody User l) {
		System.out.println("getbook controller function got input as " + l);
		ResponseEntity<User> re=null;
		if(false)
			re =new ResponseEntity<User>(l, HttpStatus.NOT_FOUND);
		else
			re =new ResponseEntity<User>(l,HttpStatus.OK);
		return re;
	}
	
}
