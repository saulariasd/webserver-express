const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//EXpress HBS Engin e
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'sAUl'
    });
});

app.get('/about', (req, res) => {

    res.render('about', {});
});

// app.get('/data', (req, res) => {
//     res.send('Hola Data ');
// });

app.listen(port, () => console.log(`Escuchando peticiones el el puerto ${port}`));