package pt.isel.rugby.business;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.AthleteRepository;
import pt.isel.rugby.repository.ProfileRepository;
import pt.isel.rugby.utils.AthleteAttendanceResponse;

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

    @Autowired
    ProfileBusiness profileBusiness;

    @Autowired
    GameBusiness gameBusiness;

    @Autowired
    EventBusiness eventBusiness;

    @Autowired
    PracticeBusiness practiceBusiness;

    @Autowired
    TournamentBusiness tournamentBusiness;

    /**
     * Finds all Athletes
     *
     *
     */

    public Iterable<Athlete> findAllAthletes(){
        Iterable<Athlete> athletes = athleteRepository.findAll();
        athletes.forEach(this::setInnerObjectsToNull);

        return athletes;
    }


    public AthleteAttendanceResponse getAttendanceInfo(Long id) {
        Athlete a = findAthleteById(id);
        AthleteAttendanceResponse response = new AthleteAttendanceResponse();
        response.setGames(gameBusiness.findAllByAthleteId(a));
        response.setEvents(eventBusiness.findAllByProfile(a.getProfile()));
        response.setPractices(practiceBusiness.findAllByAthlete(a));
        response.setTournaments(tournamentBusiness.findAllByAthlete(a));
        response.setAllGamesCount(gameBusiness.count());
        response.setAllEventsCount(eventBusiness.count());
        response.setAllPracticesCount(practiceBusiness.count());
        response.setAllTournamentsCount(tournamentBusiness.count());
        return response;
    }


    public Long postAthlete(Athlete athlete) {
        Profile profile = athlete.getProfile();
        profile.setId(null);
        String path = profileBusiness.uploadImage(profile);
        profile.setPhoto(path);
        profile = profileRepository.save(profile);
        athlete.setId(profile.getId());
        return athleteRepository.save(athlete).getId();
    }

    public Athlete findAthleteById(Long id) {
        Athlete athlete = athleteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Athlete", "Id", id));
        setInnerObjectsToNull(athlete);
        return athlete;
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
        Profile profile = profileRepository.findById(athlete.getProfile().getId()).orElseThrow(()-> new ResourceNotFoundException("Profile", "Id", athlete.getProfile().getId()));
        athleteRepository.findById(athlete.getId()).orElseThrow(()-> new ResourceNotFoundException("Athlete", "Id", athlete.getId()));
        athleteRepository.delete(athlete);
        profileRepository.deleteById(profile.getId());
    }

    private void setInnerObjectsToNull(Athlete athlete) {
        athlete.getAthletePractices().forEach(athletePractice -> {
            //athletePractice.setAthlete(null);
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
            //game.setAthletes(Collections.emptyList());
        });
        athlete.getProfile().getEvents().forEach(event -> {
            event.setProfiles(Collections.emptyList());
        });
        athlete.setTrainingSchedules(Collections.emptyList());
        athlete.setGames(Collections.emptyList());
    }
}
