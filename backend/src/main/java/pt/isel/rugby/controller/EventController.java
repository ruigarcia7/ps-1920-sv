package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.EventBusiness;
import pt.isel.rugby.business.ProfileBusiness;
import pt.isel.rugby.model.Athlete;
import pt.isel.rugby.model.Event;
import pt.isel.rugby.model.Game;
import pt.isel.rugby.model.Profile;


@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController()
@RequestMapping("/event")
public class EventController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    EventBusiness eventBusiness;

    @GetMapping("/all")
    public Iterable<Event> findAllEvents(){
        logger.info("On method GET event/all");
        return eventBusiness.findAllEvents();
    }

    /*@GetMapping("/findByProfile/{id}")
    public Iterable<Event> findAllByProfileId(@PathVariable Long id){
        logger.info("On method GET event/findByProfileId/{id} with id "+id);
        Profile p = profileBusiness.findProfileByid(id);
        return eventBusiness.findAllByProfile(p);
    }*/

    @GetMapping("/findById/{id}")
    public Event findEventById(@PathVariable Long id){
        logger.info("On method GET event/findById/{id} with id: "+ id);
        return eventBusiness.findEventById(id);
    }

    @PostMapping("/post")
    public Long postEvent(@RequestBody Event event){
        logger.info("On method POST event/post");
        return eventBusiness.postEvent(event);
    }

    @PutMapping("/update")
    public Long putEvent(@RequestBody Event event){
        logger.info("On method PUT event/update");
        return eventBusiness.updateEvent(event);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteStats(@RequestBody Event event){
        logger.info("On method DELETE event/delete");
        eventBusiness.deleteEvent(event);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteStatsById(@PathVariable Long id){
        logger.info("On method DELETE event/delete/{id} with id "+ id);
        eventBusiness.deleteEventById(id);
        return ResponseEntity.ok().build();
    }

}
