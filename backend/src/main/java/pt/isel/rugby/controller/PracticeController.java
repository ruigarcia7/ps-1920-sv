package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.model.Practice;
import pt.isel.rugby.repository.PracticeRepository;

@RestController()
@RequestMapping("/practice")
public class PracticeController {
    @Autowired
    PracticeRepository practiceRepository;

    @RequestMapping("/findAll")
    public String findAllPractices(){
        System.out.println("findAllPractices()");
        return practiceRepository.findAll().toString();
    }

    @RequestMapping("/findById")
    public String findPracticeById(){
        System.out.println("findPracticeById()");
        return practiceRepository.findAll().iterator().next().toString();
    }

    @PostMapping("/post")
    public String postPractice(){
        System.out.println("postPractice()");
        Practice practice = new Practice();
        practiceRepository.save(practice);
        return practiceRepository.findAll().toString();
    }

    @PutMapping("/update")
    public String putGame(){
        System.out.println("updatePractice()");
        Practice practice= practiceRepository.findAll().iterator().next();
        practice.setComment(practice.getId().toString());
        practiceRepository.save(practice);
        return practiceRepository.findAll().toString();
    }

    @DeleteMapping("/delete")
    public String deleteGame(){
        System.out.println("deletePractice()");
        return practiceRepository.findAll().toString();
    }
}
