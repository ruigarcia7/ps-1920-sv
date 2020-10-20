package pt.isel.rugby.model.jwt;

import lombok.Data;

import javax.validation.constraints.Size;
import java.util.Set;

@Data
public class SignUpForm {

    @Size(min = 3, max = 50)
    private String name;

    @Size(min = 3, max = 50)
    private String username;

    @Size(max = 60)
    private String email;

    private Set<String> role;

    @Size(min = 6, max = 40)
    private String password;
}
