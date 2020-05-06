GO

use PS_App;

GO
--Entidades Associativas
if object_id('dbo.AthleteGameStats') is not null drop table dbo.AthleteGameStats
if object_id('dbo.EventAttendance') is not null drop table dbo.EventAttendance
--Entidades Associativas

--Entidades Singulares
if object_id('dbo.Stats') is not null drop table dbo.Stats
if object_id('dbo.Game') is not null drop table dbo.Game
if object_id('dbo.Event') is not null drop table dbo.Event
if object_id('dbo.Practice') is not null drop table dbo.Practice
if object_id('dbo.TrainingSchedule') is not null drop table dbo.TrainingSchedule
if object_id('dbo.Tournament') is not null drop table dbo.Tournament
if object_id('dbo.Staff') is not null drop table dbo.Staff
if object_id('dbo.Opponent') is not null drop table dbo.Opponent
if object_id('dbo.Profile') is not null drop table dbo.Profile
if object_id('dbo.Athlete') is not null drop table dbo.Athlete
if object_id('dbo.Calendar') is not null drop table dbo.Calendar
--Entidades Singulares

GO

create table dbo.TrainingSchedule(
	Pk_TrainingSchedule_ID int identity(1,1) primary key,
	TrainingSchedule_Description varchar(255),
	TrainingSchedule_Link varchar(255),
	TrainingSchedule_Day date
)

create table dbo.Profile(
	Pk_Profile_ID int identity(1,1) primary key,
	Profile_Name varchar(200),
	Profile_Birth date,
	Profile_Address varchar(255),
	Profile_Mail varchar(255),
	Profile_Phone int,
	Profile_Photo varchar(255),
)

create table dbo.Athlete(
	Pk_Athlete_ID int identity(1,1) primary key,
	Athlete_Height decimal,
	Athlete_Weight decimal,
	Athlele_Number int,
	Athlete_Comment varchar(8000),
	Fk_Profile_ID int unique foreign key references dbo.Profile(Pk_Profile_ID),
	Fk_TrainingSchedule_ID int foreign key references dbo.TrainingSchedule(Pk_TrainingSchedule_ID)
)

create table dbo.Staff(
	Pk_Staff_ID int identity(1,1) primary key,
	Staff_Number int,
	Staff_Position varchar(50),
	Fk_Profile_ID int unique foreign key references dbo.Profile(Pk_Profile_ID)
)

create table dbo.Tournament(
	Pk_Tournament_ID int identity(1,1) primary key,
	Tournament_Classification int,
	Tournament_Comment varchar(255)
)

create table dbo.Calendar(
	Pk_Calendar_ID int identity(1,1) primary key
)

create table dbo.Opponent(
	Pk_Opponent_ID int identity(1,1) primary key,
	Opponent_Name varchar(255),
	Opponent_Photo varchar(255)
)

create table dbo.Game(
	Pk_Game_ID int identity(1,1) primary key,
	Game_Date date,
	Game_Local varchar(255),
	Game_Comment varchar(255),
	Fk_Tournament_ID int unique foreign key references dbo.Tournament(Pk_Tournament_ID),
	Fk_Calendar_ID int unique foreign key references dbo.Calendar(Pk_Calendar_ID),
	Fk_Opponent_ID int unique not null foreign key references dbo.Opponent(Pk_Opponent_ID)
)

create table dbo.Event(
	Pk_Event_ID int identity(1,1) primary key,
	Event_Name varchar(255),
	Event_Description varchar(255),
	Event_Date date,
	Event_Local varchar(255),
	Fk_Calendar_ID int unique foreign key references dbo.Calendar(Pk_Calendar_ID)
)

create table dbo.Practice(
	Pk_Practice_ID int identity(1,1) primary key,
	Practice_Date date,
	Pratice_Local varchar(255),
	Pratice_Comment varchar(255),
	Fk_Calendar_ID int unique foreign key references dbo.Calendar(Pk_Calendar_ID)
)


create table dbo.EventAttendance(
	Fk_Event_ID int foreign key references dbo.Event(Pk_Event_ID),
	Fk_Profile_ID int foreign key references dbo.Profile(Pk_Profile_ID),
	primary key (Fk_Event_ID,Fk_Profile_ID)
)

create table dbo.Stats(
	Pk_Stats_ID int identity(1,1) primary key,
	Stats_TackleHit int,
	Stats_TackleMiss int,
	Stats_MelleeHit int,
	Stats_MelleeMiss int,
	Stats_ConversionKickHit int,
	Stats_ConversionKickMiss int,
	Stats_GoalKickHit int,
	Stats_GoalKickMiss int,
	Stats_DropKickHit int,
	Stats_DropKickMiss int,
	Stats_OffsideKickHit int,
	Stats_OffsideKickMiss int,
	Stats_LineOutHit int,
	Stats_LineOutMiss int,
	Stats_Error int,
	Stats_Fouls int,
	Stats_TurnOver int,
	Stats_YellowCard int,
	Stats_RedCard int,
	Stats_Try int,
	Stats_Maul int,
	Stats_PlayingTime int
)

create table dbo.AthleteGameStats(
	Fk_Athlete_ID int foreign key references dbo.Athlete(Pk_Athlete_ID),
	Fk_Game_ID int foreign key references dbo.Game(Pk_Game_ID),
	Fk_Stats_ID int foreign key references dbo.Stats(Pk_Stats_ID),
	primary key(Fk_Athlete_ID,Fk_Game_ID,Fk_Stats_ID)
)

create table dbo.PracticeAthletes(
	Fk_Athlete_ID int foreign key references dbo.Athlete(Pk_Athlete_ID),
	Fk_Practice_ID int foreign key references dbo.Practice(Pk_Practice_ID),
	PracticeAthletes_isPhysical bit,
	PracticeAthletes_isRegular bit
)


/*ISSUES*/
/*Athlete-TrainingSchedule should be N-N.*/
/*Profile-Event should be N-N*/
/*Calendar context doesnt make sense :(*/