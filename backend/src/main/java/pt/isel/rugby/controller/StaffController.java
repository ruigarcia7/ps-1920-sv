package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/staff")
public class StaffController {

    @Autowired
    ProfileRepository profileRepository;
    @Autowired
    StaffRepository staffRepository;

    @RequestMapping("/findAll")
    public String findAllStaff(){
        System.out.println("findAllStaff()");
        return staffRepository.findAll().toString();
    }

    @RequestMapping("/findById")
    public String findStaffById(){
        System.out.println("findStaffById()");
        return staffRepository.findById(Long.valueOf(1)).get().toString();
    }

    @PostMapping("/post")
    public String postStaff(){
        System.out.println("postStaff()");
        Profile profile = profileRepository.findAll().iterator().next();
        Staff staff = new Staff();
        staff.setProfile(profile);
        staffRepository.save(staff);
        return staffRepository.findAll().toString();
    }

    @PutMapping("/update")
    public String putStaff(){
        System.out.println("updateStaff()");
        Staff staff = staffRepository.findAll().iterator().next();
        staff.setStaffNumber(staff.getId()+"");
        staffRepository.save(staff);
        return staffRepository.findAll().toString();
    }

    @DeleteMapping("/delete")
    public String deleteAthlete(){
        System.out.println("deleteStaff()");
        return staffRepository.findAll().toString();
    }
}

