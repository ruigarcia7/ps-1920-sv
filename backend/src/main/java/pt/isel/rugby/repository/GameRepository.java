package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Game;

public interface GameRepository extends CrudRepository<Game, Long> {
    Iterable<Game> findAllByAthletesContains(Athlete a);
}
