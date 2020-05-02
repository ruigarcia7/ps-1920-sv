package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.TournamentBusiness;
import pt.isel.rugby.model.Tournament;

@RestController()
@RequestMapping("/tournament")
public class TournamentController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    TournamentBusiness tournamentBusiness;

    @GetMapping("/all")
    public Iterable<Tournament> findAllTournaments(){
        logger.info("On method GET tournament/all");
        return tournamentBusiness.findAllTournaments();
    }

    @GetMapping("/findById/{id}")
    public Tournament findTournamentById(@PathVariable Long id){
        logger.info("On method GET tournament/findById/{id} with id " + id);
        return tournamentBusiness.findTournamentById(id);
    }

    @PostMapping("/post")
    public Long postTournament(@RequestBody Tournament tournament){
        logger.info("On method POST tournament/post");
        return tournamentBusiness.postTournament(tournament);
    }

    @PutMapping("/update")
    public Long putTournament(@RequestBody Tournament tournament){
        logger.info("On method PUT tournament/update");
        return tournamentBusiness.updateTournament(tournament);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteTournament(@RequestBody Tournament tournament){
        logger.info("On method GET tournament/delete");
        tournamentBusiness.deleteTournament(tournament);
        return ResponseEntity.ok().build();
    }
}
