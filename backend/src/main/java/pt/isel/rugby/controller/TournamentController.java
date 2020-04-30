package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.model.Tournament;
import pt.isel.rugby.repository.TournamentRepository;

@RestController()
@RequestMapping("/tournament")
public class TournamentController {
    @Autowired
    TournamentRepository tournamentRepository;

    @RequestMapping("/findAll")
    public String findAllTournaments(){
        System.out.println("findAllTournaments()");
        return tournamentRepository.findAll().toString();
    }

    @RequestMapping("/findById")
    public String findTournamentById(){
        System.out.println("findTournamentById()");
        return tournamentRepository.findAll().iterator().next().toString();
    }

    @PostMapping("/post")
    public String postTournament(){
        System.out.println("postTournament()");
        Tournament tournament = new Tournament();
        tournamentRepository.save(tournament);
        return tournamentRepository.findAll().toString();
    }

    @PutMapping("/update")
    public String putTournament(){
        System.out.println("updateTournament()");
        Tournament tournament = tournamentRepository.findAll().iterator().next();
        tournament.setClassification(tournament.getId().toString());
        tournamentRepository.save(tournament);
        return tournamentRepository.findAll().toString();
    }

    @DeleteMapping("/delete")
    public String deleteTournament(){
        System.out.println("deleteTournament()");
        return tournamentRepository.findAll().toString();
    }
}
