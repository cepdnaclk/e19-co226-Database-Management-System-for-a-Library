package com.library.library.jwtsecurity.repository;

import java.util.Optional;

import com.library.library.jwtsecurity.models.UserReg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRegRepository extends JpaRepository<UserReg, Long> {
  Optional<UserReg> findByUsername(String username);
  UserReg findByEmail(String email);


  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}
