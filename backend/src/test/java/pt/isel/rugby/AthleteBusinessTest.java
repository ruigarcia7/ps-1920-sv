package pt.isel.rugby;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import pt.isel.rugby.business.AthleteBusiness;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.AthleteRepository;
import pt.isel.rugby.repository.ProfileRepository;

import java.sql.Date;
import java.time.Instant;
import java.util.Collections;
import java.util.Optional;

public class AthleteBusinessTest {

    @InjectMocks
    private AthleteBusiness business;

    @Mock
    AthleteRepository repository;

    @Mock
    ProfileRepository profileRepository;

    @Before
    public void setup(){
        business = new AthleteBusiness();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void postProfileTest(){
        Athlete athlete = createAthlete();
        Mockito.when(repository.save(Mockito.any(Athlete.class))).thenReturn(athlete);
        Mockito.when(profileRepository.save(Mockito.any(Profile.class))).thenReturn(createProfile());
        Long id = business.postAthlete(athlete);
        Assert.assertEquals(athlete.getId(), id);
    }



    @Test
    public void getProfilesReturningOne(){
        Athlete athlete = createAthlete();
        Mockito.when(repository.findAll()).thenReturn(Collections.singletonList(athlete));
        Athlete athlete2 = business.findAllAthletes().iterator().next();
        Assert.assertEquals(athlete.getTrainingSchedules().size(), athlete2.getTrainingSchedules().size());
        Assert.assertEquals(athlete.getAthleteGameStats().size(), athlete2.getAthleteGameStats().size());
        Assert.assertEquals(athlete.getAthletePractices().size(), athlete2.getAthletePractices().size());
        Assert.assertEquals(athlete.getActiveRosters().size(), athlete2.getActiveRosters().size());
        Assert.assertEquals(athlete.getGames().size(), athlete2.getGames().size());
        Assert.assertEquals(athlete.getId(), athlete2.getId());
        Assert.assertEquals(athlete.getAthleteNumber(), athlete2.getAthleteNumber());
        Assert.assertEquals(athlete.getComment(), athlete2.getComment());
        Assert.assertEquals(athlete.getHeight(), athlete2.getHeight());
        Assert.assertEquals(athlete.getWeight(), athlete2.getWeight());
        Assert.assertEquals(athlete.getPositions(), athlete2.getPositions());
    }

    @Test
    public void getProfilesReturningNone(){
        Mockito.when(repository.findAll()).thenReturn(Collections.emptyList());
        Assert.assertFalse(repository.findAll().iterator().hasNext());
    }



    @Test
    public void getExistingProfileById(){
        Athlete athlete = createAthlete();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(athlete));
        Athlete athlete2 = business.findAthleteById(1L);
        Assert.assertEquals(athlete.getTrainingSchedules().size(), athlete2.getTrainingSchedules().size());
        Assert.assertEquals(athlete.getAthleteGameStats().size(), athlete2.getAthleteGameStats().size());
        Assert.assertEquals(athlete.getAthletePractices().size(), athlete2.getAthletePractices().size());
        Assert.assertEquals(athlete.getActiveRosters().size(), athlete2.getActiveRosters().size());
        Assert.assertEquals(athlete.getGames().size(), athlete2.getGames().size());
        Assert.assertEquals(athlete.getId(), athlete2.getId());
        Assert.assertEquals(athlete.getAthleteNumber(), athlete2.getAthleteNumber());
        Assert.assertEquals(athlete.getComment(), athlete2.getComment());
        Assert.assertEquals(athlete.getHeight(), athlete2.getHeight());
        Assert.assertEquals(athlete.getWeight(), athlete2.getWeight());
        Assert.assertEquals(athlete.getPositions(), athlete2.getPositions());

    }

    @Test(expected = ResourceNotFoundException.class)
    public void getNotExistingProfileById(){
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.findAthleteById(1L);
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
    public void updateNotExistingProfile(){
        Athlete athlete = createAthlete();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        Mockito.when(profileRepository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.updateAthlete(athlete);
    }
    @Test()
    public void updateExistingProfile(){
        Athlete athlete =  createAthlete();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(athlete));
        Mockito.when(profileRepository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(createProfile()));
        Mockito.when(repository.save(athlete)).thenReturn(athlete);
        Long id = business.updateAthlete(athlete);
        Assert.assertEquals(athlete.getId(), id);
    }

    private Athlete createAthlete() {
        Athlete athlete = new Athlete();
        athlete.setTrainingSchedules(Collections.emptyList());
        athlete.setAthleteGameStats(Collections.emptyList());
        athlete.setAthletePractices(Collections.emptyList());
        athlete.setGames(Collections.emptyList());
        athlete.setActiveRosters(Collections.emptyList());
        athlete.setProfile(createProfile());
        athlete.setId(1L);
        athlete.setAthleteNumber("1");
        athlete.setComment("Comment");
        athlete.setHeight("180");
        athlete.setWeight("800");
        athlete.setPositions("Some Positions");
        return athlete;
    }

    private Profile createProfile() {
        Profile p = new Profile();
        p.setId(1L);
        p.setEvents(Collections.emptyList());
        p.setAthlete(true);
        p.setAddress("Test address");
        p.setName("Test Name");
        p.setBirth(Date.from(Instant.now()));
        p.setMail("Fake mail");
        p.setPhone("999999999");
        p.setPhoto("");
        return p;
    }

}
