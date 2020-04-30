package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Athlete;

public interface AthleteRepository extends CrudRepository<Athlete, Long> {
}
