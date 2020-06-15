package pt.isel.rugby;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import pt.isel.rugby.business.TrainingScheduleBusiness;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.TrainingSchedule;
import pt.isel.rugby.repository.TrainingScheduleRepository;

import java.sql.Date;
import java.time.Instant;
import java.util.Collections;
import java.util.Optional;

public class TrainingScheduleBusinessTest {

    @InjectMocks
    private TrainingScheduleBusiness business;

    @Mock
    TrainingScheduleRepository repository;

    @Before
    public void setup(){
        business = new TrainingScheduleBusiness();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void postTrainingScheduleTest(){
        TrainingSchedule trainingSchedule = createTrainingSchedule();
        Mockito.when(repository.save(Mockito.any(TrainingSchedule.class))).thenReturn(trainingSchedule);
        Long id = business.postTrainingSchedule(trainingSchedule);
        Assert.assertEquals(trainingSchedule.getId(), id);
    }


    @Test
    public void getTrainingSchedulesReturningOne(){
        TrainingSchedule trainingSchedule = createTrainingSchedule();
        Mockito.when(repository.findAll()).thenReturn(Collections.singletonList(trainingSchedule));
        TrainingSchedule trainingSchedule2 = business.findAllTrainingSchedules().iterator().next();
        Assert.assertEquals(trainingSchedule.getDate(), trainingSchedule2.getDate());
        Assert.assertEquals(trainingSchedule.getDescription(), trainingSchedule2.getDescription());
        Assert.assertEquals(trainingSchedule.getLink(), trainingSchedule2.getLink());
        Assert.assertEquals(trainingSchedule.getId(), trainingSchedule2.getId());
        Assert.assertEquals(trainingSchedule.getAthletes().size(), trainingSchedule2.getAthletes().size());
    }

    @Test
    public void getTrainingSchedulesReturningNone(){
        Mockito.when(repository.findAll()).thenReturn(Collections.emptyList());
        Assert.assertFalse(business.findAllTrainingSchedules().iterator().hasNext());
    }

    @Test
    public void getExistingTrainingScheduleById(){
        TrainingSchedule trainingSchedule = createTrainingSchedule();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(trainingSchedule));
        TrainingSchedule trainingSchedule2 = business.findTrainingScheduleById(1L);
        Assert.assertEquals(trainingSchedule.getDate(), trainingSchedule2.getDate());
        Assert.assertEquals(trainingSchedule.getDescription(), trainingSchedule2.getDescription());
        Assert.assertEquals(trainingSchedule.getLink(), trainingSchedule2.getLink());
        Assert.assertEquals(trainingSchedule.getId(), trainingSchedule2.getId());
        Assert.assertEquals(trainingSchedule.getAthletes().size(), trainingSchedule2.getAthletes().size());
    }

    @Test(expected = ResourceNotFoundException.class)
    public void getNotExistingTrainingScheduleById(){
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.findTrainingScheduleById(1L);
    }




    /*
    TODO: fix Mockito.when()
    @Test(expected = ResourceNotFoundException.class)
    public void getDeleteNotExistingTrainingSchedule(){
        Mockito.when(repository.delete(Mockito.any(Profile.class)));
        business.findProfileByid(1L);
    }
    */
    /*
    TODO: fix Mockito.when()
    @Test(expected = ResourceNotFoundException.class)
    public void getDeleteNotExistingTrainingScheduleById(){
        Mockito.when(repository.deleteById(Mockito.any(Long.class)));
        business.findProfileByid(1L);
    }
    */
    @Test(expected = ResourceNotFoundException.class)
    public void updateNotExistingTrainingSchedule(){
        TrainingSchedule trainingSchedule = createTrainingSchedule();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.updateTrainingSchedule(trainingSchedule);
    }

    @Test()
    public void updateExistingTrainingSchedule(){
        TrainingSchedule trainingSchedule = createTrainingSchedule();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(trainingSchedule));
        Mockito.when(repository.save(trainingSchedule)).thenReturn(trainingSchedule);
        Long id = business.updateTrainingSchedule(trainingSchedule);
        Assert.assertEquals(trainingSchedule.getId(), id);
    }
    
    private TrainingSchedule createTrainingSchedule() {
        TrainingSchedule trainingSchedule = new TrainingSchedule();
        trainingSchedule.setAthletes(Collections.emptyList());
        trainingSchedule.setDate(Date.from(Instant.now()));
        trainingSchedule.setId(1L);
        trainingSchedule.setDescription("Test description");
        trainingSchedule.setLink("Test Link");
        return trainingSchedule;
    }
}
