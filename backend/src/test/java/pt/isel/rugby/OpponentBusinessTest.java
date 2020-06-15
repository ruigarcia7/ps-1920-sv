package pt.isel.rugby;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import pt.isel.rugby.business.OpponentBusiness;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Opponent;
import pt.isel.rugby.repository.OpponentRepository;

import java.util.Collections;
import java.util.Optional;

public class OpponentBusinessTest {
    @InjectMocks
    private OpponentBusiness business;

    @Mock
    OpponentRepository repository;

    @Before
    public void setup(){
        business = new OpponentBusiness();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void postOpponentTest(){
        Opponent opponent = createOpponent();
        Mockito.when(repository.save(Mockito.any(Opponent.class))).thenReturn(opponent);
        Long id = business.postOpponent(opponent);
        Assert.assertEquals(opponent.getId(), id);
    }

    @Test
    public void getOpponentsReturningOne(){
        Opponent opponent =  createOpponent();
        Mockito.when(repository.findAll()).thenReturn(Collections.singletonList(opponent));
        Opponent opponent2 = business.findAll().iterator().next();
        Assert.assertEquals(opponent.getId(), opponent2.getId());
        Assert.assertEquals(opponent.getName(), opponent2.getName());
        Assert.assertEquals(opponent.getPhoto(), opponent2.getPhoto());
    }

    @Test
    public void getOpponentsReturningNone(){
        Mockito.when(repository.findAll()).thenReturn(Collections.emptyList());
        Assert.assertFalse(business.findAll().iterator().hasNext());
    }



    @Test
    public void getExistingOpponentById(){
        Opponent opponent = createOpponent();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(opponent));
        Opponent opponent2 = business.findOpponentById(1L);
        Assert.assertEquals(opponent.getId(), opponent2.getId());
        Assert.assertEquals(opponent.getName(), opponent2.getName());
        Assert.assertEquals(opponent.getPhoto(), opponent2.getPhoto());
    }

    @Test(expected = ResourceNotFoundException.class)
    public void getNotExistingOpponentById(){
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.findOpponentById(1L);
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
    public void updateNotExistingOpponent(){
        Opponent opponent = createOpponent();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.updateOpponent(opponent);
    }

    @Test()
    public void updateExistingOpponent(){
        Opponent opponent = createOpponent();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(opponent));
        Mockito.when(repository.save(opponent)).thenReturn(opponent);
        Long id = business.updateOpponent(opponent);
        Assert.assertEquals(opponent.getId(), id);
    }

    private Opponent createOpponent() {
        Opponent opponent = new Opponent();
        opponent.setId(1L);
        opponent.setName("Test name");
        opponent.setPhoto("photo");
        return opponent;
    }
}
