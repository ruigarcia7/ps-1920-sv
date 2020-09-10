package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.model.AthleteInjury;
import pt.isel.rugby.business.AthleteInjuryBusiness;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/athleteinjury")
public class AthleteInjuryController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    AthleteInjuryBusiness athleteInjuryBusiness;

    @GetMapping("/all")
    public Iterable<AthleteInjury> findAllAthleteInjury(){
        logger.info("On method GET athleteGameStats/all");
        return athleteInjuryBusiness.findAll();
    }

    @PostMapping("/post")
    public Long postAthleteInjury(@RequestBody AthleteInjury athleteInjury){
        logger.info("On method POST athleteGameStats/post");
        return athleteInjuryBusiness.postAthleteInjury(athleteInjury);
    }

    @GetMapping("/findById/{id}")
    public AthleteInjury findAthleteInjuryById(@PathVariable Long id){
        logger.info("On method GET athleteGameStats/findById/{id} with id "+ id);
        return athleteInjuryBusiness.findAthleteInjuryById(id);
    }

    @GetMapping("/findByAthleteId/{id}")
    public AthleteInjury[] findAthleteInjuryByAthleteId(@PathVariable Long id){
        logger.info("On method GET athleteGameStats/findByAthleteId/{id} with id "+ id);
        return athleteInjuryBusiness.findAthleteInjuryByAthleteId(id);
    }

    @PutMapping("/update")
    public Long updateAthleteInjury(@RequestBody AthleteInjury athleteInjury){
        logger.info("On method PUT athleteGameStats/update");
        return athleteInjuryBusiness.updateAthleteInjury(athleteInjury);
    }

    // TODO: replace/add deleteById/{id}
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteAthleteGameStats(@RequestBody AthleteInjury athleteInjury){
        logger.info("On method DELETE athleteGameStats/delete");
        athleteInjuryBusiness.deleteAthleteInjury(athleteInjury);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAthleteInjuryById(@PathVariable Long id){
        logger.info("On method DELETE athleteGameStats/delete/{id} with id "+ id);
        athleteInjuryBusiness.deleteAthleteInjuryById(id);
        return ResponseEntity.ok().build();
    }
}

