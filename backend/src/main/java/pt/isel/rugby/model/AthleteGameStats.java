package pt.isel.rugby.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "athleteGameStats")
@Data
public class AthleteGameStats {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Athlete athlete;

    @ManyToOne
    private Stats stats;

    @ManyToOne
    @JsonIgnore
    private Game game;
}
