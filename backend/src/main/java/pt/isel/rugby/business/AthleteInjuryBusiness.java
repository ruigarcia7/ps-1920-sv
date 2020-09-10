package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.AthleteInjury;
import pt.isel.rugby.repository.AthleteInjuryRepository;
import pt.isel.rugby.repository.AthleteRepository;
import pt.isel.rugby.repository.InjuryRepository;

import java.util.*;

@Component
public class AthleteInjuryBusiness {
    @Autowired
    AthleteInjuryRepository athleteInjuryRepository;

    @Autowired
    AthleteRepository athleteRepository;

    @Autowired
    InjuryRepository injuryRepository;

    public Iterable<AthleteInjury> findAll(){
        Iterable<AthleteInjury> all = athleteInjuryRepository.findAll();
        return all;
    }


    public Long postAthleteInjury(AthleteInjury athleteInjury) {
        athleteRepository.save(athleteInjury.getAthlete());
        injuryRepository.save(athleteInjury.getInjury());
        return athleteInjuryRepository.save(athleteInjury).getId();
    }

    public AthleteInjury findAthleteInjury(Long id) {
        return athleteInjuryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("AthleteInjury", "id", id ));
    }

    public Long updateAthleteInjury(AthleteInjury athleteInjury) {
        athleteInjuryRepository.findById(athleteInjury.getId()).orElseThrow(() -> new ResourceNotFoundException("AthleteInjury", "Id", athleteInjury.getId()));
        return athleteInjuryRepository.save(athleteInjury).getId();
    }

    public void deleteAthleteInjury(AthleteInjury athleteInjury) {
        athleteInjuryRepository.findById(athleteInjury.getId()).orElseThrow(() -> new ResourceNotFoundException("AthleteInjury", "Id", athleteInjury.getId()));
        athleteInjuryRepository.delete(athleteInjury);
    }

    public AthleteInjury findAthleteInjuryById(Long id) {
        return athleteInjuryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AthleteInjury", "Id", id));
    }

    public void deleteAthleteInjuryById(Long id) {
        AthleteInjury athleteInjury = athleteInjuryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AthleteInjury", "Id", id));
        athleteInjuryRepository.deleteById(id);
    }


    public AthleteInjury[] findAthleteInjuryByAthleteId(Long id) {
        AthleteInjury[] allByAthleteId = athleteInjuryRepository.findAllByAthleteId(id);
        for (AthleteInjury athleteInjury: allByAthleteId) {
            athleteInjury.getAthlete().getProfile().setEvents(Collections.emptyList());
            athleteInjury.getAthlete().setAthleteGameStats(Collections.emptyList());
            athleteInjury.getAthlete().setGames(Collections.emptyList());
        }
        return allByAthleteId;
    }
}

