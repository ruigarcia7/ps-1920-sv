GO

use PS_App;

GO

delete from dbo.AthleteGameStats;
delete from dbo.EventAttendance;
delete from dbo.PracticeAthletes;
delete from dbo.TrainingSchedule;
delete from dbo.CalendarEntry;
delete from dbo.Stats;
delete from dbo.Game;
delete from dbo.Event;
delete from dbo.Practice;
delete from dbo.Tournament;
delete from dbo.Staff;
delete from dbo.Opponent;
delete from dbo.Athlete;
delete from dbo.Profile;
delete from dbo.TrainingSchedule;

insert into dbo.Athlete values(null,null,null,null,null)

select * from dbo.Profile
select * from dbo.Athlete