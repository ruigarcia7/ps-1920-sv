package pt.isel.rugby.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pt.isel.rugby.model.Stats;
import pt.isel.rugby.repository.StatsRepository;

@RestController()
@RequestMapping("/stats")
public class StatsController {
    @Autowired
    StatsRepository statsRepository;

    @RequestMapping("/findAll")
    public String findAllStats(){
        System.out.println("findAllStats()");
        return statsRepository.findAll().toString();
    }

    @RequestMapping("/findById")
    public String findStatsById(){
        System.out.println("findStatsById()");
        return statsRepository.findAll().iterator().next().toString();
    }

    @PostMapping("/post")
    public String postStats(){
        System.out.println("postStats()");
        Stats stats = new Stats();
        statsRepository.save(stats);
        return statsRepository.findAll().toString();
    }

    @PutMapping("/update")
    public String putStats(){
        System.out.println("updateStats()");
        Stats stats = statsRepository.findAll().iterator().next();
        stats.setConvertionKickHits((byte) 1);
        statsRepository.save(stats);
        return statsRepository.findAll().toString();
    }

    @DeleteMapping("/delete")
    public String deleteStats(){
        System.out.println("deleteStats()");
        return statsRepository.findAll().toString();
    }
}
