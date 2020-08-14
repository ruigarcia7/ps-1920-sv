package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Injury;
import pt.isel.rugby.repository.InjuryRepository;

import java.util.Collections;
import java.util.List;

@Component
public class InjuryBusiness {

    @Autowired
    InjuryRepository injuryRepository;


    public Iterable<Injury> findAllInjuries() {
        Iterable<Injury> injuries = injuryRepository.findAll();
        return injuries;
    }

    public Long postInjury (Injury injury){
        injury.setId(null);
        return injuryRepository.save(injury).getId();
    }

    public Injury findInjuryById(Long id){
        Injury injury = injuryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Injury", "Id", id));
        return injury;
    }


    public Long updateInjury(Injury injury){
        injuryRepository.findById(injury.getId()).orElseThrow(() -> new ResourceNotFoundException("Injury", "Id", injury.getId()));
        return injuryRepository.save(injury).getId();
    }

    public void deleteInjury(Injury injury){
        injuryRepository.findById(injury.getId()).orElseThrow(() -> new ResourceNotFoundException("Injury", "Id", injury.getId()));
        injuryRepository.delete(injury);
    }

    public void deleteInjuryById(Long id) {
        Injury injury = injuryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Injury", "Id", id));
        injuryRepository.delete(injury);
    }
/*
    private void setGameInnerFieldsNull(Game game) {
        game.getAthletes().forEach(athlete -> {
            athlete.setGames(Collections.emptyList());
            athlete.setTrainingSchedules(Collections.emptyList());
            athlete.setAthletePractices(Collections.emptyList());
            athlete.getProfile().setEvents(Collections.emptyList());
        });
        game.getAthleteGameStats().forEach(athleteGameStats ->{
            athleteGameStats.setGame(null);
            athleteGameStats.setStats(null);
            athleteGameStats.setAthlete(null);
        });

        game.setActiveRoster(Collections.emptyList());
        game.setTournament(null);
    }*/
}

