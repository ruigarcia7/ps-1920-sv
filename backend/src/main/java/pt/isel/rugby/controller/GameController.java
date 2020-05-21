package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.GameBusiness;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Game;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController()
@RequestMapping("/game")
public class GameController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    GameBusiness gameBusiness;

    @GetMapping("/all")
    public Iterable<Game> findAllGames(){
        logger.info("On method GET game/all");
        return gameBusiness.findAllGames();
    }

    @GetMapping("/findById/{id}")
    public Game findGameById(@PathVariable Long id){
        logger.info("On method GET game/findById/{id} with id "+id);
        return gameBusiness.findGameById(id);
    }

    @PostMapping("/post")
    public Long postGame(@RequestBody Game game){
        logger.info("On method POST game/post");
        //game.getActiveRoster().forEach( ar -> ar.setGame(game));
        return gameBusiness.postGame(game);
    }

    @PutMapping("/update")
    public Long putGame(@RequestBody Game game){
        logger.info("On method PUT athlete/update");
        /*game.getActiveRoster().forEach( ar -> {
           ar.setGame(new Game());
           ar.getGame().setId(game.getId());
        });*/
        return gameBusiness.updateGame(game);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteGame(@RequestBody Game game){
        logger.info("On method DELETE athlete/delete");;
        gameBusiness.deleteGame(game);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteGameById(@PathVariable Long id){
        logger.info("On method DELETE athlete/delete/{id} with id "+ id);;
        gameBusiness.deleteGameById(id);
        return ResponseEntity.ok().build();
    }


}
