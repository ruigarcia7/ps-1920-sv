package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Practice;

public interface PracticeRepository extends CrudRepository<Practice, Long> {
    //Iterable<Practice> findAllByAthletePracticesAthleteContains(Athlete a);
}
