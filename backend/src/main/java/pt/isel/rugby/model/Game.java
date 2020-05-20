package pt.isel.rugby.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "game")
@Data
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private Date date;

    @Column
    private String local;

    @Column
    private String comment;

    @OneToOne
    @JoinColumn(name = "opponentId", referencedColumnName = "id")
    private Opponent opponent;

    @ManyToMany(mappedBy = "games")
    private List<Athlete> athletes;

    /*
    @ManyToMany(mappedBy = "games")
    private List<Athlete> activeRoster;*/

    @OneToMany(mappedBy = "game")
    @JsonIgnore
    private List<AthleteGameStats> athleteGameStats;

    @ManyToOne
    @JsonIgnore
    private Tournament tournament;
}
