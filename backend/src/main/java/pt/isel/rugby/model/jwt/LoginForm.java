package pt.isel.rugby.model.jwt;

import lombok.Data;

import javax.validation.constraints.Size;

@Data
public class LoginForm {

    @Size(min=3, max = 60)
    private String username;

    @Size(min = 6, max = 40)
    private String password;

}
