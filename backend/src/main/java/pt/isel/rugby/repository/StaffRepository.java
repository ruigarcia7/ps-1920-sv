package pt.isel.rugby.repository;

import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.Staff;

public interface StaffRepository extends CrudRepository<Staff, Long> {
}
