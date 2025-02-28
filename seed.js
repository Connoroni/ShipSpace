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
