package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Event;
import pt.isel.rugby.model.Profile;

public interface EventRepository extends CrudRepository<Event, Long> {
    Iterable<Event> findAllByProfilesContains(Profile p);
}
