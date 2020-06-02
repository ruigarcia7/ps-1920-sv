package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Practice;
import pt.isel.rugby.repository.PracticeRepository;

@Component
public class PracticeBusiness {

    @Autowired
    PracticeRepository practiceRepository;

    public Iterable<Practice> findAllPractices(){
        return practiceRepository.findAll();
    }

    public Long postPractice(Practice practice){
        practice.getAthletePractices().forEach(ap -> ap.setId(null));
        return practiceRepository.save(practice).getId();
    }

    public Practice findPracticeById(Long id){
        return practiceRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Practice", "Id", id));
    }

    public Long updatePractice(Practice practice){
        practiceRepository.findById(practice.getId()).orElseThrow(() -> new ResourceNotFoundException("Practice", "Id", practice.getId()));
        return practiceRepository.save(practice).getId();
    }

    public void deletePractice(Practice practice){
        practiceRepository.findById(practice.getId()).orElseThrow(() -> new ResourceNotFoundException("Practice", "Id", practice.getId()));
        practiceRepository.delete(practice);
    }

    public void deletePracticeById(Long id) {
        practiceRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Practice", "Id", id));
        practiceRepository.deleteById(id);
    }
}
