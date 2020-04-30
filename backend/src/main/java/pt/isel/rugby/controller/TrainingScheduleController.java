package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.model.TrainingSchedule;
import pt.isel.rugby.repository.TrainingScheduleRepository;

@RestController()
@RequestMapping("/schedule")
public class TrainingScheduleController {
    @Autowired
    TrainingScheduleRepository trainingScheduleRepository;

    @RequestMapping("/findAll")
    public String findAllTrainingSchedule(){
        System.out.println("findAllTrainingSchedule()");
        return trainingScheduleRepository.findAll().toString();
    }

    @RequestMapping("/findById")
    public String findTrainingScheduleById(){
        System.out.println("findTrainingScheduleById()");
        return trainingScheduleRepository.findAll().iterator().next().toString();
    }

    @PostMapping("/post")
    public String postTrainingSchedule(){
        System.out.println("postTrainingSchedule()");
        TrainingSchedule schedule = trainingScheduleRepository.findAll().iterator().next();
        trainingScheduleRepository.save(schedule);
        return trainingScheduleRepository.findAll().toString();
    }

    @PutMapping("/update")
    public String putTrainingSchedule(){
        System.out.println("updateTrainingSchedule()");
        TrainingSchedule trainingSchedule = trainingScheduleRepository.findAll().iterator().next();
        trainingSchedule.setDescription(trainingSchedule.getId().toString());
        trainingScheduleRepository.save(trainingSchedule);
        return trainingScheduleRepository.findAll().toString();
    }

    @DeleteMapping("/delete")
    public String deleteTrainingSchedule(){
        System.out.println("deleteTrainingSchedule()");
        return trainingScheduleRepository.findAll().toString();
    }
}
