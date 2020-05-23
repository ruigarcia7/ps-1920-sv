package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.controller.TrainingScheduleController;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Tournament;
import pt.isel.rugby.model.TrainingSchedule;
import pt.isel.rugby.repository.TrainingScheduleRepository;

@Component
public class TrainingScheduleBusiness {

    @Autowired
    TrainingScheduleRepository trainingScheduleRepository;

    public Iterable<TrainingSchedule> findAllTrainingSchedules(){return trainingScheduleRepository.findAll();}

    public Long postTrainingSchedule(TrainingSchedule trainingSchedule){
        return trainingScheduleRepository.save(trainingSchedule).getId();
    }

    public TrainingSchedule findTrainingScheduleById(Long id){
        return trainingScheduleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("TrainingSchedule", "Id", id));
    }

    public Long updateTrainingSchedule(TrainingSchedule trainingSchedule){
        trainingScheduleRepository.findById(trainingSchedule.getId()).orElseThrow(() -> new ResourceNotFoundException("TrainingSchedule", "Id", trainingSchedule.getId()));
        return trainingScheduleRepository.save(trainingSchedule).getId();
    }

    public void deleteTrainingSchedule(TrainingSchedule trainingSchedule){
        trainingScheduleRepository.findById(trainingSchedule.getId()).orElseThrow(() -> new ResourceNotFoundException("TrainingSchedule", "Id", trainingSchedule.getId()));
        trainingScheduleRepository.delete(trainingSchedule);
    }

    public void deleteTrainingScheduleById(Long id) {
        TrainingSchedule schedule = trainingScheduleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Training Schedule", "Id", id));
        trainingScheduleRepository.findById(schedule.getId()).orElseThrow(()-> new ResourceNotFoundException("Training Schedule", "Id", schedule.getId()));
        trainingScheduleRepository.delete(schedule);
    }
}
