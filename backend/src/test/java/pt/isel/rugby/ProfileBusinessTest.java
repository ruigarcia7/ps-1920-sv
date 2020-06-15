package pt.isel.rugby;


import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import pt.isel.rugby.business.ProfileBusiness;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Event;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.ProfileRepository;

import java.sql.Date;
import java.time.Instant;
import java.util.Collections;
import java.util.Optional;

public class ProfileBusinessTest {

    @InjectMocks
    private ProfileBusiness business;

    @Mock
    ProfileRepository repository;

    @Before
    public void setup(){
        business = new ProfileBusiness();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void postProfileTest(){
        Profile profile = createProfile();
        Mockito.when(repository.save(Mockito.any(Profile.class))).thenReturn(profile);
        Long id = business.postProfile(profile);
        Assert.assertEquals(profile.getId(), id);
    }

    @Test
    public void getProfilesReturningOne(){
        Profile profile = createProfile();
        profile.setEvents(Collections.singletonList(new Event()));
        Mockito.when(repository.findAll()).thenReturn(Collections.singletonList(profile));
        Profile profile2 = business.getProfiles().iterator().next();
        Assert.assertEquals(profile.getId(), profile2.getId());
        Assert.assertEquals(profile.getAddress(), profile2.getAddress());
        Assert.assertEquals(profile.getBirth(), profile2.getBirth());
        Assert.assertEquals(profile.getMail(), profile2.getMail());
        Assert.assertEquals(profile.getName(), profile2.getName());
        Assert.assertEquals(profile.getPhone(), profile2.getPhone());
        Assert.assertEquals(profile.getPhoto(), profile2.getPhoto());
        Assert.assertEquals(profile.getEvents().size(), profile2.getEvents().size());
    }

    @Test
    public void getProfilesReturningNone(){
        Mockito.when(repository.findAll()).thenReturn(Collections.emptyList());
        Assert.assertFalse(repository.findAll().iterator().hasNext());
    }



    @Test
    public void getExistingProfileById(){
        Profile profile = createProfile();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(profile));
        Profile profile2 = business.findProfileByid(1L);
        Assert.assertEquals(profile.getId(), profile2.getId());
        Assert.assertEquals(profile.getAddress(), profile2.getAddress());
        Assert.assertEquals(profile.getBirth(), profile2.getBirth());
        Assert.assertEquals(profile.getMail(), profile2.getMail());
        Assert.assertEquals(profile.getName(), profile2.getName());
        Assert.assertEquals(profile.getPhone(), profile2.getPhone());
        Assert.assertEquals(profile.getPhoto(), profile2.getPhoto());
        Assert.assertEquals(profile.getEvents().size(), profile2.getEvents().size());
    }

    @Test(expected = ResourceNotFoundException.class)
    public void getNotExistingProfileById(){
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.findProfileByid(1L);
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
        Profile profile = createProfile();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.updateProfile(profile);
    }
    @Test()
    public void updateExistingProfile(){
        Profile profile = createProfile();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(profile));
        Mockito.when(repository.save(profile)).thenReturn(profile);
        Long id = business.updateProfile(profile);
        Assert.assertEquals(profile.getId(), id);
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
