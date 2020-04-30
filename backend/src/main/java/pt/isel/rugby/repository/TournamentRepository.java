package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Tournament;

public interface TournamentRepository extends CrudRepository<Tournament, Long> {
}
