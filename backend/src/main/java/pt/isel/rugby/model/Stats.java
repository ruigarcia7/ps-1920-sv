package pt.isel.rugby.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

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

    private Byte tackleHits;
    @Column
    private Byte tackleMiss;

    @Column
    private Byte melleeHits;
    @Column
    private Byte melleeMiss;

    @Column
    private Byte convertionKickHits;
    @Column
    private Byte convertionKickMiss;

    @Column
    private Byte goalkickHits;
    @Column
    private Byte goalkickMiss;

    @Column
    private Byte dropkickHits;
    @Column
    private Byte dropkickMiss;

    @Column
    private Byte offsideHits;
    @Column
    private Byte offsideMiss;

    @Column
    private Byte lineOutHits;
    @Column
    private Byte lineOutMiss;



}
