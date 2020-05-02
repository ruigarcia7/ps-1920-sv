package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.TrainingScheduleBusiness;
import pt.isel.rugby.model.TrainingSchedule;

@RestController()
@RequestMapping("/schedule")
public class TrainingScheduleController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    TrainingScheduleBusiness trainingScheduleBusiness;

    @GetMapping("/all")
    public Iterable<TrainingSchedule> findAllTrainingSchedulse(){
        logger.info("On method GET schedule/all");
        return trainingScheduleBusiness.findAllTrainingSchedules();
    }

    @GetMapping("/findById/{id}")
    public TrainingSchedule findTrainingScheduleById(@PathVariable Long id){
        logger.info("On method GET schedule/all with id " + id);
        return trainingScheduleBusiness.findTrainingScheduleById(id);
    }

    @PostMapping("/post")
    public Long postTrainingSchedule(@RequestBody TrainingSchedule trainingSchedule){
        logger.info("On method POST schedule/post");
        return trainingScheduleBusiness.postTrainingSchedule(trainingSchedule);
    }

    @PutMapping("/update")
    public Long putTrainingSchedule(@RequestBody TrainingSchedule trainingSchedule){
        logger.info("On method PUT schedule/update");
        return trainingScheduleBusiness.updateTrainingSchedule(trainingSchedule);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteTrainingSchedule(@RequestBody TrainingSchedule trainingSchedule){
        trainingScheduleBusiness.deleteTrainingSchedule(trainingSchedule);
        return ResponseEntity.ok().build();
    }
}
