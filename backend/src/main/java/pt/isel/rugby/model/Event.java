package pt.isel.rugby.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
   // @ManyToMany(mappedBy = "events", cascade = {CascadeType.PERSIST, CascadeType.REFRESH})
    @ManyToMany(mappedBy = "events", cascade = {CascadeType.MERGE})
    private List<Profile> profiles;

    public void addProfile(Profile profile){
        profiles.add(profile);
        profile.getEvents().add(this);
    }
}
