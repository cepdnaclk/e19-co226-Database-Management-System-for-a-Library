package com.library.library.repository;

import com.library.library.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	public List<User> findAllByOrderByDisplayNameAsc();
	public List<User> findAllByActiveOrderByDisplayNameAsc(Integer active);
	public User findByUsername(String username);
}
