package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Tournament;
import pt.isel.rugby.repository.TournamentRepository;

@Component
public class TournamentBusiness {

    @Autowired
    TournamentRepository tournamentRepository;

    public Iterable<Tournament> findAllTournaments(){ return tournamentRepository.findAll();}

    public Long postTournament(Tournament tournament){
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
}
