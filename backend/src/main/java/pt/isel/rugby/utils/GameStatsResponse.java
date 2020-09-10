package pt.isel.rugby.utils;

import pt.isel.rugby.model.*;

public class GameStatsResponse {
    private Game game;
    private Iterable<Position> positions;
    private Iterable<AthleteGameStats> ags;

    public GameStatsResponse() {

    }

    public Game getGame() {
        return game;
    }

    public Iterable<AthleteGameStats> getAgs() {
        return ags;
    }

    public Iterable<Position> getPositions() {
        return positions;
    }

    public void setAgs(Iterable<AthleteGameStats> ags) {
        this.ags = ags;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public void setPositions(Iterable<Position> positions) {
        this.positions = positions;
    }
}
