package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.ProfileRepository;

@RestController
public class webController {
    @Autowired
    ProfileRepository repository;

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
}
