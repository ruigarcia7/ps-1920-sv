package pt.isel.rugby.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "position")
@Data
public class Position implements Serializable {
    //TODO: does it make sense that our enums have ids?
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;
}
