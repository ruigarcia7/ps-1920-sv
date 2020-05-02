package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.StaffBusiness;
import pt.isel.rugby.model.Staff;

@RestController()
@RequestMapping("/stats")
public class StatsController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    StaffBusiness staffBusiness;

    @RequestMapping("/all")
    public Iterable<Staff> findAllStats(){
        logger.info("On method GET staff/all");
        return staffBusiness.findAllStaff();
    }

    @RequestMapping("/findById/{id}")
    public Staff findStatsById(@PathVariable Long id){
        logger.info("On method GET staff/findById/{id} with id "+ id);
        return staffBusiness.findStaffById(id);
    }

    @PostMapping("/post")
    public Long postStats(@RequestBody Staff staff){
        logger.info("On method POST staff/post");
        return staffBusiness.postStaff(staff);
    }

    @PutMapping("/update")
    public Long putStats(@RequestBody Staff staff){
        logger.info("On method PUT staff/update");
        return staffBusiness.updateStaff(staff);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteStats(@RequestBody Staff staff){
        logger.info("On method DELETE staff/delete");
        staffBusiness.deleteStaff(staff);
        return ResponseEntity.ok().build();
    }
}
