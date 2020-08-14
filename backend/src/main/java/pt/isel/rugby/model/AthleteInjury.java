package pt.isel.rugby.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "athlete_injury")
@Data
public class AthleteInjury implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Injury injury;

    @ManyToOne
    private Athlete athlete;

    @Column
    private String state;

    @Column
    private Date beginDate;

    @Column
    private Date returnDate;

    @Column
    private String recommendations;
}
