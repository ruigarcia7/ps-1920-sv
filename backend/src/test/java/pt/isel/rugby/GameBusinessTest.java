package pt.isel.rugby;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import pt.isel.rugby.business.GameBusiness;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Event;
import pt.isel.rugby.model.Game;
import pt.isel.rugby.model.Opponent;
import pt.isel.rugby.model.Tournament;
import pt.isel.rugby.repository.AthleteGameStatsRepository;
import pt.isel.rugby.repository.GameRepository;
import pt.isel.rugby.repository.StatsRepository;

import java.sql.Date;
import java.time.Instant;
import java.util.Collections;
import java.util.Optional;

public class GameBusinessTest {

    @InjectMocks
    private GameBusiness business;

    @Mock
    GameRepository repository;

    @Mock
    AthleteGameStatsRepository athleteGameStatsRepository;

    @Mock
    StatsRepository statsRepository;

    @Before
    public void setup(){
        business = new GameBusiness();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void postGameTest(){
        Game game = createGame();
        Mockito.when(repository.save(Mockito.any(Game.class))).thenReturn(game);
        Long id = business.postGame(game);
        Assert.assertEquals(game.getId(), id);
    }


    @Test
    public void getGamesReturningOne(){
        Game game = createGame();
        Mockito.when(repository.findAll()).thenReturn(Collections.singletonList(game));
        Game game2 = business.findAllGames().iterator().next();
        Assert.assertEquals(game.getActiveRoster().size(), game2.getActiveRoster().size());
        Assert.assertEquals(game.getAthleteGameStats().size(), game2.getAthleteGameStats().size());
        Assert.assertEquals(game.getAthletes().size(), game2.getAthletes().size());
        Assert.assertEquals(game.getTournament(), game2.getTournament());
        Assert.assertEquals(game.getComment(), game2.getComment());
        Assert.assertEquals(game.getLocal(), game2.getLocal());
        Assert.assertEquals(game.getDate(), game2.getDate());
        Assert.assertEquals(game.getId(), game2.getId());
        Assert.assertEquals(game.getOpponent(), game2.getOpponent());
        Assert.assertEquals(game.getOpponentScore(), game2.getOpponentScore());
        Assert.assertEquals(game.getTeamScore(), game2.getTeamScore());
    }

    @Test
    public void getGamesReturningNone(){
        Mockito.when(repository.findAll()).thenReturn(Collections.emptyList());
        Assert.assertFalse(repository.findAll().iterator().hasNext());
    }



    @Test
    public void getExistingGameById(){
        Game game = createGame();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(game));
        Game game2 = business.findGameById(1L);
        Assert.assertEquals(game.getActiveRoster().size(), game2.getActiveRoster().size());
        Assert.assertEquals(game.getAthleteGameStats().size(), game2.getAthleteGameStats().size());
        Assert.assertEquals(game.getAthletes().size(), game2.getAthletes().size());
        Assert.assertEquals(game.getTournament(), game2.getTournament());
        Assert.assertEquals(game.getComment(), game2.getComment());
        Assert.assertEquals(game.getLocal(), game2.getLocal());
        Assert.assertEquals(game.getDate(), game2.getDate());
        Assert.assertEquals(game.getId(), game2.getId());
        Assert.assertEquals(game.getOpponent(), game2.getOpponent());
        Assert.assertEquals(game.getOpponentScore(), game2.getOpponentScore());
        Assert.assertEquals(game.getTeamScore(), game2.getTeamScore());
    }

    @Test(expected = ResourceNotFoundException.class)
    public void getNotExistingGameById(){
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.findGameById(1L);
    }

    /*
    TODO: fix Mockito.when()
    @Test(expected = ResourceNotFoundException.class)
    public void getDeleteNotExistingProfile(){
        Mockito.when(repository.delete(Mockito.any(Profile.class)));
        business.findProfileByid(1L);
    }
    */

    /*
    TODO: fix Mockito.when()
    @Test(expected = ResourceNotFoundException.class)
    public void getDeleteNotExistingProfileById(){
        Mockito.when(repository.deleteById(Mockito.any(Long.class)));
        business.findProfileByid(1L);
    }
    */

    @Test(expected = ResourceNotFoundException.class)
    public void updateNotExistingGame(){
        Game game = createGame();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.updateGame(game);
    }
    @Test()
    public void updateExistingGame(){
        Game game = createGame();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(game));
        Mockito.when(repository.save(game)).thenReturn(game);
        Long id = business.updateGame(game);
        Assert.assertEquals(game.getId(), id);
    }

    private Game createGame() {
        Game game = new Game();
        game.setTournament(new Tournament());
        game.setActiveRoster(Collections.emptyList());
        game.setAthletes(Collections.emptyList());
        game.setAthleteGameStats(Collections.emptyList());
        game.setOpponent(new Opponent());
        game.setComment("Test comment");
        game.setDate(Date.from(Instant.now()));
        game.setId(1L);
        game.setLocal("Test local");
        game.setOpponentScore(1L);
        game.setTeamScore(1L);
        return game;
    }

    private Event createEvent() {
        Event event = new Event();
        event.setId(1L);
        event.setDate(Date.from(Instant.now()));
        event.setDescription("Description");
        event.setLocal("Test local");
        event.setName("Test Name");
        event.setProfiles(Collections.emptyList());
        return event;
    }

}
