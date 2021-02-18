const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
// let movies = [];
// app.use(bodyParser.json());
app.use(cors());
app.get("/movies", (req, res) => {
  fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    .then((data) => data.json())
    .then((json) => res.send(json));
}); //주소에 대한 GET 요청이 올 때 어떤 동작을 할 지 적는 부분

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
}); // app.listen: 포트를 연결하고 서버를 실행
