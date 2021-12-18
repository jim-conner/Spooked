-- movie data
insert into Movie ([ImdbId], [Title], [SubGenreId], [Watched], [Poster])
	values
	('tt0324216', 'The Texas Chainsaw Massacre', 2, 0,
		'https://m.media-amazon.com/images/M/MV5BZDg2NDJkOGYtMjM3My00Mzc2LWJiYjktODFlMzBjNmQwMTEyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
	),
	('tt0117571', 'Scream', 1, 0,
		'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg'
	),
	('tt0083907', 'The Evil Dead', 11, 0,
		'https://m.media-amazon.com/images/M/MV5BODc2MmVjZmUtNjAzMS00MDNiLWIyM2YtOGEzMjg0YjRhMzRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
	)
;


-- subgenre data (Id auto-increments)
insert into SubGenre([Name])
	values
		('Slasher'),
		('Gory'),
		('Dark'),
		('Zombie'),
		('Body Horror'),
		('Serial Killer'),
		('Psychological'),
		('Home Invasion'),
		('Funny'),
		('Culty'),
		('So-bad-it''s-good'),
		('Lovecraftian')
;

insert into [Trigger]([Name], [MovieId])
	values
		('Animal Harm'),
		('Suicide'),
		('Sexual Violence'),
		('Excessive Gore', 'tt0083907'),
		('Torture'),
		('Cannibalism'),
		('Please don''t watch this movie')
;
