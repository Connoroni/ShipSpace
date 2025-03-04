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


// INSERT INTO articles (
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
//   '01',
//   'Venator_Star_Destroyer',
//   'Flagship of the Grand Army of the Republic',
//   'Its a cool ship history blah blah',
//   'It has some varients that Im not explaning in dummy data',
//   'https://static.wikia.nocookie.net/swse/images/b/b5/Venator-Class_Star_Destroyer.jpg/revision/latest?cb=20181010192108',
//   'Behind the Scenes',
//   'Example ship was created about 1 minute ago (10:50am, February 28, 2025) in my mind. It exists only for the purpose of creating dummy data.',
//   '',
//   '',
//   '',
//   ''
// ),
// (
//   '12',
//   'Millennium_Falcon',
//   'Hansolos ship',
//   'Its a cool ship history blah blah',
//   'It has some varients that Im not explaning in dummy data',
//   'https://static.wikia.nocookie.net/starwars/images/0/00/Han_Solo_YT-1300_XWM-HotR.png/revision/latest?cb=20171118230718',
//   'Behind the Scenes',
//   'Example ship was created about 1 minute ago (10:50am, February 28, 2025) in my mind. It exists only for the purpose of creating dummy data.',
//   '',
//   '',
//   '',
//   ''
// ),
// (
//   '13',
//   'Serenity',
//   'Main firefly ship',
//   'Its a cool ship history blah blah',
//   'It has some varients that Im not explaning in dummy data',
//   'https://www.belloflostsouls.net/wp-content/uploads/2022/10/f8a9f9ebabd0156d9cc7f062167ce056.jpg',
//   'Behind the Scenes',
//   'Example ship was created about 1 minute ago (10:50am, February 28, 2025) in my mind. It exists only for the purpose of creating dummy data.',
//   '',
//   '',
//   '',
//   ''
// ),
// (
//   '14',
//   'USS_Enterprise',
//   'the flagship of the Federation',
//   'Its a cool ship history blah blah',
//   'It has some varients that Im not explaning in dummy data',
//   'https://mahannahsscifiuniverse.com/cdn/shop/articles/the-uss-enterprise-refit-ncc-1701-a-102196_1024x1024.jpg?v=1661648434',
//   'Behind the Scenes',
//   'Example ship was created about 1 minute ago (10:50am, February 28, 2025) in my mind. It exists only for the purpose of creating dummy data.',
//   '',
//   '',
//   '',
//   ''
// ),
// (
//   '15',
//   'The_Orville',
//   'Seth Mcflarans ship',
//   'Its a cool ship history blah blah',
//   'It has some varients that Im not explaning in dummy data',
//   'https://trekmovie.com/wp-content/uploads/2017/08/ORV101_Orville_with_planet_hires1.jpg',
//   'Behind the Scenes',
//   'Example ship was created about 1 minute ago (10:50am, February 28, 2025) in my mind. It exists only for the purpose of creating dummy data.',
//   '',
//   '',
//   '',
//   ''
// ),
// (
//   '16',
//   'A_Pelican',
//   'Birb init',
//   'Its a cool ship history blah blah',
//   'It has some varients that Im not explaning in dummy data',
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pelikan_Walvis_Bay.jpg/640px-Pelikan_Walvis_Bay.jpg',
//   'Behind the Scenes',
//   'Example ship was created about 1 minute ago (10:50am, February 28, 2025) in my mind. It exists only for the purpose of creating dummy data.',
//   '',
//   '',
//   '',
//   ''
// );
