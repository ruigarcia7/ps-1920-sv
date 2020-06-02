package pt.isel.rugby.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "tournament")
@Data
public class Tournament {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    @Column
    private String classification;

    @Column
    private String comment;

    @Column
    private Date date;

    @Column
    private String local;

    //TODO: hummm.
    @OneToMany(mappedBy = "tournament")
    List<Game> games;
}
