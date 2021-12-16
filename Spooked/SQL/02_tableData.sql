-- movie data
insert into Movie ([Title], [Year], [ImdbId], [Type], [Poster], [SubGenreId], [Watched])
	values
	('The Texas Chainsaw Massacre', '2003', 'tt0324216', 'movie', 
		'https://m.media-amazon.com/images/M/MV5BZDg2NDJkOGYtMjM3My00Mzc2LWJiYjktODFlMzBjNmQwMTEyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', 2, 0
	),
	('Scream', '1996', 'tt0117571', 'movie', 
		'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg', 1, 0
	),
	('The Evil Dead', '1981', 'tt0083907', 'movie', 
		'https://m.media-amazon.com/images/M/MV5BODc2MmVjZmUtNjAzMS00MDNiLWIyM2YtOGEzMjg0YjRhMzRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', 2, 0
	)


-- subgenre data (Id auto-increments)
insert into SubGenre([Name])
	values
		('Slasher'),
		('Gory')
