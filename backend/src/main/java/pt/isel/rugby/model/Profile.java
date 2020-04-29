package pt.isel.rugby.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "profile")
public class Profile implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

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
}
