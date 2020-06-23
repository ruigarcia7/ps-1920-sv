package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.AthleteGameStats;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.AthleteGameStatsRepository;
import pt.isel.rugby.repository.AthleteRepository;
import pt.isel.rugby.repository.GameRepository;
import pt.isel.rugby.repository.StatsRepository;

import java.util.Collections;

@Component
public class AthleteGameStatsBusiness {
    @Autowired
    AthleteGameStatsRepository athleteGameStatsRepository;

    @Autowired
    GameRepository gameRepository;

    @Autowired
    AthleteRepository athleteRepository;

    @Autowired
    StatsRepository statsRepository;

    public Iterable<AthleteGameStats> findAll(){
        Iterable<AthleteGameStats> all = athleteGameStatsRepository.findAll();
        return all;
    }


    public Long postAthleteGameStats(AthleteGameStats athleteGameStats) {
        gameRepository.save(athleteGameStats.getGame());
        statsRepository.save(athleteGameStats.getStats());
        athleteRepository.save(athleteGameStats.getAthlete());
        return athleteGameStatsRepository.save(athleteGameStats).getId();
    }

    public AthleteGameStats findAthleteGameStats(Long id) {
        return athleteGameStatsRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("AthleteGameStats", "id", id ));
    }

    public Long updateAthleteGameStats(AthleteGameStats athleteGameStats) {
        athleteGameStatsRepository.findById(athleteGameStats.getId()).orElseThrow(() -> new ResourceNotFoundException("AthleteGameStats", "Id", athleteGameStats.getId()));
        statsRepository.save(athleteGameStats.getStats());
        return athleteGameStatsRepository.save(athleteGameStats).getId();
    }

    public void deleteAthleteGameStats(AthleteGameStats athleteGameStats) {
        athleteGameStatsRepository.findById(athleteGameStats.getId()).orElseThrow(() -> new ResourceNotFoundException("AthleteGameStats", "Id", athleteGameStats.getId()));
        athleteGameStatsRepository.delete(athleteGameStats);
        statsRepository.delete(athleteGameStats.getStats());
    }

    public AthleteGameStats findAthleteGameStatsById(Long id) {
        return athleteGameStatsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AthleteGameStats", "Id", id));
    }

    public void deleteAthleteGameStatsById(Long id) {
        AthleteGameStats athleteGameStats = athleteGameStatsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AthleteGameStats", "Id", id));
        statsRepository.delete(athleteGameStats.getStats());
        athleteGameStatsRepository.deleteById(id);
    }

    public AthleteGameStats[] findAthleteGameStatsByGameId(Long id) {
        AthleteGameStats[] ags = athleteGameStatsRepository.findAllByGameId(id);
        for (AthleteGameStats a : ags) {
            a.getGame().setAthleteGameStats(Collections.emptyList());
            a.getGame().setAthletes(Collections.emptyList());
            a.getGame().setActiveRoster(Collections.emptyList());
            a.getGame().setTournament(null);
            a.getStats().setAthleteGameStats(Collections.emptyList());
            a.getAthlete().getProfile().setEvents(Collections.emptyList());
            a.getAthlete().getProfile().setEvents(Collections.emptyList());
            a.getAthlete().setGames(Collections.emptyList());
            a.getAthlete().setAthletePractices(Collections.emptyList());
            a.getAthlete().setAthleteGameStats(Collections.emptyList());
            a.getAthlete().setTrainingSchedules(Collections.emptyList());

        }

        return ags;
    }

    public AthleteGameStats[] findAthleteGameStatsByAthleteId(Long id) {

        AthleteGameStats[] allByAthleteId = athleteGameStatsRepository.findAllByAthleteId(id);
        for (AthleteGameStats athleteGameStats: allByAthleteId) {
            athleteGameStats.getAthlete().getProfile().setEvents(Collections.emptyList());
            athleteGameStats.getAthlete().setAthleteGameStats(Collections.emptyList());
            athleteGameStats.getAthlete().setGames(Collections.emptyList());
            athleteGameStats.getStats().setAthleteGameStats(Collections.emptyList());
            athleteGameStats.getGame().setTournament(null);
            athleteGameStats.getGame().setAthleteGameStats(Collections.emptyList());
            athleteGameStats.getGame().setAthletes(Collections.emptyList());
        }
        return allByAthleteId;
    }
}
