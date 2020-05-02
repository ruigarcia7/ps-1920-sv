package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.AthleteGameStatsBusiness;
import pt.isel.rugby.model.AthleteGameStats;
import pt.isel.rugby.repository.AthleteGameStatsRepository;

@RestController
@RequestMapping("/athleteGameStatsController")
public class AthleteGameStatsController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    AthleteGameStatsBusiness athleteGameStatsBusiness;

    @GetMapping("/all")
    public Iterable<AthleteGameStats> findAllAthleteGameStats(){
        logger.info("On method GET athleteGameStats/all");
        return athleteGameStatsBusiness.findAll();
    }

    @PostMapping("/post")
    public Long postAthleteGameStats(@RequestBody AthleteGameStats athleteGameStats){
        logger.info("On method POST athleteGameStats/post");
        return athleteGameStatsBusiness.postAthleteGameStats(athleteGameStats);
    }

    @GetMapping("/findById/{id}")
    public AthleteGameStats findAthleteGameStatsById(@PathVariable Long id){
        logger.info("On method GET athleteGameStats/findById/{id} with id "+ id);
        return athleteGameStatsBusiness.findAthleteGameStatsById(id);
    }

    @PutMapping("/update")
    public Long updateAthleteGameStats(@RequestBody AthleteGameStats athleteGameStats){
        logger.info("On method PUT athleteGameStats/update");
        return athleteGameStatsBusiness.updateAthleteGameStats(athleteGameStats);
    }

    // TODO: replace/add deleteById/{id}
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteAthleteGameStats(@RequestBody AthleteGameStats athleteGameStats){
        logger.info("On method DELETE athleteGameStats/delete");
        athleteGameStatsBusiness.deleteAthleteGameStats(athleteGameStats);
        return ResponseEntity.ok().build();
    }

}
