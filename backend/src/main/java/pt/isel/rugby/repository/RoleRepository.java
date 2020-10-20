package pt.isel.rugby.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import pt.isel.rugby.model.jwt.Role;
import pt.isel.rugby.model.jwt.RoleName;

import java.util.Optional;

public interface RoleRepository  extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}
