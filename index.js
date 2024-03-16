const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

const characters = [
  {
    id: 1,
    name: "Имя персонажа",
    description: "описание...",
    modified: "2020-07-21",
    thumbnail: "http://...",
    comics: [
      {
        id: 1,
        name: "Spider-Man: 101 Ways to End the Clone Saga (1997) #1",
      },
    ],
  },
  {
    id: 2,
    name: "Имя персонажа 2",
    description: "описание...",
    modified: "2020-07-21",
    thumbnail: "http://...",
    comics: [
      {
        id: 1,
        name: "Spider-Man: 101 Ways to End the Clone Saga (1997) #1",
      },
    ],
  },
];

app.get("/api/characters", (req, res) => {
  res.json(characters);
});

app.get("/api/character", (req, res) => {
  const character = characters.find((c) => c.id === +req.params.id);
  res.json(character);
});

module.exports.handler = serverless(app);

const character = characters.find((c) => c.id === +2);
console.log(character)