package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Opponent;
import pt.isel.rugby.repository.OpponentRepository;

@Component
public class OpponentBusiness {
    @Autowired
    OpponentRepository opponentRepository;

    public Iterable<Opponent> findAll(){
        return opponentRepository.findAll();
    }

    public Long postOpponent(Opponent opponent){
        return opponentRepository.save(opponent).getId();
    }

    public Opponent findOpponentById(Long id){
        return opponentRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Opponent", "Id", id));
    }

    public Long updateOpponent(Opponent opponent){
        opponentRepository.findById(opponent.getId()).orElseThrow(()-> new ResourceNotFoundException("Opponent", "Id", opponent.getId()));
        return opponentRepository.save(opponent).getId();
    }

    public void deleteOpponent(Opponent opponent){
        opponentRepository.findById(opponent.getId()).orElseThrow(()-> new ResourceNotFoundException("Opponent", "Id", opponent.getId()));
        opponentRepository.delete(opponent);
    }
}
