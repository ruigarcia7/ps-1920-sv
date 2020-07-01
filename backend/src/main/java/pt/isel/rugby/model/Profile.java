package pt.isel.rugby.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.io.File;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

    @Transient
    private String file;

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
