package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Injury;

public interface InjuryRepository extends CrudRepository<Injury, Long> {
}
