const express = require('express');
const app = express();
const port = 8080; 
const client = require('./db/conn.js');
const cors = require('cors');

app.get('/', (req, res) => {
  console.log('Received request at root path');
  res.send('Hello World 123!');
});

app.listen(8080, function() {
  console.log("Server is running on port " + 8080);
});


app.use(cors());
/*
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || origin.startsWith('http://localhost:3000')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

*/

/*
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || origin === 'http://localhost:3000' || origin === 'http://localhost:3000/teste1') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
*/



/*const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    // Verifica se a origem da solicitação está na lista de URLs permitidos
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST', // Permite apenas os métodos GET e POST
}));
*/


//app.use(cors());

/*
app.get('/posts',async (req, res) => {
  const result = await client.query(
    'SELECT * from posts '
  );
  res.json({"data":result.rows})
});
*/

/*base para teste sem o banco de dados */
app.get('/quadros', async (req, res) => {
  // Substitua 'client.query' pelo método real de consulta ao banco de dados
  // const result = await client.query('SELECT * FROM quadros WHERE autor = $1', [req.params.autor]);
  // res.json({"data": result.rows});

  // Mock de dados para teste
  const result = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHua1MyU8IM4Bq4wk7Z2OLxXnYxEQtn4zww&usqp=CAU', id: 1, teste:'Quadro Oliveiras com céu amarelo e sol' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4hi_RdlpktgapX-6tBoezgwNk0cvKEsFqw&usqp=CAU', id: 2, teste:'VIRIVI' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_r_5QscJcrhijf0DKMuCL5v3wjBAq7voPw&usqp=CAU', id: 3, teste:'Vista do apartamento de Theo' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9N3gP_r9q2jWgTObo_F5tPmX6842gA1ioMQ&usqp=CAU', id: 4, teste:'“Meules de blé”' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSY0rsaN61vMbv4XEfiXZ56KMdOHu0Nv0Npv5BaCqLDRNbtuV9T_JJtddlviU3dXn4W9g&usqp=CAU', id: 5, teste:'Campo de trigo sob nuvens de tempestade' },
    { src: 'https://i.postimg.cc/nzX80FvJ/pintura1.jpg', id: 6, teste:'A Noite Estrelada' },
    { src: 'https://i.postimg.cc/3NQLmY19/pintura2.jpg', id: 7, teste:'Amendoeira em Flor' },
    { src: 'https://i.postimg.cc/qBZqJqm8/pintura4.jpg', id: 8, teste:'Lírios' },
  ];
  res.json({ "data": result });
});


// Rota para obter todos os posts
app.get('/posts', async (req, res) => {
  // Substitua 'client.query' pelo método real de consulta ao banco de dados
  // const result = await client.query('SELECT * FROM posts');
  // res.json({"data": result.rows});

  // Mock de dados para teste
  const result = [ {
    id:1,
    title: "Van Gogy",
    text: "Artista alfa famoso entre 1900 com a arte omega 1",
    image: "https://images.unsplash.com/photo-1626243048879-51f8d9818566?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id:2,
    title: "Claude Monet",
    text: "Artista alfa famoso entre 1900 com a arte omega 2",
    image: "https://images.unsplash.com/photo-1632127254432-be570f9a9941?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
  res.json({ "data": result });
});

// Rota para obter todos os quadros de um autor



/**
 * 
 * 
 * 
 */












app.get('/autor', async (req, res) => {
  // Substitua 'client.query' pelo método real de consulta ao banco de dados
  // const result = await client.query('SELECT * FROM posts');
  // res.json({"data": result.rows});

  // Mock de dados para teste
  const result = [ {
    id:1,
    title: "Van Gogy",
    text: "Artista alfa famoso entre 1900 com a arte omega 1",
    image: "https://images.unsplash.com/photo-1626243048879-51f8d9818566?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id:2,
    title: "Claude Monet",
    text: "Artista alfa famoso entre 1900 com a arte omega 2",
    image: "https://images.unsplash.com/photo-1632127254432-be570f9a9941?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
  res.json({ "data": result });
});


app.get('/autor/:id', async (req, res) => {
  // Substitua 'client.query' pelo método real de consulta ao banco de dados
  // const result = await client.query('SELECT * FROM categorias');
  // res.json({"data": result.rows});

  // Mock de dados para teste
  const result = [
    {
      id:1,
      title: "Van Gogh",
      text: "Artista famoso entre 1900 com a arte omega 1",
      image: "https://images.unsplash.com/photo-1626243048879-51f8d9818566?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id:2,
      title: "Claude Monet",
      text: "Artista famoso entre 1900 com a arte omega 2",
      image: "https://images.unsplash.com/photo-1632127254432-be570f9a9941?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];

  // Encontre o item com o ID correspondente
  const autor = result.find(item => item.id === parseInt(req.params.id));

  // Verifique se o autor foi encontrado
  if (autor) {
    res.json({ "data": autor });
  } else {
    res.status(404).json({ "message": "Autor não encontrado" });
  }
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
app.delete('/posts/:id', async (req, res) => {
  // Substitua 'client.query' pelo método real de exclusão no banco de dados
  // const result = await client.query('DELETE FROM posts WHERE id = $1', [req.params.id]);
  // res.json({"message": "Post deleted"});

  // Mock de dados para teste
  res.json({ "message": "Post deleted", "id": req.params.id });
});



/**

autor=id,nome,descricao,urlImg


quadro=id,nome,descricao,urlImg,autorId






app.get('/quadros/:autor',async (req, res) => {
  const result = await client.query(
    'SELECT * from posts where autor,name == "variable(autor)" and posts.category == autor.category'
  );
  res.json({"data":result.rows})
});


app.get('/categoria',async (req, res) => {
  const result = await client.query(
    'SELECT * from categorias '
  );
  res.json({"data":result.rows})
});


app.get('/autors',async (req, res) => {
  const result = await client.query(
    'SELECT * from autors '
  );
  res.json({"data":result.rows})
});




app.get('/login:name,password',async (req, res) => {
  const result = await client.query(
    'SELECT * from user WHERE user.pasword = password
    AND user.name = name '
  );
  res.json({"data":result.rows})
});





app.insert('/posts',async (req, res) => {
  const result = await client.query(
    'SELECT * from posts '
  );
  res.json({"data":result.rows})
});

app.update('/posts',async (req, res) => {
  const result = await client.query(
    'SELECT * from posts '
  );
  res.json({"data":result.rows})
});



app.delete('/posts',async (req, res) => {
  const result = await client.query(
    'SELECT * from posts '
  );
  res.json({"data":result.rows})
});

----------------------------------------------

app.insert('/author',async (req, res) => {
  const result = await client.query(
    'SELECT * from author '
  );
  res.json({"data":result.rows})
});

app.update('/author',async (req, res) => {
  const result = await client.query(
    'SELECT * from author '
  );
  res.json({"data":result.rows})
});



app.delete('/author',async (req, res) => {
  const result = await client.query(
    'SELECT * from author '
  );
  res.json({"data":result.rows})
});

---------------------------------------------

app.insert('/user',async (req, res) => {
  const result = await client.query(
    'SELECT * from posts '
  );
  res.json({"data":result.rows})
});

app.update('/user',async (req, res) => {
  const result = await client.query(
    'SELECT * from posts '
  );
  res.json({"data":result.rows})
});



app.delete('/user',async (req, res) => {
  const result = await client.query(
    'SELECT * from posts '
  );
  res.json({"data":result.rows})
});


 */







//const client = require('./db/conn.js');

//const cors = require('cors');
/*
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'));

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}.${file.originalname}`)
    }
  });  
const upload = multer({ storage: storage })
*/
//CRUD ------------------------------------------------------------------------------------------------------------------------

/*
app.get('/blog/:cat',async (req, res) => {
    const result = await client.query(
      req.params.cat != 'all' ? `SELECT * from posts where category = '${req.params.cat}'` : 'SELECT * from blogs'
    );
    res.json({"data":result.rows})
});

app.get('/blogbyid/:id',async (req, res) => {
  const result = await client.query(`SELECT * from posts where id = ${req.params.id}`);
  res.json({"data":result.rows})
});

app.post('/blog',async (req, res) => {
    const result = await client.query('INSERT INTO posts (title,image,post,category) VALUES ($1,$2,$3,$4)',[
        req.body.title,req.body.image,req.body.post,req.body.category
    ]);
    res.json({"message":"Added new blog","desc":result.rowCount});
});

app.post('/blogimage', upload.single('file'), function (req, res, next) {
    res.json(req.file);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




*/











/*
if (!client._connected) {
    client.connect();
}
*/

/*
client.query("SELECT * FROM users", (err, res) => {
    if (err) {
        console.error('Erro ao executar a consulta:', err);
    } else {
        console.log('Resultado da consulta:', res.rows);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
*/

