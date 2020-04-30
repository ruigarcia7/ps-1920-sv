package pt.isel.rugby.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "tournament")
@Data
public class Tournament {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String classification;

    @Column
    private String comment;
}
