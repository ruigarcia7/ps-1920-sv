package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.repository.AthleteRepository;

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
    @RequestMapping("/findAll")
    public String findAllAthletes(){
        System.out.println("findAllAthletes()");
        return athleteRepository.findAll().toString();
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
    @RequestMapping("/findById")
    public String findAthleteById(){
        System.out.println("findAthleteById");
        return athleteRepository.findAll().iterator().next().toString();
    }

    @PostMapping("/post")
    public String postAthlete(){
        System.out.println("postAthlete()");
        Athlete athlete = new Athlete();
        athleteRepository.save(athlete);
        return athleteRepository.findAll().toString();
    }

    @PutMapping("/update")
    public String putAthlete(){
        System.out.println("updateAthlete()");
        Athlete athlete = athleteRepository.findAll().iterator().next();
        athlete.setAthleteNumber(athlete.getId().toString());
        athleteRepository.save(athlete);
        return athleteRepository.findAll().toString();
    }

    @DeleteMapping("/delete")
    public String deleteAthlete(){
        System.out.println("deleteAthlete()");
        return athleteRepository.findAll().toString();
    }
}
