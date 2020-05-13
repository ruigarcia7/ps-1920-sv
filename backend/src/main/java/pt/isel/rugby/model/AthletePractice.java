package pt.isel.rugby.model;

import lombok.Data;
import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "athletePractice")
@Data
public class AthletePractice implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private Boolean physio;

    @Column
    private Boolean regular;

    @Column
    @ManyToOne
    private Practice practice;

    @ManyToMany(mappedBy = "athletePractices")
    private List<Athlete> athletes;
}
