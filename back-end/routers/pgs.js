const express = require('express')
const router = express.Router();
//index
router.get('/',(req, res)=>{ 
    res.send('index pgs')
})

//show
router.get('/:id',(req, res)=>{ 
    res.send("show pgs"+req.params.id)
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
    res.send("destroy pg id "+req.params.id)
})
module.exports = router