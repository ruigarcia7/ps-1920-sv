package pt.isel.rugby.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "training_schedule")
@Data
public class TrainingSchedule implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String description;

    @Column
    private String link;

    @Column
    private Date date;

    @ManyToMany(mappedBy = "trainingSchedules")
    private List<Athlete> athletes;
}
