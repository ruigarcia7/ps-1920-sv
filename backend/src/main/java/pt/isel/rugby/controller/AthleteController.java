package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.AthleteBusiness;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.AthleteRepository;
import pt.isel.rugby.repository.ProfileRepository;

@RestController()
@RequestMapping("/athlete")
public class AthleteController {
    // TODO: Find and implement a Logger
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);


    @Autowired
    AthleteBusiness athleteBusiness;

    @Autowired
    AthleteRepository athleteRepository;

    @Autowired
    ProfileRepository profileRepository;

    @GetMapping("/all")
    public Iterable<Athlete> findAllAthletes() {
        logger.info("On method GET athlete/all");
        return athleteBusiness.findAllAthletes();

    }

    @PostMapping("/post")
    public Long postAthlete(@RequestBody Athlete athlete) {
        logger.info("on method POST athlete/post");
        return athleteBusiness.postAthlete(athlete);
    }

    @GetMapping("/findById/{id}")
    public Athlete findAthleteById(@PathVariable Long id) {
        logger.info("on method GET athlete/findById/{id} with id "+ id);
        return athleteBusiness.findAthleteById(id);
    }

    @PutMapping("/update")
    public Long putAthlete(@RequestBody Athlete athlete) {
        logger.info("on method PUT athlete/update with id "+ athlete.getId());
        return athleteBusiness.updateAthlete(athlete);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteAthlete(@RequestBody Athlete athlete) {
        athleteBusiness.deleteAthlete(athlete);
        return ResponseEntity.ok().build();
    }
}
