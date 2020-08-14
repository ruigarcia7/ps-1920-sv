package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.InjuryBusiness;
import pt.isel.rugby.model.Injury;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController()
@RequestMapping("/injury")
public class InjuryController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    InjuryBusiness injuryBusiness;

    @GetMapping("/all")
    public Iterable<Injury> findAllInjuries() {
        logger.info("On method GET injury/all");
        return injuryBusiness.findAllInjuries();

    }

    @PostMapping("/post")
    public Long postInjury(@RequestBody Injury injury) {
        logger.info("on method POST injury/post");
        return injuryBusiness.postInjury(injury);
    }

    @GetMapping("/findById/{id}")
    public Injury findInjuryById(@PathVariable Long id) {
        logger.info("on method GET injury/findById/{id} with id "+ id);
        return injuryBusiness.findInjuryById(id);
    }

    @PutMapping("/update")
    public Long putInjury(@RequestBody Injury injury) {
        logger.info("on method PUT injury/update with id "+ injury.getId());
        return injuryBusiness.updateInjury(injury);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteInjury(@RequestBody Injury injury) {
        logger.info("On method DELETE injury/delete");
        injuryBusiness.deleteInjury(injury);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteInjuryById(@PathVariable Long id){
        logger.info("On method DELETE injury/delete/id with id "+ id);
        injuryBusiness.deleteInjuryById(id);
        return ResponseEntity.ok().build();
    }
}