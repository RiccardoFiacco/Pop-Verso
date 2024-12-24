const express = require('express'); //Importiamo express
const server = express(); //inizzializiamo express invocandolo come una funzione e salvando il risultato in una variabile
const port = 3000 //definiamo una porta

server.get('/',(req, res)=>{ //creiamo una rotta base 
    res.send('Pop verso project')
})

server.listen(port, ()=>{//mettiamo il server in ascolto
    console.log("server aperto sulla porta "+ port)
})
