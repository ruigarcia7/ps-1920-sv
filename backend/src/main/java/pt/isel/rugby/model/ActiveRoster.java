package pt.isel.rugby.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "activeRoster")
@Data
public class ActiveRoster implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Athlete athlete;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private Game game;

    @Column
    private Long number;

}
