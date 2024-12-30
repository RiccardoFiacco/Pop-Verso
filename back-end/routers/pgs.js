const express = require('express')
const router = express.Router();
const pgsController = require('../controller/pgsController.js')

//index
router.get('/',pgsController.index, ()=>{ 
    console.log("finita la index");
})

//show
router.get('/:id', pgsController.show, ()=>{
    console.log("finita la show");
})

//store
router.post('/',pgsController.store, pgsController.storeCT,()=>{
    console.log("fine della store") 
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
router.delete('/:id', pgsController.destroy, (req, res)=>{ 
    console.log("finita la delete");
})
module.exports = router