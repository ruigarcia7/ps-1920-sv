package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.model.Staff;
import pt.isel.rugby.repository.AthleteRepository;
import pt.isel.rugby.repository.ProfileRepository;
import pt.isel.rugby.repository.StaffRepository;


/**
 * this controller should be used in development and deleted before final release
 */
@RestController()
public class webController {
    @Autowired
    AthleteRepository athleteRepository;

    @Autowired
    ProfileRepository repository;

    @Autowired
    StaffRepository staffRepository;

    @RequestMapping("/all")
    public String findAll() {
        System.out.println("on GET /all");

        //return repository.findAll().toString()+'\n'+
        StringBuilder sb = new StringBuilder();
        //athleteRepository.findAll().forEach(item -> sb.append(item.toString()+'\n'));
        return athleteRepository.findAll().toString();
    }

    @RequestMapping("athleteTest/all")
    public String findAllAthletes() {
        System.out.println("here...");
        return athleteRepository.findAll().toString();
    }

    @RequestMapping("/findByMail")
    public String findByMail() {
        return repository.findByMail("m.s@mail.com").stream().findFirst().toString();
    }

    @PostMapping("/saveProfile")
    public String saveProfile() {
        Profile p = new Profile();
        Profile saved = repository.save(p);
        return String.valueOf(saved.toString() != null);
    }

    @RequestMapping("/allStaff")
    public String findAllStaff() {
        Iterable<Staff> all = staffRepository.findAll();
        all.forEach(System.out::println);
        return all.toString();
    }
}
