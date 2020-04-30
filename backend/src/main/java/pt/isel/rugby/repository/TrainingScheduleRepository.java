package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.TrainingSchedule;

public interface TrainingScheduleRepository extends CrudRepository<TrainingSchedule, Long> {
}
