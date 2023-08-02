package com.library.library.controller;

import com.library.library.model.Student;
import com.library.library.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/Students")
public class StudentController {
    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        System.out.println(student.getNic());
        return studentService.createStudent(student);

    }

    @PutMapping
    public Student updateStudent(@RequestBody Student student) {
        return studentService.updateStudent(student);
    }

    @DeleteMapping
    public ResponseEntity<Long> deleteStudent(@RequestBody Map<String, Long> payload) {
        Long studentId = payload.get("nic");
        System.out.println(studentId);
        studentService.deleteStudent(studentId);
        return new ResponseEntity(studentId,HttpStatus.OK);
    }
}
