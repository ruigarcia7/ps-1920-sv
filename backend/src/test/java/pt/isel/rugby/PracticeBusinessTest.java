package pt.isel.rugby;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import pt.isel.rugby.business.PracticeBusiness;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.AthletePractice;
import pt.isel.rugby.model.Practice;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.PracticeRepository;

import java.sql.Date;
import java.time.Instant;
import java.util.Arrays;
import java.util.Collections;
import java.util.Optional;

public class PracticeBusinessTest {
    @InjectMocks
    private PracticeBusiness business;

    @Mock
    PracticeRepository repository;

    @Before
    public void setup(){
        business = new PracticeBusiness();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void postPracticeTest(){
        Practice practice = createPractice();
        Mockito.when(repository.save(Mockito.any(Practice.class))).thenReturn(practice);
        Long id = business.postPractice(practice);
        Assert.assertEquals(practice.getId(), id);
    }

    @Test
    public void getPracticesReturningOne(){
        Practice practice = createPractice();
        Mockito.when(repository.findAll()).thenReturn(Collections.singletonList(practice));
        Practice practice2 = business.findAllPractices().iterator().next();
        Assert.assertEquals(practice.getComment(), practice2.getComment());
        Assert.assertEquals(practice.getLocal(), practice2.getLocal());
        Assert.assertEquals(practice.getDate(), practice2.getDate());
        Assert.assertEquals(practice.getAthletePractices().size(), practice2.getAthletePractices().size());
    }

    @Test
    public void getPracticesReturningNone(){
        Mockito.when(repository.findAll()).thenReturn(Collections.emptyList());
        Assert.assertFalse(business.findAllPractices().iterator().hasNext());
    }

    @Test
    public void getExistingPracticeById(){
        Practice practice = createPractice();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(practice));
        Practice practice2 = business.findPracticeById(1L);
        Assert.assertEquals(practice.getComment(), practice2.getComment());
        Assert.assertEquals(practice.getLocal(), practice2.getLocal());
        Assert.assertEquals(practice.getDate(), practice2.getDate());
        Assert.assertEquals(practice.getAthletePractices().size(), practice2.getAthletePractices().size());

    }

    @Test(expected = ResourceNotFoundException.class)
    public void getNotExistingPracticeById(){
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.findPracticeById(1L);
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
    public void updateNotExistingPractice(){
        Practice practice = createPractice();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.updatePractice(practice);
    }
    @Test()
    public void updateExistingPractice(){
        Practice practice = createPractice();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(practice));
        Mockito.when(repository.save(Mockito.any(Practice.class))).thenReturn(practice);
        Long id = business.updatePractice(practice);
        Assert.assertEquals(practice.getId(), id);
    }

    private Practice createPractice() {
        Profile profile = new Profile();
        profile.setEvents(Collections.emptyList());

        Athlete athlete = new Athlete();
        athlete.setProfile(profile);

        AthletePractice athletePractice = new AthletePractice();
        athletePractice.setAthlete(athlete);

        Practice practice = new Practice();
        practice.setAthletePractices(Arrays.asList(athletePractice));
        practice.setComment("Test comment");
        practice.setDate(Date.from(Instant.now()));
        practice.setId(1L);
        practice.setLocal("Test local");
        return practice;
    }
}
