package com.library.library.service;

import com.library.library.model.Book;
import com.library.library.model.Student;
import com.library.library.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student updateStudent(Student student) {
        return studentRepository.save(student);
    }

    public void deleteStudent(long studentId) {
        studentRepository.deleteById(studentId);
    }
    public Student getStudentByNic(Long nic) {
        return studentRepository.findById(nic).orElse(null);
    }
}
