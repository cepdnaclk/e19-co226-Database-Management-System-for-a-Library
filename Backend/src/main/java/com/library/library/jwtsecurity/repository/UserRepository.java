package com.library.library.jwtsecurity.repository;

import java.util.Optional;

import com.library.library.jwtsecurity.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);
  User findByEmail(String email);


  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}
