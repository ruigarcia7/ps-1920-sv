package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;

import pt.isel.rugby.model.Stats;
import pt.isel.rugby.repository.StatsRepository;

@Component
public class StatsBusiness {
    @Autowired
    StatsRepository statsRepository;

    public Iterable<Stats> findAllStats(){return statsRepository.findAll();}

    public Long postStats(Stats stats) {
        return statsRepository.save(stats).getId();
    }

    public Stats findStatsById(Long id) {
        return statsRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Stats", "Id", id));
    }

    public Long updateStats(Stats stats) {
        statsRepository.findById(stats.getId()).orElseThrow(() -> new ResourceNotFoundException("Stats", "Id", stats.getId()));
        return statsRepository.save(stats).getId();

    }

    public void deleteAthlete(Stats stats) {
        statsRepository.findById(stats.getId()).orElseThrow(() -> new ResourceNotFoundException("Athlete", "Id", stats.getId()));
        statsRepository.delete(stats);
    }
}
