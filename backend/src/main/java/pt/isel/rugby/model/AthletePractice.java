package pt.isel.rugby.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

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

    @ManyToOne
    @JsonIgnore
    private Practice practice;

    @ManyToOne
    private Athlete athlete;
}
