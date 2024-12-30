const connection = require('../db.js')

function index(req, res, next){
    const query = `select c.*, ct.team_id, ct.is_spy
                    from characters as c
                    join character_teams as ct
                    on c.id = ct.character_id`
    
    connection.query(query, (err, results)=>{
        if(err){
            return results.status(500).json({ error: 'Database query failed' })
        }
        res.json(results)
    })
    next();
}

function show(req, res, next){
    const id = req.params.id;
    const query = `
    select c.*, ct.team_id, ct.is_spy
    from characters as c
    join character_teams as ct
    on c.id = ct.character_id
    where c.id = ?`;
    
    connection.query(query, [id], (err, results)=>{
        if(err){
            return results.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    })

    next();
}

function store(req, res, next){
    const {name, age, shadow, description} = req.body;
    const query = `
    INSERT INTO characters (name, age, shadow, description) VALUES
    (?, ?, ?, ?)`;
    
    connection.query(query, [name, age, shadow, description], (err, results)=>{
        if(err){
            return results.status(500).json({ error: 'Database query failed' });
        }
        res.send("inserimento andato a buon fine")
    })
    
    next();
}

function storeCT(req, res, next){
    // const {character_id, team_id, is_spy} = req.body;
    // const query = `
    // INSERT INTO characters (character_id, team_id, is_spy) VALUES
    // (?, ?, ?)`;
    
    // connection.query(query, [character_id, team_id, is_spy], (err, results)=>{
    //     if(err){
    //         return results.status(500).json({ error: 'Database query failed' });
    //     }
    //     res.send("inserimento andato a buon fine")
    // })
    console.log("store della tabella ponte")
    next();
}

function update(req, res, next){
    const {name, age, shadow, description} = req.body;  
    next();
}

function modify(){}

function destroy(req, res, next){
    const id = req.params.id;
    const query = `delete 
                    from characters 
                    where id = ?`
    
    connection.query(query, [id], (err, results)=>{
        if(err){
            return results.status(500).json({ error: 'Database query failed' })
        }
        res.send("eliminato")
    })
    next();
}

module.exports = {show, index, destroy, store, storeCT}