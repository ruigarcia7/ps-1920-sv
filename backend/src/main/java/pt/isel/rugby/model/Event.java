package pt.isel.rugby.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "event")
@Data
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private Date date;

    @Column
    private String local;

    @Column
    @ManyToMany(mappedBy = "events")
    private List<Profile> profiles;
}
