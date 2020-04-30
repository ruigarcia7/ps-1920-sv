package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.model.Event;
import pt.isel.rugby.model.Stats;
import pt.isel.rugby.repository.EventRepository;

@RestController()
@RequestMapping("/event")
public class EventController {
    @Autowired
    EventRepository eventRepository;

    @RequestMapping("/findAll")
    public String findAllEvents(){
        System.out.println("findAllEvents()");
        return eventRepository.findAll().toString();
    }

    @RequestMapping("/findById")
    public String findEventById(){
        System.out.println("findEventById()");
        return eventRepository.findAll().iterator().next().toString();
    }

    @PostMapping("/post")
    public String postEvent(){
        System.out.println("postEvent()");
        Event event = new Event();
        eventRepository.save(event);
        return eventRepository.findAll().toString();
    }

    @PutMapping("/update")
    public String putEvent(){
        System.out.println("updateEvent()");
        Event event = eventRepository.findAll().iterator().next();
        event.setName(event.getId().toString());
        eventRepository.save(event);
        return eventRepository.findAll().toString();
    }

    @DeleteMapping("/delete")
    public String deleteStats(){
        System.out.println("deleteEvent()");
        return eventRepository.findAll().toString();
    }
}
