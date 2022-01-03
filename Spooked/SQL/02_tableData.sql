-- movie data
insert into Movie ([Id], [ImdbId], [Title], [SubGenreId], [Watched], [Poster])
	values
	('FFE5CC53-1111-EC11-B0C7-645D8657053E', 'tt0324216', 'The Texas Chainsaw Massacre', 1, 0,
		'https://m.media-amazon.com/images/M/MV5BZDg2NDJkOGYtMjM3My00Mzc2LWJiYjktODFlMzBjNmQwMTEyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
	),
	('FFE5CC53-2222-EC11-B0C7-645D8657053E', 'tt0117571', 'Scream', 1, 0,
		'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg'
	),
	('FFE5CC53-3333-EC11-B0C7-645D8657053E', 'tt0083907', 'The Evil Dead', 8, 0,
		'https://m.media-amazon.com/images/M/MV5BODc2MmVjZmUtNjAzMS00MDNiLWIyM2YtOGEzMjg0YjRhMzRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
	)
;

-- subgenre data (Id auto-increments)
insert into SubGenre([Name])
	values
		('Slasher'),
		('Home Invasion'),
		('Pyschological'),
		('Vampires'),
		('Cults & Secret Societies'),
		('Giallo'),
		('Sci-Fi'),
		('Creature Feature'),
		('Body Horror'),
		('Zombie'),
		('Exploitation'),
		('Paranormal'),
		('Comedy'),
		('Found Footage')
;

insert into [Trigger]([Name], [Value], [MovieId])
	values
		('Animal Harm', 25, 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Suicide', 25, 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Sexual Violence', 15, 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Excessive Gore', 20, 'FFE5CC53-2222-EC11-B0C7-645D8657053E'),
		('Torture', 30, 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Cannibalism', 15, 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Death of Child(ren)', 50, 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Hate Speech and Violence', 22, 'FFE5CC53-1111-EC11-B0C7-645D8657053E'),
		('Strobe Effects/Shaking Cam', 25, 'FFE5CC53-3333-EC11-B0C7-645D8657053E'),
		('SCREAM TEST', 5,'FFE5CC53-2222-EC11-B0C7-645D8657053E')
;

--using firebase now to create User obj
--insert into [User]([Id])
--	values
--		('FFE5CC53-0000-EC11-B0C7-645D8657053E')
--;


