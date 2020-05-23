package pt.isel.rugby.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pt.isel.rugby.exception.ResourceNotFoundException;
import pt.isel.rugby.model.Event;
import pt.isel.rugby.repository.EventRepository;

@Component
public class EventBusiness {
    @Autowired
    EventRepository eventRepository;

    public Iterable<Event> findAllEvents(){
        return eventRepository.findAll();
    }

    public Long postEvent(Event event){
        //event.getProfiles().forEach(event::addProfile);
        return eventRepository.save(event).getId();
    }

    public Event findEventById(Long id){
        return eventRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Event", "Id", id));
    }

    public Long updateEvent(Event event){
        eventRepository.findById(event.getId()).orElseThrow(()-> new ResourceNotFoundException("Event", "Id", event.getId()));
        return eventRepository.save(event).getId();
    }

    public void deleteEvent(Event event){
        eventRepository.findById(event.getId()).orElseThrow(() -> new ResourceNotFoundException("Event", "Id", event.getId()));
        eventRepository.delete(event);
    }

    public void deleteEventById(Long id) {
        //TODO: We need to delete all profile_event entries with this event id UwU
        Event e = eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Event", "Id", id));
        eventRepository.deleteById(id);
    }
}
