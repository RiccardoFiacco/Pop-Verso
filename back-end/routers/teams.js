const express = require('express')
const router = express.Router();

router.get('/',(req, res)=>{ 
    res.send('index teams')
})

//show
router.get('/:id',(req, res)=>{ 
    res.send("show team"+req.params.id)
})

//store
router.post('/',(req, res)=>{ 
    res.send("store teams")
})

//update
router.put('/:id',(req, res)=>{ 
    res.send(" update team id "+req.params.id)
})

//modify
router.patch('/:id',(req, res)=>{ 
    res.send(" modify team id "+req.params.id)
})

//destroy
router.delete('/:id',(req, res)=>{ 
    res.send("destroy team id "+req.params.id)
})

module.exports = router