CREATE TABLE rooms(
	id SERIAL PRIMARY KEY NOT NULL,
	creator VARCHAR(50) NOT NULL,
	creation_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
	name VARCHAR(20) UNIQUE NOT NULL,
	expired BOOLEAN DEFAULT FALSE
);

CREATE TABLE songs(
	sid SERIAL PRIMARY KEY NOT NULL,
	source VARCHAR(200) NOT NULL,
	title VARCHAR(50) NOT NULL,
	artist VARCHAR(50) NOT NULL,
	duration int NOT NULL,
	current BOOLEAN DEFAULT FALSE,
	playing BOOLEAN DEFAULT FALSE,
	upvotes INT NOT NULL,
	skipvotes INT NOT NULL,
	room INT REFERENCES rooms (id),
	date_added TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE room_songs(
	sid REFERENCES songs (sid),
	id REFERENCES rooms (id),
	PRIMARY KEY (sid, id)
);	