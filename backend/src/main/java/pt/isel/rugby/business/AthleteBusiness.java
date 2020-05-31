package pt.isel.rugby.business;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.AthleteRepository;
import pt.isel.rugby.repository.ProfileRepository;

import java.util.Collections;

/**
 * Reprents the behaviour of the Athlete
 *
 */
@Component
public class AthleteBusiness {

    @Autowired
    AthleteRepository athleteRepository;

    @Autowired
    ProfileRepository profileRepository;

    /**
     * Finds all Athletes
     *
     *
     */
    public Iterable<Athlete> findAllAthletes(){
        Iterable<Athlete> athletes = athleteRepository.findAll();
        athletes.forEach(athlete -> {
            athlete.getAthletePractices().forEach(athletePractice -> {
                athletePractice.setAthlete(null);
                athletePractice.setPractice(null);
            });
            athlete.getAthleteGameStats().forEach(athleteGameStats -> {
                athleteGameStats.setAthlete(null);
                athleteGameStats.setGame(null);
                athleteGameStats.setStats(null);
            });
            athlete.getActiveRosters().forEach(activeRoster -> {
                activeRoster.setAthlete(null);
                activeRoster.setGame(null);
            });
            athlete.getGames().forEach(game -> {
                game.setAthletes(Collections.emptyList());
            });
            athlete.getProfile().getEvents().forEach(event -> {
                event.setProfiles(Collections.emptyList());
            });
            athlete.setTrainingSchedules(Collections.emptyList());
            athlete.setGames(Collections.emptyList());
        });

        return athletes;
    }


    public Long postAthlete(Athlete athlete) {
        Profile profile = athlete.getProfile();
        profile.setId(null);
        profile = profileRepository.save(profile);
        athlete.setProfile(profile);
        athlete.getProfile().setId(profile.getId());
        return athleteRepository.save(athlete).getId();
    }

    public Athlete findAthleteById(Long id) {
        return athleteRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Athlete", "Id", id));
    }

    public Long updateAthlete(Athlete athlete) {
        profileRepository.findById(athlete.getProfile().getId()).orElseThrow(() -> new ResourceNotFoundException("Profile", "Id", athlete.getId()));
        athleteRepository.findById(athlete.getId()).orElseThrow(() -> new ResourceNotFoundException("Athlete", "Id", athlete.getId()));
        athleteRepository.save(athlete);
        profileRepository.save(athlete.getProfile());
        return athleteRepository.save(athlete).getId();

    }

    public void deleteAthlete(Athlete athlete) {
        profileRepository.findById(athlete.getProfile().getId()).orElseThrow(() -> new ResourceNotFoundException("Profile", "Id", athlete.getId()));
        athleteRepository.findById(athlete.getId()).orElseThrow(() -> new ResourceNotFoundException("Athlete", "Id", athlete.getId()));
        profileRepository.delete(athlete.getProfile());
        athleteRepository.delete(athlete);
    }

    public void deleteAthleteById(Long id) {
        Athlete athlete = athleteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Athlete", "Id", id));
        profileRepository.findById(athlete.getId()).orElseThrow(() -> new ResourceNotFoundException("Athlete", "Id", id));
        athleteRepository.delete(athlete);
        profileRepository.deleteById(athlete.getId());
    }
}
