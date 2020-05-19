package pt.isel.rugby.model;

import lombok.Data;

import javax.persistence.*;
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

    //TODO: hummm.
    @OneToMany(mappedBy = "tournament")
    List<Game> games;
}
