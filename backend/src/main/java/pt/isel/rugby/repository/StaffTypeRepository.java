package pt.isel.rugby.repository;

import org.hibernate.validator.constraints.Currency;
import org.springframework.data.repository.CrudRepository;
import pt.isel.rugby.model.StaffType;

public interface StaffTypeRepository extends CrudRepository<StaffType, Long> {
    StaffType findByName(String name);
}
