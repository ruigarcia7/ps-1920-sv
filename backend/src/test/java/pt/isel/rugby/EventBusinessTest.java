package pt.isel.rugby;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import pt.isel.rugby.business.EventBusiness;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Event;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.EventRepository;
import pt.isel.rugby.repository.ProfileRepository;

import java.sql.Date;
import java.time.Instant;
import java.util.Collections;
import java.util.Optional;

public class EventBusinessTest {

    @InjectMocks
    private EventBusiness business;

    @Mock
    EventRepository repository;

    @Mock
    ProfileRepository profileRepository;

    @Before
    public void setup(){
        business = new EventBusiness();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void postProfileTest(){
        Event event = createEvent();
        Mockito.when(repository.save(Mockito.any(Event.class))).thenReturn(event);
        Mockito.when(profileRepository.save(Mockito.any(Profile.class))).thenReturn(createProfile());
        Long id = business.postEvent(event);
        Assert.assertEquals(event.getId(), id);
    }


    @Test
    public void getProfilesReturningOne(){
        Event event = createEvent();
        Mockito.when(repository.findAll()).thenReturn(Collections.singletonList(event));
        Event event2 = business.findAllEvents().iterator().next();
        Assert.assertEquals(event.getDate(), event2.getDate());
        Assert.assertEquals(event.getDescription(), event2.getDescription());
        Assert.assertEquals(event.getLocal(), event2.getLocal());
        Assert.assertEquals(event.getName(), event2.getName());
        Assert.assertEquals(event.getProfiles().size(), event2.getProfiles().size());
    }

    @Test
    public void getProfilesReturningNone(){
        Mockito.when(repository.findAll()).thenReturn(Collections.emptyList());
        Assert.assertFalse(repository.findAll().iterator().hasNext());
    }



    @Test
    public void getExistingProfileById(){
        Event event = createEvent();
        Athlete athlete = createAthlete();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(event));
        Event event2 = business.findEventById(1L);
        Assert.assertEquals(event.getProfiles().size(), event2.getProfiles().size());
        Assert.assertEquals(event.getName(), event2.getName());
        Assert.assertEquals(event.getLocal(), event2.getLocal());
        Assert.assertEquals(event.getDate(), event2.getDate());
        Assert.assertEquals(event.getDescription(), event2.getDescription());
        Assert.assertEquals(event.getId(), event2.getId());
    }

    @Test(expected = ResourceNotFoundException.class)
    public void getNotExistingProfileById(){
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.findEventById(1L);
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
        Event event = createEvent();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        Mockito.when(profileRepository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.updateEvent(event);
    }

    @Test()
    public void updateExistingProfile(){
        Event event = createEvent();
        Athlete athlete =  createAthlete();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(event));
        Mockito.when(profileRepository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(createProfile()));
        Mockito.when(repository.save(event)).thenReturn(event);
        Long id = business.updateEvent(event);
        Assert.assertEquals(athlete.getId(), id);
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
