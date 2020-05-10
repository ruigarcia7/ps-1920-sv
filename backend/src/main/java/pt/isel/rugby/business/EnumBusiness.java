package pt.isel.rugby.business;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Position;
import pt.isel.rugby.model.StaffType;
import pt.isel.rugby.repository.PositionRepository;
import pt.isel.rugby.repository.StaffTypeRepository;

@Component
public class EnumBusiness {

    @Autowired
    StaffTypeRepository staffTypeRepository;

    @Autowired
    PositionRepository positionRepository;

    public Iterable<Position> findAllPositions(){
        return positionRepository.findAll();
    }

    public Iterable<StaffType> findAllStaffType(){
        return staffTypeRepository.findAll();
    }


    public Long postPosition(Position position) {
        return positionRepository.save(position).getId();
    }

    public void deletePosition(Position position) {
        positionRepository.findById(position.getId()).orElseThrow(() -> new ResourceNotFoundException("Position", "Id", position.getId()));
        positionRepository.delete(position);
    }

    public Long postStaffType(StaffType staffType) {
        return staffTypeRepository.save(staffType).getId();
    }

    public void deleteStaffType(StaffType staffType) {
        staffTypeRepository.findById(staffType.getId()).orElseThrow(() -> new ResourceNotFoundException("StaffType", "Id", staffType.getId()));
        staffTypeRepository.delete(staffType);
    }

}