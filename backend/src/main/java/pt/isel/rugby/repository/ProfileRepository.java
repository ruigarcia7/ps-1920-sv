package pt.isel.rugby.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Profile;

import java.util.Date;
import java.util.List;

public interface ProfileRepository extends CrudRepository<Profile, Long> {
    List<Profile> findByMail(String mail);
}
