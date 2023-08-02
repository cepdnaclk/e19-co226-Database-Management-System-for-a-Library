package com.library.library.model;

import jakarta.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Student {
    @Id
    @Column(name = "nic")
    private Long nic;

    @NotNull
    @Column(name = "role", nullable = false)
    private String role;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email")
    private String email;

    @NotNull
    @Column(name = "contact", nullable = false)
    private String contact;

    @Column(name = "gender")
    private String gender;

    // Constructors

    // Default constructor (required by JPA)
    public Student() {
    }

    // Constructor with all fields
    public Student(Long nic, String role, String name, String email, String contact, String gender) {
        this.nic = nic;
        this.role = role;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.gender = gender;
    }

    // Getters and Setters
    public Long getNic() {
        return nic;
    }

    public void setNic(Long nic) {
        this.nic = nic;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
