package com.library.library;

import com.library.library.jwtsecurity.models.ERole;
import com.library.library.jwtsecurity.models.Role;
import com.library.library.jwtsecurity.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(LibraryApplication.class, args);
	}
	@Bean
	public CommandLineRunner initializeRoles(RoleRepository roleRepository) {
		return args -> {
			roleRepository.save(new Role(ERole.ROLE_USER,1));
			roleRepository.save(new Role(ERole.ROLE_MODERATOR,2));
			roleRepository.save(new Role(ERole.ROLE_ADMIN,3));
		};
	}

}
