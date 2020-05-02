package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.ProfileRepository;

@Component
public class ProfileBusiness {
    @Autowired
    ProfileRepository profileRepository;

    public Iterable<Profile> getProfiles(){
        return profileRepository.findAll();
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
}
