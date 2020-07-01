package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.model.Staff;
import pt.isel.rugby.repository.ProfileRepository;
import pt.isel.rugby.repository.StaffRepository;

import java.util.Collections;

@Component
public class StaffBusiness {

    @Autowired
    StaffRepository staffRepository;

    @Autowired
    ProfileRepository profileRepository;

    @Autowired
    ProfileBusiness profileBusiness;

    public Iterable<Staff> findAllStaff(){
        Iterable<Staff> staffs = staffRepository.findAll();
        staffs.forEach(staff -> {
            staff.getProfile().setEvents(Collections.emptyList());
        });
        return staffs;
    }

    public Long postStaff(Staff staff){
        Profile profile = staff.getProfile();
        profile.setId(null);
        String path = profileBusiness.uploadImage(profile);
        profile.setPhoto(path);
        profile = profileRepository.save(profile);
        staff.setId(profile.getId());
        return staffRepository.save(staff).getId();
    }

    public Staff findStaffById(Long id){
        Staff staff = staffRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Staff", "Id", id));

        staff.getProfile().setEvents(Collections.emptyList());
        return staff;
    }

    public Long updateStaff(Staff staff){
        profileRepository.findById(staff.getProfile().getId()).orElseThrow(()-> new ResourceNotFoundException("Profile", "Id", staff.getId()));
        staffRepository.findById(staff.getId()).orElseThrow(()-> new ResourceNotFoundException("Staff", "Id", staff.getId()));
        return staffRepository.save(staff).getId();
    }

    public void deleteStaff(Staff staff){
        profileRepository.findById(staff.getProfile().getId()).orElseThrow(()-> new ResourceNotFoundException("Profile", "Id", staff.getId()));
        staffRepository.findById(staff.getId()).orElseThrow(()-> new ResourceNotFoundException("Staff", "Id", staff.getId()));
        staffRepository.delete(staff);
     }

    public void deleteStaffById(Long id) {
        Staff staff = staffRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Staff", "Id", id));
        Profile profile = profileRepository.findById(staff.getProfile().getId()).orElseThrow(()-> new ResourceNotFoundException("Profile", "Id", staff.getProfile().getId()));
        staffRepository.findById(staff.getId()).orElseThrow(()-> new ResourceNotFoundException("Staff", "Id", staff.getId()));
        staffRepository.delete(staff);
        profileRepository.deleteById(profile.getId());
    }
}
