package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.AthleteRepository;
import pt.isel.rugby.repository.ProfileRepository;

@RestController()
@RequestMapping("/athlete")
public class AthleteController {

    @Autowired
    AthleteRepository athleteRepository;

    @Autowired
    ProfileRepository profileRepository;

    @GetMapping("/all")
    public Iterable<Athlete> findAllAthletes(){
        System.out.println("here...");
        return athleteRepository.findAll();
    }

    
    @PostMapping("/one")
    public Athlete postAthlete(@RequestBody Athlete athlete){
        System.out.println("post athlete...");
        Profile p = athlete.getProfile();
        p.setId(null);
        Profile saved = profileRepository.save(p);
        athlete.setId(null);
        athlete.setProfile(saved);
        athleteRepository.save(athlete);
        return athlete;
    }

    @PutMapping("update")
    public Athlete updateAthlete(@RequestBody Athlete athlete){
        System.out.println("update athlete...");
        athleteRepository.save(athlete);
        return athlete;
    }

}
