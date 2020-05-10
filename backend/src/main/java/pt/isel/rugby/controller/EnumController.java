package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.EnumBusiness;
import pt.isel.rugby.model.Position;
import pt.isel.rugby.model.StaffType;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController()
@RequestMapping("/enumerables")
public class EnumController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    EnumBusiness enumBusiness;

    @GetMapping("/position/all")
    public Iterable<Position> findAllPositions(){
        logger.info("On method GET position/all");
        return enumBusiness.findAllPositions();
    }

    @GetMapping("/stafftype/all")
    public Iterable<StaffType> findALlStaffType(){
        logger.info("On method GET stafftype/all");
        return enumBusiness.findAllStaffType();
    }

    @PostMapping("/position/post")
    public Long postPosition(@RequestBody Position position) {
        logger.info("on method POST position/post");
        return enumBusiness.postPosition(position);
    }

    @DeleteMapping("/position/delete")
    public ResponseEntity<?> deleteAthlete(@RequestBody Position position) {
        logger.info("On method DELETE position/delete");
        enumBusiness.deletePosition(position);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/stafftype/post")
    public Long postStaffType(@RequestBody StaffType staffType) {
        logger.info("on method POST stafftype/post");
        return enumBusiness.postStaffType(staffType);
    }

    @DeleteMapping("/stafftype/delete")
    public ResponseEntity<?> deleteAthlete(@RequestBody StaffType staffType) {
        logger.info("On method DELETE stafftype/delete");
        enumBusiness.deleteStaffType(staffType);
        return ResponseEntity.ok().build();
    }
}
