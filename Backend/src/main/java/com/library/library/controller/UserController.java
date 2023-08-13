package com.library.library.controller;

import com.library.library.jwtsecurity.models.User;
import com.library.library.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
//        System.out.println(user.getNic());
        return userService.createUser(user);

    }

    @PutMapping
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @DeleteMapping
    public ResponseEntity<Long> deleteUser(@RequestBody Map<String, Long> payload) {
        Long userId = payload.get("id");
        System.out.println(userId);
        userService.deleteUser(userId);
        return new ResponseEntity(userId,HttpStatus.OK);
    }
}
