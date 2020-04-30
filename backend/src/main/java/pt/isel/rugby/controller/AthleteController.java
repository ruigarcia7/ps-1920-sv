package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.repository.AthleteRepository;

@RestController()
@RequestMapping("/athlete")
public class AthleteController {

    @Autowired
    AthleteRepository athleteRepository;

    @RequestMapping("/findAll")
    public String findAllAthletes(){
        System.out.println("findAllAthletes()");
        return athleteRepository.findAll().toString();
    }

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
