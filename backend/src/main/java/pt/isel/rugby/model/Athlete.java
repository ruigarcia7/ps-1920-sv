package pt.isel.rugby.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "athlete")
@Data
public class Athlete implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String height;

    @Column
    private String weight;

    @Column
    private String athleteNumber;

    @Column
    private String comment;

    @OneToOne
    @JoinColumn(name = "profileId", referencedColumnName = "id")
    private Profile profile;

    @OneToMany(mappedBy = "athlete")
    @JsonIgnore()
    private List<AthletePractice> athletePractices;

    @ManyToMany
    @JsonIgnore
    private List<TrainingSchedule> trainingSchedules;

    @ManyToMany
    @JsonIgnore
    private List<Game> games;

    @Column
    private String positions;

    @OneToMany(mappedBy = "athlete")
    @JsonIgnore
    private List<AthleteGameStats> athleteGameStats;
    
}
