// This file only exists to show the SQL queries we've used

//! Creating tables
// CREATE TABLE IF NOT EXISTS users (
//     id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     clerk_id VARCHAR(255) UNIQUE,
//     username VARCHAR(255) UNIQUE,
//     email TEXT,
//     profile_pic TEXT,
//     bio TEXT
//   );

//   CREATE TABLE IF NOT EXISTS articles (
//     id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     user_id VARCHAR(255) REFERENCES users(clerk_id),
//     title VARCHAR(255) UNIQUE,
//     intro TEXT,
//     sub1 VARCHAR(255),
//     content1 TEXT,
//     sub2 VARCHAR(255),
//     content2 TEXT,
//     sub3 VARCHAR(255),
//     content3 TEXT
//   );

//   CREATE TABLE IF NOT EXISTS info_box (
//     id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     article_id BIGINT REFERENCES articles(id),
//     name VARCHAR(255),
//     origin VARCHAR(255),
//     length BIGINT,
//     length_unit VARCHAR(255),
//     width BIGINT,
//     width_unit VARCHAR(255),
//     height BIGINT,
//     height_unit VARCHAR(255),
//     role VARCHAR(255)
//   );

//   CREATE TABLE IF NOT EXISTS tags (
//     id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     tag_name VARCHAR(255)
//   );

//   CREATE TABLE IF NOT EXISTS tag_junction(
//     PRIMARY KEY (article_id, tag_id),
//     article_id BIGINT REFERENCES articles(id),
//     tag_id BIGINT REFERENCES tags(id)
//   )

//! Inserting first dummy article
//! User was needed because the articles table references clerk_id as a foreign key
// INSERT INTO users(clerk_id)
// VALUES ('abcd1234');

// INSERT INTO articles(
//   user_id,
//   title,
//   intro,
//   sub1,
//   content1,
//   img1,
//   sub2,
//   content2,
//   img2,
//   sub3,
//   content3,
//   img3
// )
// VALUES (
//   'abcd1234',
//   'Example_Ship',
//   'Example ship is one of the finest ships ever created.',
//   'History',
//   'The Example Ship was created in 2125 and went to space. When it was in space it did some stuff.',
//   'https://static.vecteezy.com/system/resources/thumbnails/035/982/430/small/ai-generated-3d-flying-rocket-isolated-on-transparent-background-free-png.png',
//   'Behind the Scenes',
//   'Example ship was created about 1 minute ago (10:50am, February 28, 2025) in my mind. It exists only for the purpose of creating dummy data.',
//   '',
//   '',
//   '',
//   ''
// );

// INSERT INTO info_box (
//     article_id,
//     image,
//     name,
//     origin,
//     length,
//     length_unit,
//     width,
//     width_unit,
//     height,
//     height_unit,
//     role
//     )
//     VALUES (
//     2,
//     'https://media.istockphoto.com/id/1452870348/vector/rocket-ship-icon-in-flat-style-spacecraft-takeoff-on-space-background-start-up-illustration.jpg?s=612x612&w=0&k=20&c=Ik4wg3D1NmtuebK88Bgb3CKwY7xx5SQ4RcZWKl38ydw=',
//     'Example Ship',
//     'Imagination',
//     50,
//     'm',
//     10,
//     'm',
//     10,
//     'm',
//     'Exploration Craft'
//     );

//! Altering articles table to add traffic and alt text
// ALTER TABLE articles
// ADD traffic BIGINT;

// ALTER TABLE articles
// ADD alt1 VARCHAR(255),
// ADD alt2 VARCHAR(255),
// ADD alt3 VARCHAR(255);
