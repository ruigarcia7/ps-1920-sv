package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Staff;
import pt.isel.rugby.repository.StaffRepository;

@Component
public class StaffBusiness {

    @Autowired
    StaffRepository staffRepository;

    public Iterable<Staff> findAllStaff(){
        return staffRepository.findAll();
    }

    public Long postStaff(Staff staff){
        staff.getProfile().setId(null);
        staff
        return staffRepository.save(staff).getId();
    }

    public Staff findStaffById(Long id){
        return staffRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Staff", "Id", id));
    }

    public Long updateStaff(Staff staff){
        staffRepository.findById(staff.getId()).orElseThrow(()-> new ResourceNotFoundException("Staff", "Id", staff.getId()));
        return staffRepository.save(staff).getId();
    }

    public void deleteStaff(Staff staff){
        staffRepository.findById(staff.getId()).orElseThrow(()-> new ResourceNotFoundException("Staff", "Id", staff.getId()));
        staffRepository.delete(staff);
     }
}
