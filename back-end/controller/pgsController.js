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

module.exports = {show, index, destroy}