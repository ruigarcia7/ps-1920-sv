package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Opponent;
import pt.isel.rugby.model.Profile;
import pt.isel.rugby.repository.OpponentRepository;

import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;

@Component
public class OpponentBusiness {
    @Autowired
    OpponentRepository opponentRepository;

    public Iterable<Opponent> findAll(){
        return opponentRepository.findAll();
    }

    public Long postOpponent(Opponent opponent){
        String path = uploadImage(opponent);
        opponent.setPhoto(path);
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

    public void deleteOpponentByib(Long id) {
        opponentRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Opponent", "Id", id));
        opponentRepository.deleteById(id);
    }

    public String uploadImage(Opponent o) {
        byte[] data = Base64.getDecoder().decode(o.getFile().split(",")[1].getBytes(StandardCharsets.UTF_8));
        Path destination = Paths.get("../frontend2/Rugby/src/assets/img/opponent",o.getName()+".jpg");
        try {
            if(!Files.exists(destination)){
                Files.createFile(destination);
            }
            Files.write(destination,data);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return destination.toString().split("src")[1];
    }
}
