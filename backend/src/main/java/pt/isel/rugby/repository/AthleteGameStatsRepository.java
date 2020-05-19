package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.AthleteGameStats;

public interface AthleteGameStatsRepository extends CrudRepository<AthleteGameStats, Long> {

    public AthleteGameStats[] findAllByGameId(Long id);
}
