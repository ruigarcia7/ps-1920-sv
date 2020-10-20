package pt.isel.rugby.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pt.isel.rugby.model.jwt.User;

import java.util.Optional;

public interface UserRepository  extends JpaRepository<User, Long> {

    Optional<User> findByName(String name);
    Boolean existsByName(String name);
}
