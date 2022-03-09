const express = require('express')
const exphbs = require('express-handlebars')
const getTodo = require('./get-todo')
const todoCreate = require('./todocreate.js')
const eliminarTarea = require('./eliminar.js')
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 4000

app.use('/static', express.static('public'))

//app.engine('handlebars', handlebars());
app.engine(
    'handlebars',
    exphbs.engine({
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/'
    })
);
app.set('view engine', 'handlebars');

//**Rutas handlebars*/
app.get('/', async (req, res) => { 
    const todo = await getTodo()
    res.render('index', { todo });
})

app.get('/todo-create', async (req, res) => { 
    res.render("index",{ 
        layout:"todocreate"
    });
})

app.get('/todo-delete/:id', async (req, res) => { 
    res.render("index",{ 
        layout:"tododelete",
        id: req.params.id
    });
})



//**Rutas API*/
app.get('/todos', async (req, res) => { 
    const todo = await getTodo()
    res.json(todo);
})

//Crear
app.post('/todos', async (req, res) => {   

        const { nombre, descripcion } = req.body;
        const todo = await todoCreate(nombre, descripcion)
        res.send(todo);
    
})

//Eliminar
app.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const respuesta = await eliminarTarea(id);
    res.send(respuesta);
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})