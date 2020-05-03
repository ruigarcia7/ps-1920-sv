package pt.isel.rugby.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.RugbyApplication;
import pt.isel.rugby.business.EventBusiness;
import pt.isel.rugby.model.Event;

@RestController()
@RequestMapping("/event")
public class EventController {
    private static final Logger logger = LoggerFactory.getLogger(RugbyApplication.class);

    @Autowired
    EventBusiness eventBusiness;

    @RequestMapping("/all")
    public Iterable<Event> findAllEvents(){
        logger.info("On method GET event/all");
        return eventBusiness.findAllEvents();
    }

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
        logger.info("On method GET event/all");
        eventBusiness.deleteEvent(event);
        return ResponseEntity.ok().build();
    }
}
