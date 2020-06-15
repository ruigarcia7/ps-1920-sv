package pt.isel.rugby;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import pt.isel.rugby.business.AthleteBusiness;
import pt.isel.rugby.business.StaffBusiness;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.model.Staff;
import pt.isel.rugby.model.StaffType;
import pt.isel.rugby.repository.AthleteRepository;
import pt.isel.rugby.repository.ProfileRepository;
import pt.isel.rugby.repository.StaffRepository;

import java.sql.Date;
import java.time.Instant;
import java.util.Collections;
import java.util.Optional;

public class StaffBusinessTest {

    @InjectMocks
    private StaffBusiness business;

    @Mock
    StaffRepository repository;

    @Mock
    ProfileRepository profileRepository;

    @Before
    public void setup(){
        business = new StaffBusiness();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void postStaffTest(){
        Staff staff = createStaff();
        Mockito.when(repository.save(Mockito.any(Staff.class))).thenReturn(staff);
        Mockito.when(profileRepository.save(Mockito.any(Profile.class))).thenReturn(createProfile());
        Long id = business.postStaff(staff);
        Assert.assertEquals(staff.getId(), id);
    }


    @Test
    public void getStaffsReturningOne(){
        Staff staff = createStaff();
        Mockito.when(repository.findAll()).thenReturn(Collections.singletonList(staff));
        Staff staff2 = business.findAllStaff().iterator().next();
        Assert.assertEquals(staff.getId(), staff2.getId());
        Assert.assertEquals(staff.getStaffNumber(), staff2.getStaffNumber());
        Assert.assertEquals(staff.getStaffType(), staff2.getStaffType());
        Assert.assertEquals(staff.getProfile(), staff2.getProfile());
    }

    @Test
    public void getStaffsReturningNone(){
        Mockito.when(repository.findAll()).thenReturn(Collections.emptyList());
        Assert.assertFalse(business.findAllStaff().iterator().hasNext());
    }

    @Test
    public void getExistingStaffById(){
        Staff staff = createStaff();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(staff));
        Staff staff2 = business.findStaffById(1L);
        Assert.assertEquals(staff.getId(), staff2.getId());
        Assert.assertEquals(staff.getStaffNumber(), staff2.getStaffNumber());
        Assert.assertEquals(staff.getStaffType(), staff2.getStaffType());
        Assert.assertEquals(staff.getProfile(), staff2.getProfile());
    }

    @Test(expected = ResourceNotFoundException.class)
    public void getNotExistingStaffById(){
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.findStaffById(1L);
    }


    /*
    TODO: fix Mockito.when()
    @Test(expected = ResourceNotFoundException.class)
    public void getDeleteNotExistingStaff(){
        Mockito.when(repository.delete(Mockito.any(Profile.class)));
        business.findProfileByid(1L);
    }
    */

    /*
    TODO: fix Mockito.when()
    @Test(expected = ResourceNotFoundException.class)
    public void getDeleteNotExistingStaffById(){
        Mockito.when(repository.deleteById(Mockito.any(Long.class)));
        business.findProfileByid(1L);
    }
    */
    @Test(expected = ResourceNotFoundException.class)
    public void updateNotExistingStaff(){
        Staff staff = createStaff();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        Mockito.when(profileRepository.findById(Mockito.any(Long.class))).thenReturn(Optional.empty());
        business.updateStaff(staff);
    }

    @Test()
    public void updateExistingStaff(){
        Staff staff = createStaff();
        Mockito.when(repository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(staff));
        Mockito.when(profileRepository.findById(Mockito.any(Long.class))).thenReturn(Optional.of(createProfile()));
        Mockito.when(repository.save(staff)).thenReturn(staff);
        Long id = business.updateStaff(staff);
        Assert.assertEquals(staff.getId(), id);
    }

    private Staff createStaff() {
        Staff staff = new Staff();
        staff.setId(1L);
        staff.setStaffNumber("1");
        staff.setStaffType(new StaffType());
        staff.setProfile(createProfile());
        return staff;
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
