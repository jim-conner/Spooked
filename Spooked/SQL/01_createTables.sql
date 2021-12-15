-- create Movie Table
Create Table dbo.Movie (
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	Title varchar(200) NOT NULL,
	[Year] varchar(4) NOT NULL,
	ImdbId varchar(50) NOT NULL,
	[Type] varchar(20) NOT NULL,
	Poster nvarchar(4000) NOT NULL,
	SubGenreId int NOT NULL,
	Watched bit NOT NULL default 0
);

-- create SubGenre Table
Create Table dbo.SubGenre (
	Id int identity primary key,
	[Name] varchar(50) NOT NULL,
);