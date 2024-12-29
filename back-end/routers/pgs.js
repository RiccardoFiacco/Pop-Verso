const express = require('express')
const router = express.Router();
const connection = require('../db.js')
//index
router.get('/',(req, res)=>{ 
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
})

//show
router.get('/:id',(req, res)=>{ 
    const id = req.params.id;
    const query = `select c.*, ct.team_id, ct.is_spy
                    from characters as c
                    join character_teams as ct
                    on c.id = ct.character_id
                    where c.id = ?`
    
    connection.query(query, [id], (err, results)=>{
        if(err){
            return results.status(500).json({ error: 'Database query failed' })
        }
        res.json(results)
    })
})

//store
router.post('/',(req, res)=>{ 
    res.send("store pgs")
})

//update
router.put('/:id',(req, res)=>{ 
    res.send(" update pg id "+req.params.id)
})

//modify
router.patch('/:id',(req, res)=>{ 
    res.send(" modify pg id "+req.params.id)
})

//destroy
router.delete('/:id',(req, res)=>{ 
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
})
module.exports = router