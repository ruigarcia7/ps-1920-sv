package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.OpponentBusiness;
import pt.isel.rugby.model.Opponent;

@RestController()
@RequestMapping("/opponent")
public class OpponentController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    OpponentBusiness opponentBusiness;

    @GetMapping("/all")
    public Iterable<Opponent> findAllOpponents(){
        logger.info("On method GET opponent/all");
        return opponentBusiness.findAll();
    }

    @RequestMapping("/findById/{id}")
    public Opponent findOpponentById(@PathVariable Long id){
        logger.info("On method GET opponent/findById/{id} with id "+ id);
        return opponentBusiness.findOpponentById(id);
    }

    @PostMapping("/post")
    public Long postOpponent(@RequestBody Opponent opponent){
        logger.info("On method POST opponent/post");
        return opponentBusiness.postOpponent(opponent);
    }

    @PutMapping("/update")
    public Long putOpponent(@RequestBody Opponent opponent){
        logger.info("On method PUT opponent/update");
        return opponentBusiness.updateOpponent(opponent);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteOpponent(@RequestBody Opponent opponent){
        logger.info("On method DELETE opponent/delete");
        opponentBusiness.deleteOpponent(opponent);
        return ResponseEntity.ok().build();
    }
}
