const express = require('express');
const app = express();
const port = 8080; 
const client = require('./db/conn.js');
var cors = require('cors')


app.use(cors())
//const cors = require('cors');

app.get('/', (req, res) => {
  console.log('Received request at root path');
  res.send('Hello World 123!');
});

app.listen(8080, function() {
  console.log("Server is running on port " + 8080);
});


app.use(cors({
  origin: "*",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


app.get('/quadros', async (req, res) => {
  
  const result = await client.query('SELECT * FROM "public"."quadros"');
 
  res.json({"data": result.rows});
});


// Rota para obter todos os posts
app.get('/posts', async (req, res) => {

  const result = await client.query('SELECT * FROM "public"."autor"');

 res.json({"data": result.rows});

});


app.get('/autor', async (req, res) => {
 
  const result = await client.query('SELECT * FROM "public"."autor"');
 
    res.json({"data": result.rows});
});


app.get('/autor/:id', async (req, res) => {

  const result = await client.query(`SELECT * FROM "public"."autor" WHERE "public"."autor"."id" = ${parseInt(req.params.id)}`);

  res.json({"data": result.rows});
});



app.get('/quadros/:id', async (req, res) => {
  const result = await client.query(`SELECT * FROM "public"."quadros" WHERE "public"."quadros"."id" = ${parseInt(req.params.id)}`);
  res.json({"data": result.rows});
});

app.get('/quadrosAutor/:id', async (req, res) => {
  const result = await client.query(`SELECT * FROM "public"."quadros" WHERE "public"."quadros"."autor_id" = ${parseInt(req.params.id)}`);
  res.json({"data": result.rows});
});

//-----------------------------------------------------------------------------------------------------------------











// Rota para autenticar o login
app.get('/login/:name/:password', async (req, res) => {
  // Substitua 'client.query' pelo método real de consulta ao banco de dados
  // const result = await client.query('SELECT * FROM users WHERE name = $1 AND password = $2', [req.params.name, req.params.password]);
  // res.json({"data": result.rows});

  // Mock de dados para teste
  const result = [{ id: 1, name: "username", password: "password" }];
  res.json({ "data": result });
});

// Rota para inserir um novo post
app.post('/posts', async (req, res) => {
  // Substitua 'client.query' pelo método real de inserção no banco de dados
  // const result = await client.query('INSERT INTO posts (title, content) VALUES ($1, $2)', [req.body.title, req.body.content]);
  // res.json({"message": "New post added", "data": result.rows});

  // Mock de dados para teste
  const result = { id: 3, title: req.body.title, content: req.body.content };
  res.json({ "message": "New post added", "data": result });
});

// Rota para atualizar um post existente
app.put('/posts/:id', async (req, res) => {
  // Substitua 'client.query' pelo método real de atualização no banco de dados
  // const result = await client.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3', [req.body.title, req.body.content, req.params.id]);
  // res.json({"message": "Post updated", "data": result.rows});

  // Mock de dados para teste
  const result = { id: req.params.id, title: req.body.title, content: req.body.content };
  res.json({ "message": "Post updated", "data": result });
});

// Rota para excluir um post existente
app.delete('/posts', async (req, res) => {
  // Substitua 'client.query' pelo método real de exclusão no banco de dados
  // const result = await client.query('DELETE FROM posts WHERE id = $1', [req.params.id]);
  // res.json({"message": "Post deleted"});

  // Mock de dados para teste
  res.json({ "message": "Post deleted", "id": req.params.id });
});


