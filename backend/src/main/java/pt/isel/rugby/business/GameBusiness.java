package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.AthleteGameStats;
import pt.isel.rugby.model.Game;
import pt.isel.rugby.repository.AthleteGameStatsRepository;
import pt.isel.rugby.repository.GameRepository;
import pt.isel.rugby.repository.StatsRepository;

import java.util.List;

@Component
public class GameBusiness {
    @Autowired
    GameRepository gameRepository;

    @Autowired
    AthleteGameStatsRepository athleteGameStatsRepository;

    @Autowired
    StatsRepository statsRepository;


    public Iterable<Game> findAllGames() {return gameRepository.findAll();}

    public Long postGame (Game game){
        List<AthleteGameStats> ags = game.getAthleteGameStats();
        ags.forEach(item -> item.setId(statsRepository.save(item.getStats()).getId()));
        athleteGameStatsRepository.saveAll(ags);
        return gameRepository.save(game).getId();
    }

    public Game findGameById(Long id){
        return gameRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Game", "Id", id));
    }
    public Long updateGame(Game game){
        gameRepository.findById(game.getId()).orElseThrow(() -> new ResourceNotFoundException("Game", "Id", game.getId()));
        List<AthleteGameStats> ags = game.getAthleteGameStats();
        ags.forEach(item -> item.setId(statsRepository.save(item.getStats()).getId()));
        athleteGameStatsRepository.saveAll(ags);
        return gameRepository.save(game).getId();
    }

    public void deleteGame(Game game){
        gameRepository.findById(game.getId()).orElseThrow(() -> new ResourceNotFoundException("Game", "Id", game.getId()));
        List<AthleteGameStats> ags = game.getAthleteGameStats();
        ags.forEach(item -> statsRepository.delete(item.getStats()));
        athleteGameStatsRepository.deleteAll(ags);
        gameRepository.delete(game);
    }

    public void deleteGameById(Long id) {
        Game game = gameRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Game", "Id", id));
        List<AthleteGameStats> ags = game.getAthleteGameStats();
        ags.forEach(item -> statsRepository.delete(item.getStats()));
        athleteGameStatsRepository.deleteAll(ags);
        gameRepository.delete(game);
    }
}
