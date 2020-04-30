package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Event;

public interface EventRepository extends CrudRepository<Event, Long> {
}
