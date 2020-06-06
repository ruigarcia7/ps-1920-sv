package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.AthletePractice;
import pt.isel.rugby.model.Practice;
import pt.isel.rugby.repository.PracticeRepository;

import java.util.Collections;

@Component
public class PracticeBusiness {

    @Autowired
    PracticeRepository practiceRepository;

    public Iterable<Practice> findAllPractices(){
        Iterable<Practice> practices = practiceRepository.findAll();
        practices.forEach(practice -> {
            practice.getAthletePractices().forEach(this::setaAhletePracticeInnerFieldsNull);
        });
        return practices;
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

    private void setaAhletePracticeInnerFieldsNull(AthletePractice athletePractice) {
        athletePractice.setPractice(null);
        athletePractice.getAthlete().getProfile().setEvents(Collections.emptyList());
    }
}
