-- movie data
insert into Movie ([Id], [ImdbId], [Title], [SubGenreId], [Watched], [Poster])
	values
	('FFE5CC53-1111-EC11-B0C7-645D8657053E', 'tt0324216', 'The Texas Chainsaw Massacre', 2, 0,
		'https://m.media-amazon.com/images/M/MV5BZDg2NDJkOGYtMjM3My00Mzc2LWJiYjktODFlMzBjNmQwMTEyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
	),
	('FFE5CC53-2222-EC11-B0C7-645D8657053E', 'tt0117571', 'Scream', 1, 0,
		'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg'
	),
	('FFE5CC53-3333-EC11-B0C7-645D8657053E', 'tt0083907', 'The Evil Dead', 11, 0,
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
		('Animal Harm', 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Suicide', 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Sexual Violence', 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Excessive Gore', 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Torture', 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Cannibalism', 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Please don''t watch this movie', 'FFE5CC53-2222-EC11-B0C7-645D8657053E'),
		('Test w Evil Dead', 'FFE5CC53-3333-EC11-B0C7-645D8657053E')
;
