package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.AthletePractice;
import pt.isel.rugby.model.Practice;
import pt.isel.rugby.repository.PracticeRepository;

import java.util.Collections;
import java.util.Iterator;

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

    public Iterable<Practice> findAllByAthlete(Athlete a){
        Iterable<Practice> practices = practiceRepository.findAll();

        practices.forEach(practice -> {
            practice.getAthletePractices().forEach(this::setaAhletePracticeInnerFieldsNull);
        });

        Iterator<Practice> ip = practices.iterator();
        boolean hasAthlete = false;
        while( ip.hasNext() ) {
            Iterator<AthletePractice> iap = ip.next().getAthletePractices().iterator();
            while( iap.hasNext() ){
                if(iap.next().getAthlete().getId().equals(a.getId())){
                    hasAthlete = true;
                    break;
                }
            }
            if(hasAthlete) hasAthlete = false;
            else ip.remove();
        }
        return practices;
    }

    public long count(){
        return practiceRepository.count();
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
        athletePractice.getAthlete().setAthletePractices(Collections.emptyList());
    }
}
