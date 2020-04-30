package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.model.Game;
import pt.isel.rugby.model.Opponent;
import pt.isel.rugby.repository.GameRepository;
import pt.isel.rugby.repository.OpponentRepository;

@RestController()
@RequestMapping("/game")
public class GameController {
    @Autowired
    GameRepository gameRepository;
    @Autowired
    OpponentRepository opponentRepository;

    @RequestMapping("/findAll")
    public String findAllGames(){
        System.out.println("findAllGames()");
        return gameRepository.findAll().toString();
    }

    @RequestMapping("/findById")
    public String findGameById(){
        System.out.println("findGameById()");
        return gameRepository.findAll().iterator().next().toString();
    }

    @PostMapping("/post")
    public String postGame(){
        System.out.println("postGame()");
        Opponent opponent = opponentRepository.findAll().iterator().next();
        Game game = new Game();
        game.setOpponent(opponent);
        gameRepository.save(game);
        return gameRepository.findAll().toString();
    }

    @PutMapping("/update")
    public String putGame(){
        System.out.println("updateGame()");
        Game game = gameRepository.findAll().iterator().next();
        game.setComment(game.getId().toString());
        gameRepository.save(game);
        return gameRepository.findAll().toString();
    }

    @DeleteMapping("/delete")
    public String deleteGame(){
        System.out.println("deleteGame()");
        return gameRepository.findAll().toString();
    }

}
