package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.ProfileRepository;

import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Collections;

@Component
public class ProfileBusiness {
    @Autowired
    ProfileRepository profileRepository;

    public Iterable<Profile> getProfiles(){
        Iterable<Profile> profiles = profileRepository.findAll();
        profiles.forEach(profile -> {
            profile.getEvents().forEach(event -> event.setProfiles(Collections.emptyList()));
        });
        return profiles;
    }

    public Long postProfile(Profile profile){
        return profileRepository.save(profile).getId();
    }

    public Profile findProfileByid(Long id){
        return profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Profile", "Id", id));
    }

    public Long updateProfile(Profile profile){
        profileRepository.findById(profile.getId()).orElseThrow(()-> new ResourceNotFoundException("Profile", "Id", profile.getId()));
        return profileRepository.save(profile).getId();
    }

    public void deleteProfile(Profile profile){
        profileRepository.findById(profile.getId()).orElseThrow(()-> new ResourceNotFoundException("Profile", "Id", profile.getId()));
        profileRepository.delete(profile);
    }

    public void deleteProfileByid(Long id) {
        profileRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Profile", "Id", id));
        profileRepository.deleteById(id);
    }

    public String uploadImage(Profile p) {
        byte[] data = Base64.getDecoder().decode(p.getFile().split(",")[1].getBytes(StandardCharsets.UTF_8));
        Path destination = Paths.get("../frontend2/Rugby/src/assets/img/profile",p.getMail()+".jpg");
        try {
            if(!Files.exists(destination)){
                Files.createFile(destination);
            }
            Files.write(destination,data);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return destination.toString().split("src")[1];
    }
}
