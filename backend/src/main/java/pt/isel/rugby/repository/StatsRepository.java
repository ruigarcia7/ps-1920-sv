package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Stats;

public interface StatsRepository extends CrudRepository<Stats, Long> {
}
