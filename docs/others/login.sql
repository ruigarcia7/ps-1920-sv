--Login Stuff i dont know
GO
	IF (db_id('PS_App') IS NULL)
		Create Database PS_App;

GO
	use PS_App;

GO
	IF  EXISTS (SELECT * FROM sys.database_principals WHERE name = N'PsProj')
		DROP USER PsProj

GO
	IF EXISTS (SELECT loginname FROM master.dbo.syslogins WHERE name = N'useradm')
		DROP LOGIN useradm;

GO
	CREATE LOGIN useradm
	WITH PASSWORD = 'adm123';
	CREATE USER PsProj FOR LOGIN useradm
	WITH DEFAULT_SCHEMA = dbo;
GO
	exec sp_addrolemember N'db_owner', N'PsProj'
