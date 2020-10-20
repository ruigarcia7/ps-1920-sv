package pt.isel.rugby.model.jwt;

import lombok.Data;

@Data
public class ResponseMessage {

    private String message;

    public ResponseMessage(String message) {
        this.message = message;
    }

    public ResponseMessage(){}
}
