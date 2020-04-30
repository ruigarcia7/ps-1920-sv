package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.repository.ProfileRepository;
import pt.isel.rugby.model.Profile;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    ProfileRepository profileRepository;

    @RequestMapping("/findAll")
    public String findAllProfile(){
        System.out.println("findAllProfile()");
        return profileRepository.findAll().toString();
    }

    @RequestMapping("/findById")
    public String findProfileById(){
        System.out.println("findProfileById()");
        return profileRepository.findAll().iterator().next().toString();
    }

    @PostMapping("/post")
    public String postProfile(){
        System.out.println("postProfile()");
        Profile profile = new Profile();
        profileRepository.save(profile);
        return profileRepository.findAll().toString();
    }

    @PutMapping("/update")
    public String putProfile(){
        System.out.println("updateProfile()");
        Profile profile = profileRepository.findAll().iterator().next();
        profile.setAddress(profile.getId().toString());
        profileRepository.save(profile);
        return profileRepository.findAll().toString();
    }

    @DeleteMapping("/delete")
    public String deleteAthlete(){
        System.out.println("deleteAthlete()");
        return profileRepository.findAll().toString();
    }
}
