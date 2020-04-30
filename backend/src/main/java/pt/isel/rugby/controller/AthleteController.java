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

    @RequestMapping("/all")
    public String findAllAthletes(){
        System.out.println("here...");
        return athleteRepository.findAll().toString();
    }

    @PostMapping("/one")
    public String postAthlete(){
        System.out.println("post athlete...");
        Athlete athlete = new Athlete();
        return athleteRepository.findAll().toString();
    }
}
