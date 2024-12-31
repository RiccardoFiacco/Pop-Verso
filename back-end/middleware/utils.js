const connection = require('../db.js')

function existsIdCharacter(req, res, next){
    const id =  req.params.id
    const query = `
    select * 
    from characters
    where id = ?`

    connection.query(query, id, (err, results)=>{
        if(err){
            return results.status(500).json({ error: 'Database query failed' });
        }
    })

    next();
}

function existsIdTeams(req, res, next){
    const id =  req.params.id
    const query = `
    select * 
    from teams
    where id = ?`

    connection.query(query, id, (err, results)=>{
        if(err){
            return results.status(500).json({ error: 'Database query failed' });
        }
    })

    next();
}

function checkVoid (req, res, next){
    const keysArr = Object.keys(req.body); //se invece esiste l'id, prendo le chiavi del json che mi è stato mandato
    if(keysArr.length == 0){ //se sono 0
        return res.json({error:"insert something"}) //vuol dire che non mi hanno mandato nulla
    }
    next()
}

function checkInput(req, res, next){

    const {name, age, shadow, description} = req.body;
    let error = [];
    if(!name){ error.push("name non presente") } 
    if(!age){ error.push("age non presente") }
    if(!shadow){ error.push(" shadow non presente") } 
    if(!description){ error.push("description non presente") }
    if(error.length > 0){
        res.status(403)
        return res.json({
            error:"invalid req",
            message: error
        })
    }

    next()
}

module.exports = {existsIdCharacter, checkInput, checkVoid};