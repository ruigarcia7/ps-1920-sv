package pt.isel.rugby.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

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

    @ManyToMany
    private List<Practice> practices;

    @ManyToMany
    private List<TrainingSchedule> trainingSchedules;

    @ManyToMany
    private List<Game> games;

    @OneToMany(mappedBy = "athlete")
    private List<AthleteGameStats> athleteGameStats;
}
