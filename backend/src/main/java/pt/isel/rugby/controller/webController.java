package pt.isel.rugby.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationConfig;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.model.Staff;
import pt.isel.rugby.repository.ProfileRepository;
import pt.isel.rugby.repository.StaffRepository;

@RestController()
public class webController {
    @Autowired
    ProfileRepository repository;

    @Autowired
    StaffRepository staffRepository;

    @RequestMapping("/all")
    public String findAll(){
        System.out.println("on GET /all");
        return repository.findAll().toString();
    }

    @RequestMapping("/findByMail")
    public String findByMail(){
        return repository.findByMail("m.s@mail.com").stream().findFirst().toString();
    }

    @PostMapping("/saveProfile")
    public String saveProfile(){
        Profile p = new Profile();
        Profile saved = repository.save(p);
        return String.valueOf(saved.toString()!=null);
    }

    @RequestMapping("/allStaff")
    public String findAllStaff(){
        Iterable<Staff> all = staffRepository.findAll();
        all.forEach(System.out::println);
        return all.toString();
    }
}
