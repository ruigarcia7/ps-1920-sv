package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.AthleteInjury;

public interface AthleteInjuryRepository extends CrudRepository<AthleteInjury, Long> {
    public AthleteInjury[] findAllByAthleteId(Long id);
}
