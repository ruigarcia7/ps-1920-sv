package pt.isel.rugby.utils;

import pt.isel.rugby.model.Event;
import pt.isel.rugby.model.Game;
import pt.isel.rugby.model.Practice;
import pt.isel.rugby.model.Tournament;

public class AthleteAttendanceResponse {
    private Iterable<Game> games;
    private long allGamesCount;
    private Iterable<Event> events;
    private long allEventsCount;
    private Iterable<Practice> practices;
    private long allPracticesCount;
    private Iterable<Tournament> tournaments;
    private long allTournamentsCount;

    public AthleteAttendanceResponse() { }

    public void setAllEventsCount(long allEventsCount) {
        this.allEventsCount = allEventsCount;
    }

    public void setAllGamesCount(long allGamesCount) {
        this.allGamesCount = allGamesCount;
    }

    public void setAllPracticesCount(long allPracticesCount) {
        this.allPracticesCount = allPracticesCount;
    }

    public void setAllTournamentsCount(long allTournamentsCount) {
        this.allTournamentsCount = allTournamentsCount;
    }

    public void setEvents(Iterable<Event> events) {
        this.events = events;
    }

    public void setGames(Iterable<Game> games) {
        this.games = games;
    }

    public void setPractices(Iterable<Practice> practices) {
        this.practices = practices;
    }

    public void setTournaments(Iterable<Tournament> tournaments) {
        this.tournaments = tournaments;
    }

    public Iterable<Event> getEvents() {
        return events;
    }

    public Iterable<Game> getGames() {
        return games;
    }

    public Iterable<Practice> getPractices() {
        return practices;
    }

    public long getAllGamesCount() {
        return allGamesCount;
    }

    public Iterable<Tournament> getTournaments() {
        return tournaments;
    }

    public long getAllEventsCount() {
        return allEventsCount;
    }

    public long getAllPracticesCount() {
        return allPracticesCount;
    }

    public long getAllTournamentsCount() {
        return allTournamentsCount;
    }
}

