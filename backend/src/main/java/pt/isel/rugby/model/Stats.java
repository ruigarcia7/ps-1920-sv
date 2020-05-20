package pt.isel.rugby.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "stats")
@Data
public class Stats implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private Byte errors;

    @Column
    private Byte fouls;

    @Column
    private Byte turnOvers;

    @Column
    private Byte yellowCards;

    @Column
    private Byte redCards;

    @Column
    private Byte tries;

    @Column
    private Byte mauls;

    @Column
    private Byte playingTime;

    @Column
    private Byte tacklesHit;
    @Column
    private Byte tacklesMiss;

    @Column
    private Byte melleesHit;
    @Column
    private Byte melleesMiss;

    @Column
    private Byte conversionkicksHit;
    @Column
    private Byte conversionkicksMiss;

    @Column
    private Byte goalkicksHit;
    @Column
    private Byte goalkicksMiss;

    @Column
    private Byte dropkicksHit;
    @Column
    private Byte dropkicksMiss;

    @Column
    private Byte offsidekicksHit;
    @Column
    private Byte offsidekicksMiss;

    @Column
    private Byte lineoutsHit;
    @Column
    private Byte lineoutsMiss;

    @OneToMany(mappedBy = "stats")
    @JsonIgnore
    private List<AthleteGameStats> athleteGameStats;
}
