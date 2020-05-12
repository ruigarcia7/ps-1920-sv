package pt.isel.rugby.business;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.repository.AthleteRepository;
import pt.isel.rugby.repository.ProfileRepository;

@Component
public class AthleteBusiness {

    @Autowired
    AthleteRepository athleteRepository;

    @Autowired
    ProfileRepository profileRepository;

    public Iterable<Athlete> findAllAthletes(){
        return athleteRepository.findAll();
    }


    public Long postAthlete(Athlete athlete) {
        athlete.getProfile().setId(null);
        profileRepository.save(athlete.getProfile());
        return athleteRepository.save(athlete).getId();
    }

    public Athlete findAthleteById(Long id) {
        return athleteRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Athlete", "Id", id));
    }

    public Long updateAthlete(Athlete athlete) {
        athleteRepository.findById(athlete.getId()).orElseThrow(() -> new ResourceNotFoundException("Athlete", "Id", athlete.getId()));
        athleteRepository.save(athlete);
        profileRepository.save(athlete.getProfile());
        return athleteRepository.save(athlete).getId();

    }

    public void deleteAthlete(Athlete athlete) {
        athleteRepository.findById(athlete.getId()).orElseThrow(() -> new ResourceNotFoundException("Athlete", "Id", athlete.getId()));
        athleteRepository.delete(athlete);
    }

    public void deleteAthleteById(Long id) {
         Athlete athlete = athleteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Athlete", "Id", id));
        athleteRepository.delete(athlete);
    }
}
