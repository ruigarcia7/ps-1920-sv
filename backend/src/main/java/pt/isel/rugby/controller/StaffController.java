package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.StaffBusiness;
import pt.isel.rugby.model.Staff;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController()
@RequestMapping("/staff")
public class StaffController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    StaffBusiness staffBusiness;

    @GetMapping("/all")
    public Iterable<Staff> findAllStaff() {
        logger.info("On method GET staff/all");
        return staffBusiness.findAllStaff();
    }

    @GetMapping("/findById/{id}")
    public Staff findStaffById(@PathVariable Long id) {
        logger.info("On method GET staff/findById with id "+ id);
        return staffBusiness.findStaffById(id);
    }

    @PostMapping("/post")
    public Long postStaff(@RequestBody Staff staff) {
        logger.info("On method POST staff/post");
        return staffBusiness.postStaff(staff);
    }

    @PutMapping("/update")
    public Long putStaff(@RequestBody Staff staff) {
        logger.info("On method PUT staff/update");
        return staffBusiness.postStaff(staff);
    }

    // TODO: verify how to delete elements
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteAthlete(@RequestBody Staff staff) {
        logger.info("On method DELETE staff/delete");
        staffBusiness.deleteStaff(staff);
        return ResponseEntity.ok().build();
    }
}

