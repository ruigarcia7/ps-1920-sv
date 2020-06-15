package pt.isel.rugby;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import pt.isel.rugby.business.TournamentBusiness;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Tournament;
import pt.isel.rugby.repository.TournamentRepository;

import java.sql.Date;
import java.time.Instant;
import java.util.Collections;
import java.util.Optional;

public class TournamentBusinessTest {

    @InjectMocks
    private TournamentBusiness business;

    @Mock
    TournamentRepository repository;

    @Before
    public void setup(){
        business = new TournamentBusiness();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void postTournamentTest(){
        Tournament tournament = createTournament();
        Mockito.when(repository.save(Mockito.any(Tournament.class))).thenReturn(tournament);
        Long id = business.postTournament(tournament);
        Assert.assertEquals(tournament.getId(), id);
    }


    @Test
    public void getTournamentsReturningOne(){
        Tournament tournament = createTournament();
        Mockito.when(repository.findAll()).thenReturn(Collections.singletonList(tournament));
        Tournament tournament2 = business.findAllTournaments().iterator().next();
        Assert.assertEquals(tournament.getClassification(), tournament2.getClassification());
        Assert.assertEquals(tournament.getComment(), tournament2.getComment());
        Assert.assertEquals(tournament.getLocal(), tournament2.getLocal());
        Assert.assertEquals(tournament.getName(), tournament2.getName());
        Assert.assertEquals(tournament.getDate(), tournament2.getDate());
        Assert.assertEquals(tournament.getGames().size(), tournament2.getGames().size());
    }

    @Test
    public void getTournamentsReturningNone(){
        Mockito.when(repository.findAll()).thenReturn(Collections.emptyList());
        Assert.assertFalse(business.findAllTournaments().iterator().hasNext());
    }

    @Test
    public void getExistingTournamentById(){
        Tournament tournament = createTournament();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(tournament));
        Tournament tournament2 = business.findTournamentById(1L);
        Assert.assertEquals(tournament.getClassification(), tournament2.getClassification());
        Assert.assertEquals(tournament.getComment(), tournament2.getComment());
        Assert.assertEquals(tournament.getLocal(), tournament2.getLocal());
        Assert.assertEquals(tournament.getName(), tournament2.getName());
        Assert.assertEquals(tournament.getDate(), tournament2.getDate());
        Assert.assertEquals(tournament.getGames().size(), tournament2.getGames().size());
    }

    @Test(expected = ResourceNotFoundException.class)
    public void getNotExistingTournamentById(){
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.findTournamentById(1L);
    }



    /*
    TODO: fix Mockito.when()
    @Test(expected = ResourceNotFoundException.class)
    public void getDeleteNotExistingTournament(){
        Mockito.when(repository.delete(Mockito.any(Profile.class)));
        business.findProfileByid(1L);
    }
    */
    /*
    TODO: fix Mockito.when()
    @Test(expected = ResourceNotFoundException.class)
    public void getDeleteNotExistingTournamentById(){
        Mockito.when(repository.deleteById(Mockito.any(Long.class)));
        business.findProfileByid(1L);
    }
    */

    @Test(expected = ResourceNotFoundException.class)
    public void updateNotExistingTournament(){
        Tournament tournament =  createTournament();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.updateTournament(tournament);
    }
    @Test()
    public void updateExistingTournament(){
        Tournament tournament =  createTournament();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(tournament));
        Mockito.when(repository.save(tournament)).thenReturn(tournament);
        Long id = business.updateTournament(tournament);
        Assert.assertEquals(tournament.getId(), id);
    }

    private Tournament createTournament() {
        Tournament tournament = new Tournament();
        tournament.setClassification("1");
        tournament.setComment("Test comment");
        tournament.setId(1L);
        tournament.setName("Test name");
        tournament.setDate(Date.from(Instant.now()));
        tournament.setLocal("Test local");
        tournament.setGames(Collections.emptyList());
        return tournament;
    }
}
