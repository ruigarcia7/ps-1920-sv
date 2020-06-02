package pt.isel.rugby.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "profile")
@Data
@JsonView
public class Profile implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    @Column
    private Date birth;

    @Column
    private String address;

    @Column
    private String mail;

    @Column
    private String phone;

    @Column
    private String photo;

    @Column
    private boolean isAthlete;

    //@ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.REFRESH})
    @ManyToMany(cascade = {CascadeType.MERGE}, fetch = FetchType.LAZY)
    @JoinTable(name = "profile_events",
            joinColumns = { @JoinColumn(name = "profile_id") },
            inverseJoinColumns = { @JoinColumn(name = "event_id") })
    private List<Event> events;

    public void  addEvent(Event event){
    }
}
