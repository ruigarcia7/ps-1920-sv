package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.model.Opponent;
import pt.isel.rugby.repository.OpponentRepository;

@RestController()
@RequestMapping("/opponent")
public class OpponentController {
    @Autowired
    OpponentRepository opponentRepository;

    @RequestMapping("/findAll")
    public String findAllOpponents(){
        System.out.println("findAllOpponents()");
        return opponentRepository.findAll().toString();
    }

    @RequestMapping("/findById")
    public String findOpponentById(){
        System.out.println("findOpponentById()");
        return opponentRepository.findAll().iterator().next().toString();
    }

    @PostMapping("/post")
    public String postOpponent(){
        System.out.println("postOpponent()");
        Opponent opponent = new Opponent();
        opponentRepository.save(opponent);
        return opponentRepository.findAll().toString();
    }

    @PutMapping("/update")
    public String putOpponent(){
        System.out.println("updateOpponent()");
        Opponent opponent = opponentRepository.findAll().iterator().next();
        opponent.setName(opponent.getId().toString());
        opponentRepository.save(opponent);
        return opponentRepository.findAll().toString();
    }

    @DeleteMapping("/delete")
    public String deleteOpponent(){
        System.out.println("deleteOpponent()");
        return opponentRepository.findAll().toString();
    }
}
