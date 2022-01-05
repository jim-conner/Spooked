-- create User Table
--Create Table dbo.[User] (
--	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
--	FirebaseId varchar(50) NOT NULL,
--);

-- create SubGenre Table
Create Table dbo.SubGenre (
	Id int NOT NULL identity primary key,
	[Name] varchar(50) NOT NULL,
);

-- create Movie Table
-- Added non-clustered index on SubGenreId & Id via Object Explorer
Create Table dbo.Movie (
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	ImdbId varchar(50) NOT NULL,
	Title varchar(200) NOT NULL,
	SubGenreId int NOT NULL,
	Watched bit NOT NULL default 0,
	Poster nvarchar(2000) NOT NULL,
);

-- create WatchList Table
Create Table dbo.[WatchList](
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	[UserId] uniqueidentifier NOT NULL,
	[MovieId] uniqueidentifier NOT NULL,
	Constraint FK_Watchlist_User Foreign Key (UserId)
		References dbo.[User] (Id),
	Constraint FK_WatchList_Movie Foreign Key (MovieId)
		References dbo.[Movie] (Id)
);

-- create Trigger Table
Create Table dbo.[Trigger] (
	[Id] int NOT NULL identity primary key,
	[Name] varchar(50) NOT NULL,
	[Score] int NOT NULL,
);

-- create MovieTrigger Table
-- Added non-clustered index on ImdbMovieId & TriggerId via Object Explorer
Create Table dbo.[MovieTrigger] (
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	[ImdbMovieId] varchar(50) NOT NULL,
	[TriggerId] int NOT NULL,
	Constraint FK_MovieTrigger_Trigger Foreign Key (TriggerId)
		References dbo.[Trigger] (Id)
);

