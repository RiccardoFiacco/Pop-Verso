const connection = require('../db.js')

function index(req, res, next){
    const query = `select * from teams`
    
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
    select * 
    from teams
    where id = ?`;
    
    connection.query(query, [id], (err, results)=>{
        if(err){
            return results.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    })

    next();
}

function store(req, res, next){
    const {name, description} = req.body;
    const query = `
    INSERT INTO teams (namedescription) VALUES
    (?, ?)`;
    
    connection.query(query, [name, description], (err, results)=>{
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
    const {name, description, id} = req.body;
    const query = `
    UPDATE characters
    SET name = ?, age = ?, shadow = ?, description = ?
    WHERE id=?;`

    connection.query(query, [name, description, id], (err, results)=>{
        if(err){
            return results.status(500).json({ error: 'Database query failed' });
        }
        res.send("modifica andata a buon fine")
    })
    next();
}

function modify(req, res, next){
    const {name, description} = req.body;
    const id = req.params.id;
    const inputArray = []
    let string = []
    if(name){
        inputArray.push(name)
        string.push('name=?')
    }
    if(description){
        inputArray.push(description)
        string.push('description=?')
    }
    if(id){
        inputArray.push(id)
    }
    
    string = string.join(',')


    const query = inputArray.length>0 ?
    `UPDATE characters
    SET ${string}
    WHERE id=?;` 
    : 
    ` `

    connection.query(query, inputArray, (err, results)=>{
        if(err){
            return results.status(500).json({ error: 'Database query failed' });
        }
        res.send("modifica andata a buon fine")
    })
    next();
}

function destroy(req, res, next){
    const id = req.params.id;
    const query = `delete from teams where id = ?`
    
    connection.query(query, [id], (err, results)=>{
        if(err){
            return results.status(500).json({ error: 'Database query failed' })
        }
        res.send("eliminato")
    })
    next();
}

module.exports = {show, index, destroy, store, storeCT, update, modify}