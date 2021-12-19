-- create Movie Table
Create Table dbo.Movie (
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	ImdbId varchar(50) NOT NULL,
	Title varchar(200) NOT NULL,
	SubGenreId int NOT NULL,
	Watched bit NOT NULL default 0,
	Poster nvarchar(2000) NOT NULL
);

-- create SubGenre Table
Create Table dbo.SubGenre (
	Id int NOT NULL identity primary key,
	[Name] varchar(50) NOT NULL,
);

-- create Trigger Table
Create Table dbo.[Trigger] (
	Id uniqueidentifier NOT NULL primary key default(newid()),
	[Name] varchar(50) NOT NULL,
	[MovieId] uniqueidentifier 
	Constraint FK_Trigger_Movie Foreign Key (MovieId)
		References dbo.[Movie] (Id)
);