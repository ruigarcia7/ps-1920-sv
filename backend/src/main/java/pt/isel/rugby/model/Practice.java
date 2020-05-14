package pt.isel.rugby.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "practice")
@Data
public class Practice implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private Date date;

    @Column
    private String local;

    @Column
    private String comment;

    @OneToMany(mappedBy = "practice")
    private List<AthletePractice> athletePractices;
}
