const express = require('express'); //Importiamo express
const server = express(); //inizzializiamo express invocandolo come una funzione e salvando il risultato in una variabile
const port = 3000 //definiamo una porta
const pgsRouter = require('./routers/pgs');
const teamsRouter = require('./routers/teams');
server.use(express.json())
server.use('/pgs', pgsRouter)
server.use('/teams', teamsRouter)

server.listen(port, ()=>{//mettiamo il server in ascolto
    console.log("server aperto sulla porta "+ port)
})
