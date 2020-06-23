package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.model.Tournament;
import pt.isel.rugby.repository.TournamentRepository;

import java.util.Collections;

@Component
public class TournamentBusiness {

    @Autowired
    TournamentRepository tournamentRepository;

    public Iterable<Tournament> findAllTournaments(){
        Iterable<Tournament> tournaments = tournamentRepository.findAll();
        tournaments.forEach(tournament -> {
            tournament.getGames().forEach(game -> {
                game.setActiveRoster(Collections.emptyList());
                game.setAthletes(Collections.emptyList());
                game.setAthleteGameStats(Collections.emptyList());
            });
        });

        return tournaments;}

    public Long postTournament(Tournament tournament){
        tournament.setId(null);
        return tournamentRepository.save(tournament).getId();
    }

    public Tournament findTournamentById(Long id){
        return tournamentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tournament", "Id", id));
    }

    public Long updateTournament (Tournament tournament){
        tournamentRepository.findById(tournament.getId()).orElseThrow(() -> new ResourceNotFoundException("Tournament", "Id", tournament.getId()));
        return tournamentRepository.save(tournament).getId();
    }

    public void deleteTournament (Tournament tournament){
        tournamentRepository.findById(tournament.getId()).orElseThrow(() -> new ResourceNotFoundException("Tournament", "Id", tournament.getId()));
        tournamentRepository.delete(tournament);
    }

    public void deleteTournamentById(Long id) {
        Tournament tournament = tournamentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tournament", "Id", id));
        tournamentRepository.findById(tournament.getId()).orElseThrow(()-> new ResourceNotFoundException("Tournament", "Id", tournament.getId()));
        tournamentRepository.delete(tournament);
    }
}
