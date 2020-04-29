package pt.isel.rugby.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

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

}
