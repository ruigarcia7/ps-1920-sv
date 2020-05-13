package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.ProfileBusiness;
import pt.isel.rugby.model.Profile;

@RestController
@RequestMapping("/profile")
public class ProfileController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    ProfileBusiness profileBusiness;

    @GetMapping("/all")
    public Iterable<Profile> findAllProfiles(){
        logger.info("On method GET profile/all");
        return profileBusiness.getProfiles();
    }

    @GetMapping("/findById/{id}")
    public Profile findProfileById(@PathVariable Long id){
        logger.info("On method GET profile/findById/{id}");
        return profileBusiness.findProfileByid(id);
    }

    @PostMapping("/post")
    public Long postProfile(@RequestBody Profile profile){
        logger.info("On method POST profile/post");
        return profileBusiness.postProfile(profile);
    }

    @PutMapping("/update")
    public Long putProfile(@RequestBody Profile profile){
        logger.info("On method GET profile/all");
        return profileBusiness.updateProfile(profile);
    }

    @DeleteMapping("/delete")
    public void deleteAthlete(@RequestBody Profile profile){
        logger.info("On method DELETE profile/delete");
        profileBusiness.deleteProfile(profile);
    }

    @DeleteMapping("/delete/id")
    public void deleteAthlete(@PathVariable Long id){
        logger.info("On method DELETE profile/delete/{id} with id "+ id);
        profileBusiness.deleteProfileByid(id);
    }
}
