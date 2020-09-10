package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.AthleteGameStatsBusiness;
import pt.isel.rugby.business.GameBusiness;
import pt.isel.rugby.model.AthleteGameStats;
import pt.isel.rugby.repository.AthleteGameStatsRepository;
import pt.isel.rugby.utils.GameStatsResponse;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/athletegamestats")
public class AthleteGameStatsController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    AthleteGameStatsBusiness athleteGameStatsBusiness;

    @Autowired
    GameBusiness gameBusiness;

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

    @GetMapping("/findByGameId/{id}")
    public GameStatsResponse findAthleteGameStatsByGameId(@PathVariable Long id){
        logger.info("On method GET athleteGameStats/findByGameId/{id} with id "+ id);
        return athleteGameStatsBusiness.findAthleteGameStatsByGameId(id);
    }

    @GetMapping("/findByAthleteId/{id}")
    public AthleteGameStats[] findAthleteGameStatsByAthleteId(@PathVariable Long id){
        logger.info("On method GET athleteGameStats/findByAthleteId/{id} with id "+ id);
        return athleteGameStatsBusiness.findAthleteGameStatsByAthleteId(id);
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

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAthleteGameStatsById(@PathVariable Long id){
        logger.info("On method DELETE athleteGameStats/delete/{id} with id "+ id);
        athleteGameStatsBusiness.deleteAthleteGameStatsById(id);
        return ResponseEntity.ok().build();
    }
}
