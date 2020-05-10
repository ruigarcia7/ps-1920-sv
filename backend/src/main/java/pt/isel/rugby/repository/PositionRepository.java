package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Position;

public interface PositionRepository extends CrudRepository<Position, Long> {
    Position findByName(String name);
}