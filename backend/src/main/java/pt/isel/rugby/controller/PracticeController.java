package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.PracticeBusiness;
import pt.isel.rugby.model.Practice;

@RestController()
@RequestMapping("/practice")
public class PracticeController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    PracticeBusiness practiceBusiness;

    @GetMapping("/findAll")
    public Iterable<Practice> findAllPractices(){
        logger.info("On method GET practice/all");
        return practiceBusiness.findAllPractices();
    }

    @GetMapping("/findById/{id}")
    public Practice findPracticeById(@PathVariable Long id){
        logger.info("On method GET practice/findByid/{id} with id " + id);
        return practiceBusiness.findPracticeById(id);
    }

    @PostMapping("/post")
    public Long postPractice(@RequestBody Practice practice){
        logger.info("On method POST practice/post");
        return practiceBusiness.postPractice(practice);
    }

    @PutMapping("/update")
    public Long putPractice(@RequestBody Practice practice){
        logger.info("On method PU practice/update");
        return practiceBusiness.updatePractice(practice);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deletePractice(@RequestBody Practice practice){
        logger.info("On method DELETE practice/delete");
        practiceBusiness.deletePractice(practice);
        return ResponseEntity.ok().build();
    }
}
