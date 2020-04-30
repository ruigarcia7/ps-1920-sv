package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Game;

public interface GameRepository extends CrudRepository<Game, Long> {
}
